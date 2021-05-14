import './App.css';
import Home from './comps/Homepage'
import Customers from './comps/Customers'
import History from './comps/History'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Moneytransfer from './comps/Moneytransfer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" exact render={(props)=> <Home/> } />
        <Route path="/Customers" exact render={(props)=> <Customers/>}/>
        <Route path="/History" exact render={(props)=><History/>}/>
        <Route path="/Moneytransfer/:id" render={(props)=><Moneytransfer/>}/>
      </Switch>
    </Router>
  );
}

export default App;
