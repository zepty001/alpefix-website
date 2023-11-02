import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about us" element={<About />} />
      <Route path="/contact us" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
