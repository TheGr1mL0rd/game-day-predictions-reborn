
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, PieChart, BarChart4, Trophy, Lightbulb, History } from 'lucide-react';

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Statistical models that analyze thousands of data points to generate predictions',
    icon: LineChart,
    color: 'text-sport-blue'
  },
  {
    title: 'Team Matchup Insights',
    description: 'Detailed analysis of how teams match up against each other historically',
    icon: PieChart,
    color: 'text-sport-green'
  },
  {
    title: 'Performance Metrics',
    description: 'Key performance indicators for teams and players across different conditions',
    icon: BarChart4,
    color: 'text-sport-yellow'
  },
  {
    title: 'Win Probability',
    description: 'Real-time win probability calculations as games progress',
    icon: Trophy,
    color: 'text-sport-red'
  },
  {
    title: 'Smart Insights',
    description: 'AI-generated insights that explain the reasoning behind predictions',
    icon: Lightbulb,
    color: 'text-purple-500'
  },
  {
    title: 'Historical Context',
    description: 'Contextual information from past matchups and significant games',
    icon: History,
    color: 'text-amber-500'
  }
];

const AIFeatures: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">AI-Powered Features</h2>
          <p className="text-sport-gray">Our platform leverages machine learning to deliver accurate predictions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`rounded-full p-3 inline-flex ${feature.color} bg-gray-100 dark:bg-gray-800 mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sport-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
