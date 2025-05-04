
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Trophy } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sport-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-sport-blue" />
              <h2 className="text-2xl font-bold">SportAI</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Using artificial intelligence to predict sports outcomes with unprecedented accuracy.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full text-gray-300 hover:text-white">
                <Facebook size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-300 hover:text-white">
                <Twitter size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-gray-300 hover:text-white">
                <Youtube size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Predictions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Statistics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sports</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">NBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">NFL</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">MLB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Soccer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">NHL</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Get the latest predictions and sports analysis delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400" 
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SportAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
