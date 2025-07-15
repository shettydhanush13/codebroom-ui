import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles.scss';

export default function AiSuggestionCard({ suggestion }) {
  const [displayedCode, setDisplayedCode] = useState('');
  const [showCodeLoader, setShowCodeLoader] = useState(false);
  // const [copied, setCopied] = useState(false);

  let parsedSuggestion = null;
  try {
    parsedSuggestion = suggestion ? JSON.parse(suggestion) : null;
  } catch (e) {
    console.error('Invalid suggestion JSON:', e);
  }

  const { title, description, steps, codeSnippet, benefits } = parsedSuggestion || {};

  useEffect(() => {
    if (!codeSnippet) return;

    setShowCodeLoader(true);
    setDisplayedCode('');

    const loaderTimer = setTimeout(() => {
      setShowCodeLoader(false);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < codeSnippet.length) {
          setDisplayedCode((prev) => prev + codeSnippet.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 5);

      return () => clearInterval(typeInterval);
    }, 5000);

    return () => clearTimeout(loaderTimer);
  }, [codeSnippet]);

  // const handleCopy = async () => {
  //   try {
  //     await navigator.clipboard.writeText(codeSnippet);
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000);
  //   } catch (err) {
  //     console.error('Failed to copy: ', err);
  //   }
  // };

  if (!parsedSuggestion) return <p style={{ color: '#888' }}>No suggestion available</p>;

  return (
    <div className="ai-suggestion-card">
      <h3 className="ai-suggestion-title">{title}</h3>
      <p className="ai-suggestion-description">{description}</p>

      {steps && steps.length > 0 && (
        <div className="ai-suggestion-section">
          <h4 className="ai-suggestion-heading">Steps to fix:</h4>
          <ul>
            {steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {codeSnippet && (
        <div className="ai-suggestion-section">
          <h4 className="ai-suggestion-heading">Refactored Code:</h4>
          {showCodeLoader && <p>✍️ Writing refactored code...</p>}

          {displayedCode && (
            <>
              {/* <div className="code-copy-container">
                <button className="copy-button" onClick={handleCopy}>
                  {copied ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div> */}
              <SyntaxHighlighter
                language="typescript"
                style={a11yDark}
                customStyle={{
                  background: '#0a0f1a',
                  borderRadius: '5px',
                  padding: '1rem',
                  fontSize: '0.85rem',
                  marginTop: '0.5rem',
                }}
              >
                {displayedCode}
              </SyntaxHighlighter>
            </>
          )}
        </div>
      )}

      {benefits && benefits.length > 0 && (
        <div className="ai-suggestion-section">
          <h4 className="ai-suggestion-heading">Benefits:</h4>
          <ul>
            {benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
