
import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-sport-blue/10 via-sport-green/10 to-sport-red/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Predict Sports Outcomes with <span className="gradient-text">AI Precision</span>
          </h1>
          <p className="text-lg md:text-xl text-sport-gray mb-8">
            Our advanced AI algorithms analyze team stats, player performance, and historical data to provide accurate predictions for upcoming games.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-sport-blue hover:bg-sport-blue/90 text-white flex items-center gap-2">
              <TrendingUp size={20} />
              View Predictions
            </Button>
            <Button size="lg" variant="outline" className="border-sport-blue text-sport-blue hover:bg-sport-blue/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
