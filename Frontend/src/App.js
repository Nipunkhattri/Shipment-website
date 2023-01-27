import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Warehouse from "./components/warehouse/Warehouse";
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/ware' element={<Warehouse/>}/>
      </Routes>
    </div>
  );
}

export default App;

    