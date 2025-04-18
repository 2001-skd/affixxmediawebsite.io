import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/style.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./views/Index.jsx";
import Services from "./views/Services.jsx";
import PageLoader from "./components/ui/PageLoader.jsx";
import TermsandConditions from "./views/TermsandConditions.jsx";
import PrivacyPolicy from "./views/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/terms&conditions",
        element: <TermsandConditions />,
      },
      {
        path: "/privacy_policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageLoader />
    <RouterProvider router={router} />
  </StrictMode>
);
