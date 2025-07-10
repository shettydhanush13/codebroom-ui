import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { analyzeRepo, analyzeFile } from '../../Api/analysis';
import ScoreCard from '../../Components/ScoreCard';
import FileIssuesBarChart from '../../Components/ChartSummary/FileIssue';
import IssueList from '../../Components/IssueList';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './styles.scss';

const Results = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const filePath = query.get('filePath');
    const repoUrl = query.get('repoPath');
    const token = query.get('token');

    async function fetchData() {
      setLoading(true);

      try {
        let res;
        if (filePath) {
          res = await analyzeFile({ filePath, token });
        } else if (repoUrl) {
          res = await analyzeRepo({ repoPath: repoUrl, token });
        } else {
          throw new Error("No valid filePath or repoPath provided");
        }
        calculateWarningData(res);
        setData(res);
      } catch (err) {
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [location.search]);

  const calculateWarningData = (data) => {
    if (!data || !data.issues) return;

    const allIssues = data.issues.reduce((acc, fileGroup) => {
      if (fileGroup.issues?.length) {
        acc.push(...fileGroup.issues);
      }
      return acc;
    }, []);

    const totalWarnings = allIssues.length;

    const priorityCounts = { high: 0, medium: 0, low: 0 };
    const categoryCounts = {};

    allIssues.forEach((issue) => {
      if (issue.severity === 3) priorityCounts.high++;
      else if (issue.severity === 2) priorityCounts.medium++;
      else priorityCounts.low++;

      const cat = issue.category || 'Uncategorized';
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    data.totalWarnings = totalWarnings;
    data.priorityCounts = priorityCounts;
    data.categoryCounts = categoryCounts;
  };

  if (loading) {
    return (
      <div className="results__loading">
        <div className="spinner"></div>
        <p> Analyzing repo<span className="dots"></span></p>
      </div>
    );
  }

  if (!data) return <div className="results__error">Failed to load analysis.</div>;

  return (
    <>
      <Header />
      <div className="results">
        <div className="results__meta">
          {data.file ? (
            <p><strong>File:</strong> {data.file}</p>
          ) : (
            <p><strong>Repo:</strong> {data.repo}</p>
          )}
        </div>

        <div className="results__content">
          <div className="results__issues">
            <ScoreCard
              score={data.score}
              grade={data.grade}
              totalWarnings={data.totalWarnings || 0}
              categoryCounts={data.categoryCounts || {}}
              priorityCounts={data.priorityCounts || { high: 0, medium: 0, low: 0 }}
            />
            <br />
            <IssueList className='results__issueList' type={data.file ? 'file' : 'repo'} issues={data.issues} />
          </div>
          {data.repo && <div className="results__charts">
            <FileIssuesBarChart issues={data.issues} />
          </div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Results;
