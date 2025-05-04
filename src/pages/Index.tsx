
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GamePredictions from '@/components/GamePredictions';
import TeamStats from '@/components/TeamStats';
import AIFeatures from '@/components/AIFeatures';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GamePredictions />
        <TeamStats />
        <AIFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
