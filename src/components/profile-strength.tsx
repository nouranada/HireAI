
import { Progress } from '@/components/ui/progress';

interface ProfileStrengthProps {
  score: number;
  suggestions: string[];
}

const ProfileStrength = ({ score, suggestions }: ProfileStrengthProps) => {
  const getStrengthText = () => {
    if (score < 25) return 'Very Weak';
    if (score < 50) return 'Weak';
    if (score < 75) return 'Good';
    if (score < 90) return 'Strong';
    return 'Excellent';
  };
  
  const getProgressColor = () => {
    if (score < 25) return 'bg-red-500';
    if (score < 50) return 'bg-hireai-warning';
    if (score < 75) return 'bg-blue-500';
    return 'bg-hireai-success';
  };

  return (
    <div className="bg-white rounded-lg p-5 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-900">Profile Strength</h3>
        <span className={`text-sm font-semibold ${score >= 75 ? 'text-hireai-success' : 'text-hireai-warning'}`}>
          {getStrengthText()}
        </span>
      </div>

      <Progress value={score} className={`h-2 ${getProgressColor()}`} />
      
      {suggestions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Improve your profile:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <span className="text-hireai-blue mr-2">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileStrength;
