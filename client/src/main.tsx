import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './main.css'
import { AuthProvider } from '@/auth/AuthContext';
import Home from "@/pages/Home/HomePage"
import Screening from "@/pages/Screening/ScreeningPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="screenings/:movie_name/:id" element={<Screening />} />
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
