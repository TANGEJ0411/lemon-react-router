import "./style/globalStyle.scss";
import "./style/dynamicColor.scss";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import LayoutComp from "./pages/LayoutComp";
import NoMatch from "./pages/NoMatch";
import NoMatchByHook from "./pages/NoMatchByHook";
import Users from "./pages/Users";
import User from "./pages/User";

// createRoutesFromElements
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatchByHook />} />
      </>
    )
    // ,
    // {
    //   basename: "/baseName",
    // }
  );
  return <RouterProvider router={router} />;
}

export default App;
