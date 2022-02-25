import React from "react";
import "./app.scss";
import {Route, Routes} from "react-router-dom";
import {BuilderLayout} from "./components/builder-layout";

export const App = () => {
  return <div className="app">
    <div className="container">
      <Routes>
        <Route path="/" element={<BuilderLayout/>}/>
      </Routes>
    </div>
  </div>;
}
