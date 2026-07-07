import { BrowserRouter, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { CasePage } from "./pages/CasePage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#151515",
          color: "#F8F8F6",
          fontFamily: " 'Inter', system-ui, sans-serif",
        }}
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case/:slug" element={<CasePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
