import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.msg);
        if (isLogin) {
          localStorage.setItem('token', data.token);
          setIsAuthenticated(true);
          navigate('/');
        }
      } else {
        setMessage(data.msg || 'An unknown error occurred.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setMessage('Network error. Please ensure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pastel-light">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-pastel-dark">
          {isLogin ? 'Welcome Back' : 'Join Mind Oasis'}
        </h2>
        <form onSubmit={handleAuth}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-pastel-dark text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-pastel-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-purple transition-colors"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-pastel-dark text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-pastel-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-purple transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-pastel-dark text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-pastel-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-purple transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pastel-purple text-white font-bold py-3 px-4 rounded-lg hover:bg-pastel-dark transition-colors duration-200"
            disabled={loading}
          >
            {loading ? 'Processing...' : isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm font-semibold text-pastel-dark">
            {message}
          </p>
        )}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pastel-blue hover:text-pastel-purple font-semibold transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
