import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Fetch username from localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setUsername(user.username);
      }
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/">My Course App</Link>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex items-center">
            <div className="relative flex items-center">
              {/* Avatar with the first letter of the username */}
              <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                {username ? username.charAt(0).toUpperCase() : ''}
              </div>
              <span className="ml-2">{username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-blue-600 rounded mx-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/signin" className="px-4 py-2 bg-white text-blue-600 rounded mx-2">
              Sign In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-white text-blue-600 rounded mx-2">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;