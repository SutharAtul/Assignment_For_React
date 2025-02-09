import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressPercentage = `${progress}%`;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: progressPercentage }}
      ></div>
    </div>
  );
};

export default ProgressBar;