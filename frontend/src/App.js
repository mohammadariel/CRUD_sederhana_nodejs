import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import Leftside from "./Layout/Leftside";
import routes from "./routes";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Leftside />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
