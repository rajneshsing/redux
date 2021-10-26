import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from "./components/Protected";
import { useDispatch,useSelector } from "react-redux";
const App = () => {
	
	let user = useSelector(state => state.user);
	//console.log(user);
	 let token = localStorage.getItem('token');
	
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
       
        <div className="navbar-nav mr-auto">
          
		  {
			  token?<>
			  <li className="nav-item">
            <Link to="/tutorials" className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </li>
		   <li className="nav-item">
            <Link to="/logout" className="nav-link">
              logout
            </Link>
			</li>
			</>:<><li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
		  </>
		  }
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
		 <PrivateRoute exact path={["/", "/tutorials"]}>
              <TutorialsList />
            </PrivateRoute>
			<PrivateRoute exact path="/add">
              <AddTutorial />
            </PrivateRoute>
          <Route path="/tutorials/:id" component={Tutorial} />
		  <Route path="/login" component={Login} />
		  <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
