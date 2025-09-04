import React from 'react';
import { Smile, Gamepad2, Brain, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="max-w-6xl mx-auto text-center p-8 bg-pastel-light dark:bg-pastel-dark rounded-xl shadow-lg
                    dark:text-pastel-light dark:bg-pastel-dark">
                      <div style={{ height: '800px' }}></div> {/* Test content for scrolling */}
    <h2 className="text-5xl font-extrabold text-pastel-dark dark:text-pastel-mint mb-4 animate-fade-in">Welcome to Mind Oasis</h2>
    <p className="text-xl text-pastel-dark dark:text-pastel-light mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
      Your sanctuary for mental well-being. We offer a holistic approach to mental health with specialized resources for both adults and children.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mb-10">
      {/* Adults Section Card */}
      <div className="bg-pastel-lavender dark:bg-pastel-purple p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-4">
          <Smile className="h-20 w-20 text-pastel-blue dark:text-pastel-peach animate-bounce-slow" />
        </div>
        <h3 className="text-3xl font-bold text-pastel-dark dark:text-pastel-mint mb-2">For Adults</h3>
        <p className="text-pastel-dark dark:text-pastel-light text-lg mb-4">
          Navigate the complexities of modern life with personalized support. Our adult section is designed to help you find balance, reduce stress, and cultivate mindfulness through expert-guided resources and AI-powered insights.
        </p>
        <ul className="text-left text-pastel-dark dark:text-pastel-light list-disc list-inside space-y-1 mb-6">
          <li>Daily Mood Tracking & Journaling</li>
          <li>Guided Meditation & Breathing Exercises</li>
          <li>AI-powered Emotional Support</li>
          <li>Expert-Curated Articles & Workshops</li>
        </ul>
        <Link to="/auth" className="inline-block bg-pastel-blue dark:bg-pastel-mint text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105 hover:bg-pastel-purple dark:hover:bg-pastel-blue">
          <div className="flex items-center space-x-2 justify-center">
            <LogIn className="w-5 h-5" />
            <span>Login to Access</span>
          </div>
        </Link>
      </div>

      {/* Kids Section Card */}
      <div className="bg-pastel-lavender dark:bg-pastel-purple p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-4">
          <Gamepad2 className="h-20 w-20 text-pastel-pink dark:text-pastel-lavender animate-spin-slow" />
        </div>
        <h3 className="text-3xl font-bold text-pastel-dark dark:text-pastel-mint mb-2">For Kids</h3>
        <p className="text-pastel-dark dark:text-pastel-light text-lg mb-4">
          A playful and fun space for children, especially those with dyslexia and ADHD. Our engaging games and activities are designed by specialists to improve focus, memory, and cognitive skills in a creative, stress-free environment.
        </p>
        <ul className="text-left text-pastel-dark dark:text-pastel-light list-disc list-inside space-y-1 mb-6">
          <li>Interactive Memory & Focus Games</li>
          <li>Dyslexia-Friendly Reading Tools</li>
          <li>Cognitive Training Puzzles</li>
          <li>Fun & Rewarding Learning Journey</li>
        </ul>
        <Link to="/auth" className="inline-block bg-pastel-blue dark:bg-pastel-mint text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105 hover:bg-pastel-purple dark:hover:bg-pastel-blue">
          <div className="flex items-center space-x-2 justify-center">
            <LogIn className="w-5 h-5" />
            <span>Login to Access</span>
          </div>
        </Link>
      </div>
    </div>

    {/* Section for More Information */}
    <div className="mt-10 p-8 bg-white dark:bg-pastel-purple rounded-xl shadow-lg border border-pastel-mint dark:border-pastel-light">
      <div className="flex justify-center mb-4">
        <Brain className="h-16 w-16 text-pastel-mint dark:text-white" />
      </div>
      <h3 className="text-3xl font-bold text-pastel-dark dark:text-pastel-mint mb-2">Our AI-Powered Approach</h3>
      <p className="text-pastel-dark dark:text-pastel-light text-lg max-w-3xl mx-auto mb-6">
        Mind Oasis integrates cutting-edge AI technology to provide personalized insights and support. Our algorithms adapt to your unique needs, creating a truly custom and effective path to mental wellness.
      </p>
      <div className="flex justify-center space-x-4">
        <div className="p-4 bg-pastel-mint dark:bg-pastel-blue rounded-lg shadow-inner">
          <h4 className="text-xl font-semibold text-pastel-dark dark:text-white">Smarter Support</h4>
          <p className="text-pastel-dark dark:text-white text-sm mt-1">Chatbot learns and adapts to you.</p>
        </div>
        <div className="p-4 bg-pastel-mint dark:bg-pastel-blue rounded-lg shadow-inner">
          <h4 className="text-xl font-semibold text-pastel-dark dark:text-white">Data-Driven Insights</h4>
          <p className="text-pastel-dark dark:text-white text-sm mt-1">Understand your patterns and progress.</p>
        </div>
      </div>
    </div>

    {/* Tailwind CSS keyframes for animations */}
    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      .animate-fade-in.delay-200 {
        animation-delay: 0.2s;
      }
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce-slow {
        animation: bounce-slow 3s infinite ease-in-out;
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 10s linear infinite;
      }
    `}</style>
  </div>
);

export default HomePage;
