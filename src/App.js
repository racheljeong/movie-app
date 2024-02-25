import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello" render={() => <h1>hello</h1>} />
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={Detail} />
      </Switch>
    </Router>
  );
}