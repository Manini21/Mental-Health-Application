import React from 'react';
import { Smile } from 'lucide-react';

const AdultsSection = () => {
  return (
    <div className="text-center p-8 bg-pastel-light dark:bg-pastel-dark text-pastel-dark dark:text-pastel-light min-h-screen">
      
      <div className="flex-grow pt-300 p-6 max-w-6xl mx-auto">
        <div style={{ height: '300px' }}></div> {/* Test content for scrolling */}
        <Smile className="h-24 w-24 mx-auto text-pastel-blue dark:text-pastel-mint mb-6" />
        <h2 className="text-4xl font-extrabold text-pastel-dark dark:text-pastel-light mb-4">Adults Section</h2>
        <p className="text-xl text-pastel-dark dark:text-pastel-light mb-8">
          Welcome to your personalized mental wellness journey. Here you can access a range of resources tailored for adults.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-pastel-lavender dark:bg-pastel-purple p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-pastel-dark dark:text-pastel-mint mb-2">Mood Journaling</h3>
            <p className="text-pastel-dark dark:text-pastel-light">
              Track your daily emotions and reflect on your experiences. Our AI provides insights into your mood patterns over time.
            </p>
          </div>

          <div className="bg-pastel-peach dark:bg-pastel-lilac p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-pastel-dark dark:text-pastel-mint mb-2">Guided Meditations</h3>
            <p className="text-pastel-dark dark:text-pastel-light">
              Access a library of guided meditations and breathing exercises to help you relax, focus, and find inner peace.
            </p>
          </div>

          <div className="bg-pastel-blue dark:bg-pastel-mint p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-pastel-dark dark:text-pastel-light mb-2">AI Chat Support</h3>
            <p className="text-pastel-dark dark:text-pastel-light">
              Connect with our empathetic AI chatbot for instant support and guidance whenever you need it.
            </p>
          </div>

          <div className="bg-pastel-pink dark:bg-pastel-blue p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-pastel-dark dark:text-pastel-light mb-2">Resource Library</h3>
            <p className="text-pastel-dark dark:text-pastel-light">
              Explore a curated collection of articles, videos, and workshops on topics like stress management, anxiety, and mindfulness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdultsSection;
