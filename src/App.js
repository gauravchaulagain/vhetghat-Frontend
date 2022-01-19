import { BrowserRouter as Router, Route } from "react-router-dom";
import PageRender from './PageRender'




function App() {
  return (
    <router>
    <input type="checkbox" id="theme"/>
      <div className="App">
        <div className="main">
          <Route path="/:page" component = {PageRender} />
        </div>
      </div>
    </router>
  );
}

export default App;
