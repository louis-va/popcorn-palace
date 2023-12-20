import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from "./pages/Home"
import Screening from "./pages/Screening";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="screenings/:id" element={<Screening />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
