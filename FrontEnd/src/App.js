import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Navbar from './nav';
import Login from './login'
import Home from './home';
import Signup from './signup';
import './nav.css'

function App() {

  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
