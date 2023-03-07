import './App.css';
import { BrowserRouter as Router , Routes,  Route }
 from 'react-router-dom';
import Login from './components/Login';
import AddSales from './components/AddSales';
import Home from './components/Home';
import FiveSales from './components/FiveSales';
import FiveRev from './components/FiveRev';
import Register from './components/Register';
import Logout from './components/Logout';


function App() {
  return (
    <>
    <Router>
    
        <Routes>
        <Route  exact path='/' element = {<Home/>}/> 
        <Route  path='/addsales' element = {<AddSales/>}/>
        <Route  path='/sales' element = {<FiveSales/>}/> 
        <Route  path='/rev' element = {<FiveRev/>}/>
        <Route  path='/register' element = {<Register/>}/>
        <Route  path='/login' element = {<Login/>}/>
        <Route  path='/logout' element = {<Logout/>}/>
        </Routes>
        
       </Router>
       
      </>
  );
}

export default App;
