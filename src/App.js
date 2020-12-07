import React from "react";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen h-full">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/category/:category" exact>
            <CategoryView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
