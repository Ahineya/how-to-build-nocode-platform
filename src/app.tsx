import React from "react";
import "./app.scss";
import {Route, Routes} from "react-router-dom";

export const App = () => {
  return <div className="app">
    <div className="container">
      <Routes>
        <Route path="/" element={<div>It works</div>}/>
      </Routes>
    </div>
  </div>;
}
