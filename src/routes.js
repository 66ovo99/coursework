import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Upload from "./components/Upload";
import AdminDashboard from "./components/AdminDashboard";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/upload" component={Upload} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
