import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';
import { useState,useEffect } from 'react';
import { GetSong } from '../../utils/RestApi';
import { PostApi } from '../../utils/RestApi';

import { useNavigate } from 'react-router';

import WaitSpinner from '../Spinners/WaitSpinner';

function NavigationBar(props) {

  // const {token,setToken} = useAuth();
  // const[token,setToken]= useState(null);
  // setToken(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  const Navigate = useNavigate();

  useEffect(()=>{
      
  },[token,Navigate]);


   



  //  console.log(props.checkedItems);
  return (
   <div> NaviGationBar
   </div>)
}




export default NavigationBar;
