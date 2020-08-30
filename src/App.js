import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Router>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Router>
      </main>
      <footer>
        Crafted with{" "}
        <span role="img" aria-label="Heart Emoji">
          💙
        </span>{" "}
        and React. © 2020
      </footer>
    </div>
  );
}

export default App;
