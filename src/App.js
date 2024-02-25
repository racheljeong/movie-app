import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={process.env.PUBLIC_URL+"/hello"} render={() => <h1>hello</h1>} />
        <Route exact path={process.env.PUBLIC_URL+"/"} component={Home} />
        <Route path={process.env.PUBLIC_URL+"/character/:id"} component={Detail} />
      </Switch>
    </Router>
  );
}