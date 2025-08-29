
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-[100] bg-gradient-to-br from-background via-brand-surface to-background flex items-center justify-center animate-fade-out">
        {/* Fade out animation */}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-background via-brand-surface to-background flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gradient-from/20 via-brand-gradient-via/10 to-brand-gradient-to/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-br from-brand-primary/10 to-transparent animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-tl from-brand-secondary/10 to-transparent animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        {/* Logo container */}
        <div className="relative">
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to blur-xl opacity-50 animate-pulse"></div>
          
          {/* Logo */}
          <div className="relative w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-scale-in">
            <img 
              src="/lovable-uploads/6eb62808-1298-4053-ae35-52e6ec22dde5.png" 
              alt="SmartName AI" 
              className="w-14 h-14 floating"
            />
          </div>
        </div>

        {/* App name */}
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-4xl font-bold gradient-text">
            SmartName AI
          </h1>
          <p className="text-white/60 text-lg font-medium">
            AI-Powered Business Names
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center space-x-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
          <span className="text-white/50 text-sm">Loading...</span>
          <Sparkles className="w-5 h-5 text-brand-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to rounded-full animate-pulse w-full transform origin-left transition-all duration-2000"></div>
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <p className="text-white/40 text-xs">
          Powered by Advanced AI Technology
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
