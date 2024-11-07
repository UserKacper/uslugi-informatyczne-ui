import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { NavigationBar } from "./components/comps/navigationbar";
import { PlanSelection } from "./components/comps/planSelection";
import { ServiceCard } from "./components/pages/ServiceCards";
import Contact from "./components/pages/ContactPage";
import PrivacyPolicy from "./components/pages/PolicyPrivacyPage";
import { TermsPage } from "./components/pages/TermsPage";
import ErrorPage from "./components/pages/ErrorPage";

export default function App() {
  const definedPaths = [
    { path: "/", element: <HomePage /> },
    { path: "contact", element: <Contact /> },
    { path: "terms", element: <TermsPage /> },
    { path: "privacy", element: <PrivacyPolicy /> },
    {
      path: "price",
      element: <PlanSelection />,
      children: [
        { path: ":plan", element: <ServiceCard /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          {definedPaths.map((route, index) =>
            route.children ? (
              <Route key={index} path={route.path} element={route.element}>
                {route.children.map((child, childIndex) => (
                  <Route key={childIndex} path={child.path} element={child.element} />
                ))}
              </Route>
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
