import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">

    <BrowserRouter>

    <Navigation/>

    <Routes>
      <Route  exact path='/' element={<Home/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
    </Routes> 

    </BrowserRouter>
     
    </div>
  );
}

export default App;
