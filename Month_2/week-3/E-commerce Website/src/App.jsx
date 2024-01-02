import React from "react";

import {
  BrowserRouter,
  NavLink,
  useParams,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import About from "./components/About";
const App = () => {
  const { name } = useParams();
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          background: "black",
          padding: "5px 0 5px 5px",
          fontSize: "20px",
        }}
      >
        <div style={{ margin: 10 }}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
            to="home"
          >
            Home
          </NavLink>
        </div>
        <div style={{ margin: 10 }}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
            to="about"
          >
            About
          </NavLink>
        </div>
        <div style={{ margin: 10 }}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
            to="contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="" />
        <Route path="home" element={<Home />} errorElement={<NotFound />} />
        <Route path="about" element={<About />} errorElement={<NotFound />} />
        <Route
          path="contact"
          element={<Contact />}
          errorElement={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
