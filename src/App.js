import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/desserts" element={<Products />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
