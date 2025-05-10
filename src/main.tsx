import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ArrayMutatingMethods from "./pages/mutating-array.tsx";
import Error from "./components/error-page.tsx";
import ArrayMethod from "./pages/array-method.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/array-mutating-methods",
    element: <ArrayMutatingMethods />,
  },
  {
    path: "/array-methods",
    element: <ArrayMethod />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
