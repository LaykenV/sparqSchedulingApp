import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function RequireAuth({ children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export {RequireAuth};