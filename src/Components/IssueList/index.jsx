import React from 'react';
import IssueGroupAccordion from '../IssueGroupAccordion';
import './styles.scss';

const IssueList = ({ type: dataType, issues }) => {
  if (!issues || issues.length === 0) {
    return <p>No issues found! 🎉</p>;
  }

  const iconsMap = {
    CommentedOutCode: '💬',
    DeepNesting: '🧩',
    MagicNumber: '🔢',
    DuplicateFunction: '🔁',
    DuplicateStringLiteral: '🔁',
    LongFile: '📚',
    LargeClass: '📜',
    LongFunction: '📜',
    LongArrowFunction: '📜',
    ManyParameters: '📦',
    ConsoleStatement: '🖥️',
    DebuggerStatement: '🐞',
    DeprecatedApiUsage: '⚠️',
    AsyncWithoutAwait: '⏳',
    AwaitWithoutAsync: '⌛',
    NamingConventionViolation: '🔤',
    SecurityRiskEval: '🛡️',
    SecurityRiskInnerHTML: '🧨',
    HighCyclomaticComplexity: '🔀'
  };

  const groupIssues = (issues) => {
    return issues.reduce((acc, issue) => {
        acc[issue.type] = acc[issue.type] || [];
        acc[issue.type].push(issue);
        return acc;
    }, {});
  }

  return (
    <>
        {dataType === 'file' ? <div className="issue-list">
            {Object.entries(groupIssues(issues)).map(([type, issues]) => (
            <IssueGroupAccordion
                key={type}
                type={type}
                issues={issues}
                icon={iconsMap[type]}
            />
            ))}
        </div>
        : <div className="issue-list">
            {issues.map((iss) => <>
                {iss.issues.length ? <>
                    <p className='issue-list-filename'>{iss.file}</p>
                    {Object.entries(groupIssues(iss.issues)).map(([type, issues]) => (
                    <IssueGroupAccordion
                        key={type}
                        type={type}
                        issues={issues}
                        icon={iconsMap[type]}
                    />
                    ))}
                </> : <></>}
            </>)}
        </div>}
    </>
  );
};

export default IssueList;
