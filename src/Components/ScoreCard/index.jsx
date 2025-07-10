import React from 'react';
import './styles.scss';

const ScoreCard = ({ score, grade, totalWarnings, categoryCounts, priorityCounts }) => {
  const getIcon = (category) => {
    switch(category) {
      case 'Maintainability': return '🛠️';
      case 'Security': return '🔒';
      case 'Performance': return '🚀';
      case 'Cleanliness': return '🧹';
      default: return '';
    }
  }
  return (
    <div className="score-card">
      <h2>Score: {score} ({grade})</h2>
      <p>Total Warnings: {totalWarnings}</p>
      <div className="score-card__priority">
        <span className="badge high"> 🔴 High:{priorityCounts.high} &nbsp;</span>
        <span className="badge medium"> 🟡 Medium:{priorityCounts.medium} &nbsp;</span>
        <span className="badge low"> 🟢 Low:{priorityCounts.low} </span>
      </div>
      <br />
      <div className="score-card__priority">
        {Object.keys(categoryCounts).map((category) => <>
          <span className="badge high">{`${getIcon(category)} ${category}:${categoryCounts[category]}`} &nbsp;</span>
        </>)}
      </div>
    </div>
  );
};

export default ScoreCard;
