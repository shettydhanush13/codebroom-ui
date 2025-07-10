import React, { useState } from 'react';
import './styles.scss';

export default function IssueGroupAccordion({ type, issues, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const getSeverityBadge = (level, count) => {
    if (level === 3) {
      return <span className="badge badge-high">{`${count} High 🔴`}</span>;
    }
    if (level === 2) {
      return <span className="badge badge-medium">{`${count} Medium 🟡`}</span>;
    }
    return <span className="badge badge-low">{`${count} Low 🟢`}</span>;
  };

  // Sort issues before rendering
  const sortedIssues = [...issues].sort(
    (a, b) => b.severity - a.severity
  );

  return (
    <div className="issue-list__group">
      <button
        className="issue-list__group-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`group-${type}`}
        type="button"
      >
        <div className='issue-type'>
            <div>
                <span className="issue-list__icon">{icon}</span>
                <span className="issue-list__group-title">{type}</span>
                <span className="issue-list__group-category"> - {issues[0].category}</span>
            </div>
            {getSeverityBadge(issues[0].severity, issues.length)}
        </div>
        <span className={`arrow ${isOpen ? 'open' : ''}`} aria-hidden="true" />
      </button>
      <div
        id={`group-${type}`}
        className={`issue-list__items ${isOpen ? 'open' : 'closed'}`}
        role="region"
        aria-labelledby={`group-${type}-header`}
      >
        <ul>
          {sortedIssues.map((issue, i) => (
            <li key={i} className="issue-list__item">
              <div className="issue-list__header">
                {issue.name && <div className="issue-list__name">{issue.name}</div>}
              </div>
              <div className="issue-list__message">{issue.message}</div>
              {issue.loc && (
                <div className="issue-list__location">
                  Line {issue.loc.start.line} - {issue.loc.end.line}
                </div>
              )}

              {issue.snippet && (
                <pre className="code-snippet">
                    <code>{issue.snippet}</code>
                </pre>
              )}

              {/* <div className="issue-list-btn-container">
                <button
                  className="issue-list__solution-btn"
                  onClick={() => setShowSolution(showSolution === i ? null : i)}
                >
                  🤖 Fix Suggestion
                </button>
                <button 
                    className="issue-list__solution-btn" 
                    onClick={() => {}}
                >
                🎟️ Create Ticket
                </button>
                <button
                  className="issue-list__solution-btn"
                  onClick={() => alert('Issue marked as ignored!')}
                >
                  🚫 Ignore
                </button>
                <button 
                    className="issue-list__solution-btn" 
                    onClick={() => {}}
                >
                📖 Learn
                </button>
              </div> */}

              {/* {showSolution === i && (
                <div className="issue-list__solution">
                  🤖 Our AI-powered quick fix suggestions are on the way. Stay tuned!
                </div>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
