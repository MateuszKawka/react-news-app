import React from "react";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen h-full">
      <Router>
        <Route
          render={({ location }) => {
            return (
              <PageTransition
                preset="fadeBottomFadeTop"
                transitionKey={location.pathname}
              >
                <Switch location={location}>
                  <Route path="/" exact>
                    <HomeView />
                  </Route>
                  <Route path="/category/:category" exact>
                    <CategoryView />
                  </Route>
                </Switch>
              </PageTransition>
            );
          }}
        />
      </Router>
    </div>
  );
}

export default App;
