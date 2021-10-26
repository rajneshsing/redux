import React, { useState,useEffect} from "react";
import { useDispatch } from "react-redux";
//import { Redirect, Route } from "react-router";
import {logout} from '../slices/authReducer'
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user=localStorage.removeItem('token');
  // const user=localStorage.getItem('token')
	 useEffect(() => {
       dispatch(logout())
		 history.push('/login')
	   
    }, [])
	return null;
};

export default Logout;
