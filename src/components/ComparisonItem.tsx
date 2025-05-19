
import React from 'react';

interface ComparisonItemProps {
  title: string;
  description: string;
  isPositive?: boolean;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({
  title,
  description,
  isPositive = false,
}) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className={`w-5 h-5 mt-1 flex-shrink-0 rounded-full flex items-center justify-center ${
        isPositive ? 'bg-neon-green/20' : 'bg-red-500/20'
      }`}>
        {isPositive ? (
          <svg className="w-3 h-3 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      <div>
        <h4 className="font-medium text-lg mb-1">{title}</h4>
        <p className="text-neon-text/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ComparisonItem;
