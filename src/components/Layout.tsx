
import { ReactNode } from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-20 md:pb-8">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
