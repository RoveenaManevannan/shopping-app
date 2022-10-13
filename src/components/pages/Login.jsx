import React from "react";
import { useState, useEffect } from "react";
import "./style/Login.css"
import Popup from"./Popup";

const errStyle = {
  color:"red",
  fontSize:"1.5rem",
  marginLeft:"50%",
  fontWeight:"bold",
};
const Login = () => {

  const[isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const userValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(userValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  var message ="";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (!regex.test(values.username)){
        errors.username = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    else if(values.password.length < 8){
        errors.password = "Password must be atleast 8 characters"; 
    }
    else if(values.password.length >10){
        errors.password = "Password must not exceed 10 characters";
    }
    if(Object.keys(formErrors).length ===0 && isSubmit)
    {
        togglePopup();
    }
    return errors;
  };

  return (
    <div className="logContainer">
      <div className="logContent">
        <h1 className="logTitle"> Already a member? </h1>
        <h2 className="Subtitle">Please Login here.. </h2>
        <br />
        <form onSubmit={handleSubmit}>
        <div className="Form">
          <label for="username">Username</label>
          <input className="Email"
            type="text"
            name="username"
            placeholder="abc@email.com"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p style={errStyle} className="logerrorMessage">{formErrors.username}</p>
        <br />
        <div className="Form">
          <label for="password" id="username">
            Password
          </label>
          <input className="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p style={errStyle} className="logerrorMessage">{formErrors.password}</p>
        <br />
        <button className="buttonstyle" type="submit">
          Login
        </button>
        </form>
        <div className="loginPopup">
              {isOpen && <Popup
      content={<>
        <p>Login Successful!!! <a href="/Home">Click here to continue shopping </a></p>
      </>}
    />}
        
        </div>

        <div className="Links">
          <br />
          <a href="/Signup" className="linkstyle">
            New Customer!! Click to Register
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
