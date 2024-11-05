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

  const definedPaths =
    [
      {
        path: "/",
        element: <NavigationBar />
      },
      {

      }
    ]
}

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="price" element={<PlanSelection />}>
          <Route path="/price/:plan" element={<ServiceCard />} />
        </Route>
        <Route path="error" element={<ErrorPage />} />
      </Route>
    </Routes >
  </BrowserRouter >
);
}