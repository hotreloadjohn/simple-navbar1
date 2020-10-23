import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact-us" component={Services} />
        <Route exact path="/sign-up" component={Services} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
