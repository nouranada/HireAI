
import { cn } from '@/lib/utils';

interface MatchScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MatchScore = ({
  score,
  size = 'md',
  className,
}: MatchScoreProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-12 h-12 text-sm';
      case 'lg':
        return 'w-24 h-24 text-xl';
      case 'md':
      default:
        return 'w-16 h-16 text-base';
    }
  };

  const getColorClasses = () => {
    if (score >= 80) return 'text-hireai-success border-hireai-success';
    if (score >= 60) return 'text-hireai-blue border-hireai-blue';
    return 'text-hireai-warning border-hireai-warning';
  };

  const dashArray = 2 * Math.PI * 45; // 2πr where radius is 45
  const dashOffset = dashArray * (1 - score / 100);

  return (
    <div className={cn('match-score-circle', getSizeClasses(), getColorClasses(), className)}>
      <svg className="absolute inset-0" viewBox="0 0 100 100">
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="currentColor" 
          strokeOpacity="0.2" 
          strokeWidth="6" 
        />
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeDasharray={dashArray} 
          strokeDashoffset={dashOffset} 
          transform="rotate(-90 50 50)" 
        />
      </svg>
      <div className="font-semibold">
        {score}%
      </div>
    </div>
  );
};

export default MatchScore;
