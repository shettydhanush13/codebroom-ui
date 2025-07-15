import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './styles.scss';

const Documentation = () => {
  return (
    <>
      <Header />
      <div className="documentation">
        <header className="documentation__header">
          <p className="documentation__subtitle">Your AI-powered code quality & security companion.</p>
        </header>

        <section className="documentation__section">
          <h2>✨ Features</h2>
          <ul>
            <li><strong>Repository & File Analysis:</strong> Analyze entire repositories or single files by providing a Git URL or file path (local or remote).</li>
            <li><strong>Advanced Issue Detection:</strong> Detects long functions, excessive parameters, deep nesting, high cyclomatic complexity, magic numbers, large classes, duplicate strings, deprecated APIs, security anti-patterns, and more.</li>
            <li><strong>AI-powered Fix Suggestions:</strong> Uses an integrated AI agent to generate detailed, actionable fix suggestions (with step-by-step instructions and refactored code examples).</li>
            <li><strong>Dynamic Scoring & Grading:</strong> Automatically calculates an overall score (0–100) and grade (A–F) based on severity and impact of issues.</li>
            <li><strong>Contextual Snippets:</strong> Each issue shows clear code snippets, line locations, and explanations to quickly understand context.</li>
            <li><strong>Security & Clean Code Checks:</strong> Detects risky patterns such as `eval`, `innerHTML`, console logs, and improper error handling.</li>
            <li><strong>AI Agent Prompt Management:</strong> Dynamically generates prompts tailored to each issue to improve suggestion accuracy while minimizing cost and tokens.</li>
            <li><strong>Inline ESLint Integration:</strong> Runs ESLint with fallback default configs to catch common style and linting issues.</li>
            <li><strong>Commented Code & Dead Code Detection:</strong> Flags large commented-out blocks and unused code to improve maintainability.</li>
            <li><strong>Architecture Visualization:</strong> Generates architecture diagrams to explain how the analysis process works internally for transparency.</li>
          </ul>
        </section>

        <section className="documentation__section">
          <h2>🚀 How It Works</h2>
          <ol>
            <li>Submit a repository URL or file path on the <strong>Home</strong> page.</li>
            <li>The system securely clones or fetches your code, then parses it into an abstract syntax tree (AST) for detailed inspection.</li>
            <li>Analysis checks are performed for various code quality and security patterns using advanced static analysis and custom rules.</li>
            <li>Issues are scored, categorized, and enhanced with AI-generated fix suggestions.</li>
            <li>Results include severity badges, score breakdowns, and detailed refactor suggestions with example code blocks.</li>
            <li>Check your overall score and grade to quickly understand your codebase health.</li>
          </ol>
        </section>

        <section className="documentation__section">
          <h2>💡 Scoring & Grading</h2>
          <p>
            Your code starts with a score of 100. Each issue reduces the score based on severity and impact. Grades range from A (excellent) to F (critical), helping you prioritize improvements visually.
          </p>
        </section>

        <section className="documentation__section">
          <h2>🤖 AI Agent & Prompt Strategy</h2>
          <p>
            CodeBroom integrates a custom AI agent that generates prompts dynamically per issue, controlling verbosity and optimizing for cost. Suggestions include titles, descriptions, implementation steps, refactored code examples, and benefits, returned in a strict JSON format ready to render beautifully in your UI.
          </p>
        </section>

        <section className="documentation__section">
          <h2>🔒 Security & Privacy</h2>
          <p>
            All analysis runs inside isolated sandboxed environments. If you provide an access token for private repositories, it is used only for the current analysis and never stored. Your source code is not saved permanently or exposed to third parties. Security patterns (e.g., potential secret leaks, unsafe eval usage) are actively checked.
          </p>
        </section>

        <section className="documentation__section">
          <h2>📊 Architecture & Flow</h2>
          <p>
            CodeBroom follows a modular architecture combining AST-based static analysis, customizable issue checks, a specialized AI agent layer for code fix suggestions, and a clean UI for presenting insights. See our "How We Work" page for a visual diagram of the flow.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Documentation;
