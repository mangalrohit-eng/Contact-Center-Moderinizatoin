'use client';

import { useState, useEffect, ReactNode } from 'react';

const CORRECT_PASSWORD = 'ItsPyriteNotAstrum';
const AUTH_KEY = 'accenture_portal_auth';

export default function PasswordProtection({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-acc-black flex items-center justify-center">
        <div className="text-acc-purple">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-acc-black flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 50" width="200" height="36" className="mx-auto mb-6">
                <path fill="#A100FF" d="M 5 10 L 25 25 L 5 40 L 10 40 L 30 25 L 10 10 Z"/>
                <text fill="#A100FF" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="400" x="45" y="33">accenture</text>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Contact Center Modernization Portal
            </h1>
            <p className="text-acc-gray-400 text-sm">
              This portal is password protected
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="bg-acc-gray-800 border border-acc-gray-700 rounded-lg p-8 shadow-xl">
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-acc-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 bg-acc-black border border-acc-gray-700 rounded-lg text-white placeholder-acc-gray-500 focus:outline-none focus:ring-2 focus:ring-acc-purple focus:border-transparent"
                placeholder="Enter password"
                autoFocus
                autoComplete="off"
              />
              {error && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-acc-purple hover:bg-acc-purple/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acc-purple focus:ring-offset-2 focus:ring-offset-acc-gray-800"
            >
              Access Portal
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-acc-gray-500">
              © 2024 Accenture. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

