import React, { useState } from 'react';
import './styles.scss';

const RepoForm = ({ onAnalyze, mode }) => {
  const [path, setPath] = useState('');
  const [token, setToken] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(path, token);
  };

  return (
    <form onSubmit={handleSubmit} className="repo-form">
      <div className="repo-form__group">
        <label>{mode === 'file' ? 'File URL:' : 'Repo URL:'}</label>
        <input
          type="text"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder={mode === 'file' ? 'https://example.com/owner/repo/-/blob/main/../file.js' : 'https://example.com/owner/repo'}
          required
        />
      </div>

      <div className="repo-form__group">
        <br />
        <div className="repo-form__token-label">
          <label>Access Token (for Private Repo):</label>
          <button
            type="button"
            className="repo-form__info-button"
            onClick={() => setShowInfo(!showInfo)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                      10-4.48 10-10S17.52 2 12 2zm0 
                      3c.83 0 1.5.67 1.5 1.5S12.83 
                      8 12 8s-1.5-.67-1.5-1.5S11.17 
                      5 12 5zm2 14h-4v-2h1v-4h-1v-2h3v6h1v2z"/>
            </svg>
          </button>
        </div>
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="GitHub or GitLab token with read access"
        />
        {showInfo && (
          <div className="repo-form__info-text">
            <strong>How to get a Personal Access Token?</strong>
            <ul>
              <li>GitHub: Go to <i><b>Settings → Developer settings → Personal access tokens</b></i>. Create a token with <code>repo</code> read permissions.</li>
              <li>GitLab: Go to <i><b>User Settings → Access Tokens</b></i>. Create token and enable <i><b>read_repository</b></i> scope.</li>
            </ul>
          </div>
        )}
      </div>

      <button type="submit" className="repo-form__button" disabled={!path}>
        Analyze
      </button>
    </form>
  );
};

export default RepoForm;
