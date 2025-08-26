import React from 'react';
import { Smile, Gamepad2, Brain, Sparkles, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="flex flex-col items-center min-h-screen bg-pastel-light font-sans antialiased p-6">
    {/* Hero Section */}
    <div className="text-center py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-pastel-dark leading-tight mb-4 animate-fade-in">
        Your Path to Mental Wellness Starts Here
      </h1>
      <p className="text-lg md:text-xl text-pastel-dark mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
        Mind Oasis provides a compassionate and innovative approach to mental health, with specialized support for adults and engaging resources for children.
      </p>
      <Link to="/auth" className="inline-block bg-pastel-purple text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-pastel-dark animate-slide-up delay-400">
        <div className="flex items-center justify-center space-x-2">
          <span>Get Started</span>
          <LogIn className="w-6 h-6" />
        </div>
      </Link>
    </div>

    {/* Service Offerings Section */}
    <div className="w-full max-w-6xl mx-auto my-12">
      <h2 className="text-4xl font-bold text-center text-pastel-dark mb-10 animate-fade-in delay-600">
        Explore Our Offerings
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Adults Section Card */}
        <div className="bg-pastel-lavender p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 animate-slide-in-left delay-800">
          <Smile className="h-20 w-20 text-pastel-blue mb-4" />
          <h3 className="text-2xl font-bold text-pastel-dark mb-2">For Adults</h3>
          <p className="text-pastel-dark text-lg mb-4 flex-grow">
            Discover a safe space for personal growth. Our resources are designed to help you manage stress, improve mindfulness, and enhance emotional well-being.
          </p>
          <Link to="/auth" className="mt-auto bg-white text-pastel-dark font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pastel-blue hover:text-white transition-colors">
            Learn More
          </Link>
        </div>

        {/* Kids Section Card */}
        <div className="bg-pastel-peach p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 animate-slide-in-up delay-1000">
          <Gamepad2 className="h-20 w-20 text-pastel-pink mb-4" />
          <h3 className="text-2xl font-bold text-pastel-dark mb-2">For Kids</h3>
          <p className="text-pastel-dark text-lg mb-4 flex-grow">
            Fun and focus for the next generation. Our engaging, specialized games help children with dyslexia and ADHD build essential cognitive and memory skills.
          </p>
          <Link to="/auth" className="mt-auto bg-white text-pastel-dark font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pastel-pink hover:text-white transition-colors">
            Learn More
          </Link>
        </div>

        {/* AI Section Card */}
        <div className="bg-pastel-mint p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 animate-slide-in-right delay-1200">
          <Brain className="h-20 w-20 text-pastel-purple mb-4" />
          <h3 className="text-2xl font-bold text-pastel-dark mb-2">AI-Powered Support</h3>
          <p className="text-pastel-dark text-lg mb-4 flex-grow">
            Leverage cutting-edge AI to personalize your journey. Our intelligent system learns and adapts to provide insights and tools tailored just for you.
          </p>
          <Link to="/auth" className="mt-auto bg-white text-pastel-dark font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pastel-purple hover:text-white transition-colors">
            Learn More
          </Link>
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
      .animate-fade-in.delay-600 {
        animation-delay: 0.6s;
      }
      @keyframes slide-up {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-slide-up {
        animation: slide-up 0.8s ease-out forwards;
      }
      .animate-slide-up.delay-400 {
        animation-delay: 0.4s;
      }
      @keyframes slide-in-left {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-slide-in-left {
        animation: slide-in-left 0.8s ease-out forwards;
      }
      .animate-slide-in-left.delay-800 {
        animation-delay: 0.8s;
      }
      @keyframes slide-in-up {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-slide-in-up {
        animation: slide-in-up 0.8s ease-out forwards;
      }
      .animate-slide-in-up.delay-1000 {
        animation-delay: 1s;
      }
      @keyframes slide-in-right {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-slide-in-right {
        animation: slide-in-right 0.8s ease-out forwards;
      }
      .animate-slide-in-right.delay-1200 {
        animation-delay: 1.2s;
      }
    `}</style>
  </div>
);

export default HomePage;
