import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Navbar from './nav';
import Login from './login'
import Home from './home';
import Signup from './signup';
import Underdev from './underdev';
import Contact from './contact'
import './css/nav.css'

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
        <Route exact path="/underdev">
          <Underdev/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
