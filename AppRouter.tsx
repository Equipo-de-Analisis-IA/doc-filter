import React from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppRouterProps {
  children: React.ReactNode;
}

export function AppRouter({ children }: AppRouterProps) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}