import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { InfoProductPage } from "./pages/Product";


export const Router = () => (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product/:id" element={<InfoProductPage />} />
    </Routes>
  );