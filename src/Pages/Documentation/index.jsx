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
                {/* <h1>📝 Documentation</h1> */}
                <p className="documentation__subtitle">Understand what CodeBroom offers and how to use it.</p>
            </header>

            <section className="documentation__section">
                <h2>✨ Features</h2>
                <ul>
                <li><strong>Repository Analysis:</strong> Analyze full repositories by providing repo URL and optional token.</li>
                <li><strong>File Analysis:</strong> Analyze a single file via file path or remote URL.</li>
                <li><strong>Issue Detection:</strong> Checks for long functions, many parameters, deeply nested blocks, high cyclomatic complexity, security risks, magic numbers, duplicate strings, and more.</li>
                <li><strong>ESLint Checks:</strong> Automatically run ESLint with a default recommended config if no local config is found.</li>
                <li><strong>Severity Scoring:</strong> Issues are categorized with severity levels (High, Medium, Low) and impact score calculation.</li>
                <li><strong>Score & Grade:</strong> Get an overall score (0–100) and a grade (A–F) for your file or repo health.</li>
                <li><strong>Code Snippets:</strong> Shows code snippets for each issue to help understand context.</li>
                <li><strong>Security Pattern Checks:</strong> Detects `eval`, `innerHTML`, console statements, and debugger usage.</li>
                <li><strong>Commented Code Detection:</strong> Finds large commented-out code blocks for cleanliness improvement.</li>
                </ul>
            </section>

            <section className="documentation__section">
                <h2>🚀 How to Use</h2>
                <ol>
                <li>Go to the <strong>Home</strong> page and enter your repository URL (and token if private).</li>
                <li>Click <strong>Analyze</strong> — the system will clone, scan, and generate a detailed report.</li>
                <li>Review the results, see issues with categories, severity, and suggestions.</li>
                <li>Check your overall code health score and grade.</li>
                </ol>
            </section>

            <section className="documentation__section">
                <h2>💡 Scoring & Grading</h2>
                <p>
                The score starts from 100 and decreases based on the type and number of issues. Grades range from A (excellent) to F (needs significant improvement).
                </p>
            </section>

            <section className="documentation__section">
                <h2>🔒 Security</h2>
                <p>
                CodeBroom uses sandboxed environments to analyze code safely. For private repos, you can supply a token, and your data is handled securely without storing your code permanently.
                </p>
            </section>
        </div>
        <Footer/>
    </>
  );
};

export default Documentation;
