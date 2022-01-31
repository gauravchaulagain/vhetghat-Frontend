import { BrowserRouter as Router, Route } from "react-router-dom";
import PageRender from "./PageRender";
import Home from './pages/home'
import Login from './pages/login'

function App() {
  return (
    <router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page:id" component={PageRender} />
        </div>
      </div>
    </router>
  );
}

export default App;
