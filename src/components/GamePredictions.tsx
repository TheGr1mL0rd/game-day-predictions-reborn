
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type Team = {
  name: string;
  logo: string;
  winProbability: number;
};

type Game = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  league: string;
};

const games: Game[] = [
  {
    id: '1',
    homeTeam: {
      name: 'Lakers',
      logo: '🏀',
      winProbability: 65
    },
    awayTeam: {
      name: 'Warriors',
      logo: '🏀',
      winProbability: 35
    },
    date: '2025-05-05',
    league: 'NBA'
  },
  {
    id: '2',
    homeTeam: {
      name: 'Chiefs',
      logo: '🏈',
      winProbability: 55
    },
    awayTeam: {
      name: 'Ravens',
      logo: '🏈',
      winProbability: 45
    },
    date: '2025-05-06',
    league: 'NFL'
  },
  {
    id: '3',
    homeTeam: {
      name: 'Man City',
      logo: '⚽',
      winProbability: 70
    },
    awayTeam: {
      name: 'Arsenal',
      logo: '⚽',
      winProbability: 30
    },
    date: '2025-05-07',
    league: 'Premier League'
  }
];

const GamePredictions: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Latest Game Predictions</h2>
          <p className="text-sport-gray">AI-powered predictions for upcoming games</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="text-sport-blue border-sport-blue">
                    {game.league}
                  </Badge>
                  <span className="text-sm text-sport-gray">{new Date(game.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{game.homeTeam.logo}</div>
                    <div className="font-semibold">{game.homeTeam.name}</div>
                    <div className="text-sport-blue font-bold">{game.homeTeam.winProbability}%</div>
                  </div>
                  <div className="text-lg font-bold text-sport-gray">VS</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{game.awayTeam.logo}</div>
                    <div className="font-semibold">{game.awayTeam.name}</div>
                    <div className="text-sport-red font-bold">{game.awayTeam.winProbability}%</div>
                  </div>
                </div>
                <Progress 
                  value={game.homeTeam.winProbability} 
                  className="h-2 bg-sport-red/20"
                  indicatorClassName="bg-sport-blue"
                />
                <div className="mt-4 text-center">
                  <span className="text-sm font-medium">
                    {game.homeTeam.winProbability > game.awayTeam.winProbability 
                      ? `${game.homeTeam.name} predicted to win` 
                      : `${game.awayTeam.name} predicted to win`}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePredictions;
