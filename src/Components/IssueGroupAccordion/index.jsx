import React, { useState } from 'react';
import AiSuggestionCard from '../AISuggestionBox'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles.scss';

export default function IssueGroupAccordion({ type, issues, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);

  const getSeverityBadge = (level, count) => {
    if (level === 3) return <span className="badge badge-high">{`${count} High 🔴`}</span>;
    if (level === 2) return <span className="badge badge-medium">{`${count} Medium 🟡`}</span>;
    return <span className="badge badge-low">{`${count} Low 🟢`}</span>;
  };

  const sortedIssues = [...issues].sort((a, b) => b.severity - a.severity);

  const handleToggleSuggestion = (index) => {
    if (activeSuggestionIndex === index) {
      setActiveSuggestionIndex(null);
    } else {
      setActiveSuggestionIndex(index);
    }
  };

  return (
    <div className="issue-list__group">
      <button
        className="issue-list__group-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`group-${type}`}
        type="button"
      >
        <div className="issue-type">
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
                  Line {issue.loc.start.line} – {issue.loc.end.line}
                </div>
              )}
              {issue.snippet && (
                <SyntaxHighlighter language="typescript" style={a11yDark} customStyle={{
                  background: '#0a0f1a', 
                  borderRadius: '5px', 
                  padding: '1rem', 
                  fontSize: '0.85rem'
                }}>
                  {issue.snippet}
                </SyntaxHighlighter>
              )}

              <div className="issue-list-btn-container">
                <button
                  className="issue-list__solution-btn"
                  onClick={() => handleToggleSuggestion(i)}
                >
                  🤖 {activeSuggestionIndex === i ? 'Hide Suggestion' : 'Show AI Suggestion'}
                </button>
              </div>

              {activeSuggestionIndex === i && (
                <AiSuggestionCard suggestion={issue.suggestion} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
