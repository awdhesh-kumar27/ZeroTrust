import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom';


// import Button from './Components/Button/Button';
// import HomeBar from './Components/HomeBar/HomeBar';
import Login from './Components/Login/Login';
import Register from './Components/Register.js/Register';
// import WaitSpinner from './Components/Spinners/WaitSpinner';

// import NavigationBar from './Components/NaviGationBar/NavigationBar';

import HomeActive from './Components/HomeActive/HomeActive';

import Title from './Components/Title/Title';
function App() {  
  return (
    <div >
          <Title></Title>
          {/* <WaitSpinner></WaitSpinner> */}
         <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
            <Route path='/Home' element={<HomeActive></HomeActive>}></Route>

         </Routes>
        
    </div>
  );
}

export default App;