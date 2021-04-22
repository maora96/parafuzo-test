import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Exit from "./components/exit";
import Data from "./pages/data";
import SingleData from "./pages/single-data";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exit" component={Exit} />
          <Route path="/data/:id" component={Data} />
          <Route path="/single/:id" component={SingleData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
