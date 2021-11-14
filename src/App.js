import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import Products from './Components/Pages/Products';
import Card from '../src/Components/Pages/card';
import AddtoCart from './Components/Pages/AddtoCart';
import Register from './Components/Pages/Register';
import SignIn from './Components/Pages/SignIn';
import Aboutus from './Components/Pages/Aboutus';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar/>
      <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/Products' component={Products}/>
       <Route path='/Aboutus' component={Aboutus}/>
       <Route path='/SignUp'   component={Register}/>
       <Route path='/SignIn'   component={SignIn}/>
       <Route path='/AddtoCart'     component={AddtoCart}/>
       <Route path='/Card'     component={Card}/>
      </Switch>
     
    </Router>
    </>
  );
}
export default App;
