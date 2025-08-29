
import { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface NameCardProps {
  name: string;
  onToggleFavorite?: (name: string) => void;
  isFavorite?: boolean;
}

const NameCard = ({ name, onToggleFavorite, isFavorite = false }: NameCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(true);
      toast({
        title: "Copied!",
        description: `"${name}" has been copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite(name);
      toast({
        title: isFavorite ? "Removed from favorites" : "Added to favorites",
        description: `"${name}" has been ${isFavorite ? 'removed from' : 'added to'} your favorites.`,
      });
    }
  };

  return (
    <div className="card-glass group hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-200">
          {name}
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isFavorite
                ? 'text-red-400 hover:text-red-300'
                : 'text-white/50 hover:text-red-400'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg text-white/50 hover:text-white transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
