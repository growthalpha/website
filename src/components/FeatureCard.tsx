
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <div 
      className={`bg-navy-card p-8 rounded-lg card-hover glowing-border ${className}`}
    >
      <div className="bg-navy-light p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neon-text/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
