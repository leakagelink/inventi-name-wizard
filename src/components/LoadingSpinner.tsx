
import { Sparkles } from 'lucide-react';

interface LoadingSpinnerProps {
  text?: string;
}

const LoadingSpinner = ({ text = "Generating amazing names..." }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-brand-primary rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-brand-primary animate-pulse" />
        </div>
      </div>
      <p className="text-white/70 text-center font-medium">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
