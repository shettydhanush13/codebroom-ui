import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RepoForm from '../../Components/RepoForm';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('repo');

  const handleAnalyze = (path, token) => {
    let route = 'repoPath';
    if (mode === 'file') route = 'filePath';
    navigate(`/results?${route}=${encodeURIComponent(path)}&token=${encodeURIComponent(token || '')}`);
  };

  return (
    <>
      <Header />
      <div className="home">
      <div className="home__background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="grid-lines"></div>
      </div>
        <header className="home__header">
          <p className="home__title">
            Clean up your codebase with AI-powered insights.
          </p>
          <p className="home__subtitle">
            CodeBroom analyzes your repositories, uncovers hidden issues, and helps you keep your code clean, fast, and maintainable.
          </p>
        </header>

        <p className="home__prompt">
          Paste your repo/file URL below to get your <b>FREE</b> code hygiene report.
        </p>

        <div className="home__options">
          <button
            className={`home__option-button ${mode === 'repo' ? 'active' : ''}`}
            onClick={() => setMode('repo')}
          >
            Scan Repo
          </button>
          <button
            className={`home__option-button ${mode === 'file' ? 'active' : ''}`}
            onClick={() => setMode('file')}
          >
            Scan File
          </button>
          <button
            className={`home__option-button ${mode === 'login' ? 'active' : ''}`}
            onClick={() => navigate('/login')}
          >
            Connect your Repo
          </button>
        </div>

        <section className="home__form-section">
          <RepoForm onAnalyze={handleAnalyze} mode={mode} />
        </section>

        <section className="home__features">
          <h2 className="neon-text">Why analyze your code with us?</h2>
          <ul>
            <li>Detect deeply nested, hard-to-maintain code.</li>
            <li>Find hidden bugs and anti-patterns early.</li>
            <li>Improve readability and reduce tech debt.</li>
            <li>Get actionable suggestions to improve quality.</li>
          </ul>
          <div className="home__badges">
            <span className="badge">JS/TS Support</span>
            <span className="badge">AST Analysis</span>
            <span className="badge">Complexity Score</span>
            <span className="badge">Security Hints</span>
          </div>
        </section>
        <br />
        <br />
        <section className="home__features">
          <h2 className="neon-text">What Developers Say</h2>
          <blockquote>
            "CodeBroom helped me identify critical code smells I never noticed before. Highly recommend!" — Jane D., Frontend Engineer
          </blockquote>
          <blockquote>
            "The actionable suggestions saved our team hours in code reviews." — Raj P., Full Stack Developer
          </blockquote>
        </section>

        <section className="home__footer">
          <p className="home__tagline">✨ Crafting cleaner code, one scan at a time ✨</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
