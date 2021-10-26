import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import {signinUser} from '../slices/authReducer'
import { useForm } from "react-hook-form";
const AddTutorial = () => {
  const initialTutorialState = {
    email: "",
    password: ""
  };
  const [auth, setAuth] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setAuth({ ...auth, [name]: value });
  };
  const onSubmit = data => {
	 const { email, password } = data;

        dispatch(signinUser({email,password}))
		 .unwrap()
      .then(data => {
		 //history.push('/tutorials')
        setSubmitted(true);
		
      })
      .catch(e => {
        console.log(e);
      });
    }
   const user=localStorage.getItem('token');

	if (user) return <Redirect to="/" />;
    else if (user === "user") return <Redirect to="/tutorials" />;
   /*const history = useHistory()
    const route = () => {
       const token = localStorage.getItem('token')
       return token ? true : false
    }

    useEffect(() => {
        if (!route()){
            history.push('/login')
        }
		
    }, [route, history])*/
 /*const authenticate = ()=>{
	 const { email, password } = auth;

        dispatch(signinUser({email,password}))
		 .unwrap()
      .then(data => {
		 //history.push('/tutorials')
        setSubmitted(true);
		
      })
      .catch(e => {
        console.log(e);
      });
    }*/
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Login successfully!</h4>
         
        </div>
      ) : (
        <div>
		<form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">User name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              defaultValue={auth.email || ''}
              onChange={handleInputChange}
              name="email"
			  {...register("email", { required: true })}
            />
			{errors.email && <span>Email is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              defaultValue={auth.password || ''}
              onChange={handleInputChange}
              name="password"
			  {...register("password", { required: true })}
            />
			{errors.password && <span>Password is required</span>}
          </div>

          
		  
		   <button className="btn btn-success" >Login</button>
          </form>  
        </div>
		
      )}
    </div>
  );
};

export default AddTutorial;
