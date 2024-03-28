import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Notice from "../pages/Notice/Notice";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Companies from "../pages/Companies/Companies";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/notice",
            element: <Notice/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/gallery",
            element: <Gallery/>
        },
        {
            path: "/companies",
            element: <Companies/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
       
       
      ]
    },
  ]);

  export default router;