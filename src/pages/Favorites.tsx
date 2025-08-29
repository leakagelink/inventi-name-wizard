
import { Heart, Trash2 } from 'lucide-react';
import Layout from '@/components/Layout';
import NameCard from '@/components/NameCard';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';

const Favorites = () => {
  const { favorites, toggleFavorite, clearFavorites } = useFavorites();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Your Favorites</span>
          </h1>
          <p className="text-white/70">
            Your saved business names
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Saved Names ({favorites.length})</span>
              </h3>
              <Button
                onClick={clearFavorites}
                variant="outline"
                className="btn-ghost text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.map((name, index) => (
                <div key={`${name}-${index}`} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NameCard
                    name={name}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={true}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-glass p-12">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Favorites Yet
              </h3>
              <p className="text-white/60">
                Start generating names and save your favorites here!
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
