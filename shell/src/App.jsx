import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Team1 = React.lazy(() => import("TEAM1/App1"));
const Team2 = React.lazy(() => import("TEAM2/App2"));
const App = () => (
  <div>
    <Router>
      <Navbar />
      <div className="home_container">
        <Routes>
          <Route path="/" element={<div>Main Page</div>} />
          <Route
            path="/team1"
            element={
              <React.Suspense fallback="Loading...">
                <Team1 />
              </React.Suspense>
            }
          />
          <Route
            path="/team2"
            element={
              <React.Suspense fallback="Loading...">
                <Team2 />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  </div>
);
export default App;
