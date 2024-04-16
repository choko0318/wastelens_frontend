import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/result">
            <page3 />
          </Route>
          <Route path="/lens">
            <page2 />
          </Route>
          <Route path="/">
            <page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
