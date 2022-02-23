import './App.css';
import './Component/Home.css'
import './Component/About.css'
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
     
        
        

      </Switch>
    </div>
  );
}

export default App;
