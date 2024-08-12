import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { NavigationBar } from "./components/comps/navigationbar";
import { PlanSelection } from "./components/comps/planSelection";
import { ServiceCard } from "./components/pages/ServiceCards";
import Contact from "./components/pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="price" element={<PlanSelection />}>
            <Route path="/price/:plan" element={<ServiceCard />} />
          </Route>
        </Route>
      </Routes >
    </BrowserRouter >
  );
}