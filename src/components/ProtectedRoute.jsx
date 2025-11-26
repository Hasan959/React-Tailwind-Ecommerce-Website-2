

import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      toast.error("Please login first!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};



// import { useUser } from '@clerk/clerk-react';
// import React from 'react';
// import { Navigate } from 'react-router'; // note: react-router-dom

// export const ProtectedRoute = ({ children }) => {
//   const { user } = useUser();

//   if (!user) {
    
//     alert("Please login first!" );
//     return <Navigate to="/" />; 
//   }

//   // user logged in হলে normal component render হবে
//   return children;
// };



