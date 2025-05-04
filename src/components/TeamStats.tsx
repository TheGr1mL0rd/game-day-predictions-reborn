
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type StatData = {
  name: string;
  wins: number;
  losses: number;
  points: number;
};

const nbaData: StatData[] = [
  { name: 'Lakers', wins: 42, losses: 30, points: 113.5 },
  { name: 'Celtics', wins: 52, losses: 20, points: 117.2 },
  { name: 'Warriors', wins: 38, losses: 34, points: 112.8 },
  { name: 'Bucks', wins: 48, losses: 24, points: 115.7 },
  { name: 'Nuggets', wins: 46, losses: 26, points: 114.1 }
];

const nflData: StatData[] = [
  { name: 'Chiefs', wins: 13, losses: 4, points: 27.3 },
  { name: 'Ravens', wins: 12, losses: 5, points: 28.5 },
  { name: 'Bills', wins: 11, losses: 6, points: 26.7 },
  { name: '49ers', wins: 12, losses: 5, points: 29.2 },
  { name: 'Cowboys', wins: 10, losses: 7, points: 25.1 }
];

const performanceData = [
  { month: 'Jan', lakers: 8, warriors: 6, chiefs: 3, ravens: 4 },
  { month: 'Feb', lakers: 6, warriors: 7, chiefs: 0, ravens: 0 },
  { month: 'Mar', lakers: 9, warriors: 8, chiefs: 0, ravens: 0 },
  { month: 'Apr', lakers: 7, warriors: 6, chiefs: 0, ravens: 0 },
  { month: 'May', lakers: 5, warriors: 4, chiefs: 0, ravens: 0 },
  { month: 'Jun', lakers: 8, warriors: 7, chiefs: 0, ravens: 0 },
  { month: 'Jul', lakers: 9, warriors: 5, chiefs: 0, ravens: 0 },
  { month: 'Aug', lakers: 0, warriors: 0, chiefs: 2, ravens: 1 },
  { month: 'Sep', lakers: 0, warriors: 0, chiefs: 3, ravens: 4 },
  { month: 'Oct', lakers: 0, warriors: 0, chiefs: 4, ravens: 3 },
  { month: 'Nov', lakers: 6, warriors: 7, chiefs: 3, ravens: 3 },
  { month: 'Dec', lakers: 7, warriors: 8, chiefs: 3, ravens: 4 },
];

const TeamStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState('nba');

  return (
    <section className="py-12 bg-sport-light dark:bg-sport-dark/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Team Statistics</h2>
          <p className="text-sport-gray">Performance data for top teams</p>
        </div>
        
        <Tabs defaultValue="nba" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="nba">NBA</TabsTrigger>
              <TabsTrigger value="nfl">NFL</TabsTrigger>
              <TabsTrigger value="performance">Performance Trends</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="nba">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nbaData.map((team) => (
                <Card key={team.name}>
                  <CardHeader>
                    <CardTitle>{team.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="text-sm text-sport-gray">Wins</span>
                        <p className="text-xl font-bold text-sport-green">{team.wins}</p>
                      </div>
                      <div>
                        <span className="text-sm text-sport-gray">Losses</span>
                        <p className="text-xl font-bold text-sport-red">{team.losses}</p>
                      </div>
                      <div>
                        <span className="text-sm text-sport-gray">PPG</span>
                        <p className="text-xl font-bold text-sport-blue">{team.points}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="text-sm text-sport-gray mb-1">Win Percentage</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div 
                            className="bg-sport-green h-2.5 rounded-full" 
                            style={{ width: `${(team.wins / (team.wins + team.losses) * 100)}%` }}>
                          </div>
                        </div>
                        <span className="ml-2 text-sm font-medium">
                          {Math.round(team.wins / (team.wins + team.losses) * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nfl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nflData.map((team) => (
                <Card key={team.name}>
                  <CardHeader>
                    <CardTitle>{team.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="text-sm text-sport-gray">Wins</span>
                        <p className="text-xl font-bold text-sport-green">{team.wins}</p>
                      </div>
                      <div>
                        <span className="text-sm text-sport-gray">Losses</span>
                        <p className="text-xl font-bold text-sport-red">{team.losses}</p>
                      </div>
                      <div>
                        <span className="text-sm text-sport-gray">PPG</span>
                        <p className="text-xl font-bold text-sport-blue">{team.points}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="text-sm text-sport-gray mb-1">Win Percentage</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div 
                            className="bg-sport-green h-2.5 rounded-full" 
                            style={{ width: `${(team.wins / (team.wins + team.losses) * 100)}%` }}>
                          </div>
                        </div>
                        <span className="ml-2 text-sm font-medium">
                          {Math.round(team.wins / (team.wins + team.losses) * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Team Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={performanceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="lakers" stroke="#1a73e8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="warriors" stroke="#fbbc05" />
                      <Line type="monotone" dataKey="chiefs" stroke="#34a853" />
                      <Line type="monotone" dataKey="ravens" stroke="#ea4335" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamStats;
