import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './main.css'
import { AuthProvider } from '@/auth/AuthContext';
import Home from "@/pages/Home/HomePage"
import Screening from "@/pages/Screening/ScreeningPage";
import Payment from "@/pages/Payment/PaymentPage";
import Confirmation from '@/pages/Confirmation/ConfirmationPage';
import Profile from './pages/Profile/ProfilePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="screenings/:movie_name/:id" element={<Screening />} />
      <Route path="payment" element={<Payment />} />
      <Route path="payment/confirmation" element={<Confirmation />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)
