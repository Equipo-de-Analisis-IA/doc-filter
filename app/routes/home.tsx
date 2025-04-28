import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import InsertDoc from "../routes/InsertDocs";
import PrincipalDocs from "../routes/PrincipalDocs";
import Login from "../routes/Login";
import { AuthProvider, useAuth } from 'AuthContext';
import { AppRouter } from 'AppRouter';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><InsertDoc /></PrivateRoute>} />
          <Route path="/documents" element={<PrivateRoute><PrincipalDocs /></PrivateRoute>} />
        </Routes>
      </AppRouter>
    </AuthProvider>
  );
}
