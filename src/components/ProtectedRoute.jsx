import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Navigate } from 'react-router'; // note: react-router-dom

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    
    alert("Please login first!");
    return <Navigate to="/" />; 
  }

  // user logged in হলে normal component render হবে
  return children;
};








