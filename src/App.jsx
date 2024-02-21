import "./style/globalStyle.scss";
import "./style/dynamicColor.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import LayoutComp from "./pages/LayoutComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
