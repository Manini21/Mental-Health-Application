import React from 'react';
import { Smile, Gamepad2 } from 'lucide-react';

const HomePage = () => (
  <div className="max-w-4xl mx-auto text-center p-8 bg-pastel-light rounded-xl shadow-lg">
    <h2 className="text-4xl font-extrabold text-pastel-dark mb-4">Welcome to Mind Oasis</h2>
    <p className="text-lg text-pastel-dark mb-6">
      Your sanctuary for mental well-being. Explore our resources for adults and our fun,
      engaging games for kids designed to help with focus and memory.
    </p>
    <div className="flex justify-center space-x-6">
      <div className="p-6 bg-pastel-lavender rounded-lg shadow-inner">
        <Smile className="h-16 w-16 text-pastel-blue mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-pastel-dark">Adults Section</h3>
        <p className="text-pastel-dark mt-2">Personalized well-being resources.</p>
      </div>
      <div className="p-6 bg-pastel-peach rounded-lg shadow-inner">
        <Gamepad2 className="h-16 w-16 text-pastel-pink mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-pastel-dark">Kids Section</h3>
        <p className="text-pastel-dark mt-2">Fun games for focus and memory.</p>
      </div>
    </div>
  </div>
);

export default HomePage;
