import React from 'react';
import { Smile, Gamepad2, Brain, Sparkles, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="max-w-4xl mx-auto p-8 bg-pastel-light rounded-xl shadow-lg font-sans antialiased">
    {/* Welcome Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-pastel-dark mb-4">Welcome to Mind Oasis</h2>
      <p className="text-lg text-pastel-dark max-w-2xl mx-auto">
        Your sanctuary for mental well-being. Explore our specialized resources for adults and our fun, engaging games for kids.
      </p>
    </div>

    {/* Section 1: Our Mission */}
    <div className="my-10 p-8 bg-white rounded-xl shadow-inner border border-pastel-lavender">
      <h3 className="text-3xl font-bold text-pastel-dark mb-4 text-center">Our Mission</h3>
      <p className="text-pastel-dark text-lg text-center">
        We are dedicated to providing a safe, supportive, and innovative space for individuals of all ages to improve their mental health. Our platform combines evidence-based practices with modern technology to deliver effective, personalized care.
      </p>
    </div>

    {/* Adults Section Card */}
    <div className="bg-pastel-lavender p-8 rounded-2xl shadow-xl flex flex-col items-center text-center my-10">
      <div className="flex justify-center mb-4">
        <Smile className="h-20 w-20 text-pastel-blue" />
      </div>
      <h3 className="text-3xl font-bold text-pastel-dark mb-2">For Adults</h3>
      <p className="text-pastel-dark text-lg mb-4 flex-grow">
        Navigate the complexities of modern life with personalized support. Our adult section is designed to help you find balance, reduce stress, and cultivate mindfulness through expert-guided resources and AI-powered insights.
      </p>
      <Link to="/auth" className="mt-auto inline-block bg-white text-pastel-dark font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pastel-blue hover:text-white transition-colors">
        <div className="flex items-center space-x-2 justify-center">
          <LogIn className="w-5 h-5" />
          <span>Login to Access</span>
        </div>
      </Link>
    </div>

    {/* Section 2: AI-Powered Approach */}
    <div className="my-10 p-8 bg-white rounded-xl shadow-inner border border-pastel-lavender">
      <h3 className="text-3xl font-bold text-pastel-dark mb-4 text-center">Our AI-Powered Approach</h3>
      <p className="text-pastel-dark text-lg text-center">
        Mind Oasis integrates cutting-edge AI technology to provide personalized insights and support. Our algorithms adapt to your unique needs, creating a truly custom and effective path to mental wellness.
      </p>
    </div>
    
    {/* Kids Section Card */}
    <div className="bg-pastel-peach p-8 rounded-2xl shadow-xl flex flex-col items-center text-center my-10">
      <div className="flex justify-center mb-4">
        <Gamepad2 className="h-20 w-20 text-pastel-pink" />
      </div>
      <h3 className="text-3xl font-bold text-pastel-dark mb-2">For Kids</h3>
      <p className="text-pastel-dark text-lg mb-4 flex-grow">
        A playful and fun space for children, especially those with dyslexia and ADHD. Our engaging games and activities are designed by specialists to improve focus, memory, and cognitive skills in a creative, stress-free environment.
      </p>
      <Link to="/auth" className="mt-auto inline-block bg-white text-pastel-dark font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pastel-pink hover:text-white transition-colors">
        <div className="flex items-center space-x-2 justify-center">
          <LogIn className="w-5 h-5" />
          <span>Login to Access</span>
        </div>
      </Link>
    </div>

    {/* Section 3: Our Team */}
    <div className="my-10 p-8 bg-white rounded-xl shadow-inner border border-pastel-lavender">
      <h3 className="text-3xl font-bold text-pastel-dark mb-4 text-center">Our Team</h3>
      <p className="text-pastel-dark text-lg text-center">
        We are a passionate team of developers and health professionals committed to making mental health support accessible. We believe in the power of technology to make a positive impact on people's lives.
      </p>
    </div>

  </div>
);

export default HomePage;
