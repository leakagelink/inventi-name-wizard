
import { Home, Sparkles, Heart, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNavigation = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Generate', path: '/generate', icon: Sparkles },
    { name: 'Favorites', path: '/favorites', icon: Heart },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 md:hidden">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-brand-primary'
                    : 'text-white/60 hover:text-white/80'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
