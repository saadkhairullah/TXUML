// components/ProgressBar.tsx
import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  score: number | null;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score }) => {
  const getColor = () => {
    if (score === null) return 'green';
    if (score <= 50) return 'green';
    if (score <= 75) return 'yellow';
    return 'red';
  };

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          height: `${score}%`,
          backgroundColor: getColor(),
        }}
      ></div>
      <div className="progress-label">{score}%</div>
    </div>
  );
};

export default ProgressBar;