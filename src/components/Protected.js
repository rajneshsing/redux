/*import React from "react";
import { Redirect } from "react-router-dom";

function PrivateRoute(props){
  const Cmp=props.cmp;
  const auth=JSON.parse(localStorage.getItem('token'));
  console.log(auth);
  
  return <div> {!auth ? <Redirect to="/login"></Redirect>: <Cmp /> } </div>
}

export default PrivateRoute;*/


import React from 'react';
import {Route,Redirect} from 'react-router-dom';
const PrivateRoute = ({children,...rest}) =>{
    //const isAuth = false;
	const isAuth=localStorage.getItem('token');
    return (<Route {...rest} render={()=>isAuth?(children):(<Redirect to={'/login'}/>)}/>);
}

export default PrivateRoute;

