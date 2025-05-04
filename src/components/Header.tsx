
import React from 'react';
import { Button } from "@/components/ui/button";
import { Football, Home, LineChart, Settings, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-sport-dark border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Football className="h-8 w-8 text-sport-blue" />
            <h1 className="text-2xl font-bold gradient-text">SportAI</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <Home size={18} />
              <span>Home</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <TrendingUp size={18} />
              <span>Predictions</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <LineChart size={18} />
              <span>Stats</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Settings size={18} />
              <span>Settings</span>
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
