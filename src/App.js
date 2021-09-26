
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import{Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import About from './components/about/About';


function App() {
  return (
      <Router>
      <Header/>
      <Switch>
         <Route path='/' exact component={Dashboard}></Route>
         <Route path='/about' exact component={About}></Route>  
      </Switch>  
      </Router> 
  );
}

export default App;
