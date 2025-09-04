import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

const AuthPage = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const BACKEND_URL = "http://localhost:5000";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const endpoint = isLogin ? `${BACKEND_URL}/api/auth/login` : `${BACKEND_URL}/api/auth/register`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Authentication failed');
      }

      const data = await response.json();

      if (isLogin) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setMessage('User registered successfully! Please log in.');
        setIsLogin(true);
      }
    } catch (error) {
      setMessage(`Authentication error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pastel-light dark:bg-pastel-dark">
      <div className="bg-pastel-lavender dark:bg-pastel-purple p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-pastel-dark dark:text-pastel-light mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleAuth}>
          {!isLogin && (
            <div className="mb-4">
              <div className="flex items-center bg-white dark:bg-pastel-dark rounded-full shadow-inner p-3">
                <User className="text-pastel-dark dark:text-pastel-light mr-3" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-none focus:outline-none text-pastel-dark dark:text-pastel-light"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <div className="flex items-center bg-white dark:bg-pastel-dark rounded-full shadow-inner p-3">
              <Mail className="text-pastel-dark dark:text-pastel-light mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-none focus:outline-none text-pastel-dark dark:text-pastel-light"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center bg-white dark:bg-pastel-dark rounded-full shadow-inner p-3">
              <Lock className="text-pastel-dark dark:text-pastel-light mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-transparent border-none focus:outline-none text-pastel-dark dark:text-pastel-light"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-pastel-blue dark:bg-pastel-mint text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors duration-200 transform hover:scale-105 hover:bg-pastel-dark dark:hover:bg-pastel-lavender"
            disabled={loading}
          >
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center text-sm font-semibold ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pastel-dark dark:text-white hover:underline focus:outline-none text-sm"
          >
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
