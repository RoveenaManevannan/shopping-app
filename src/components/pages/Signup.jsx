import { useForm } from "react-hook-form";
import { useState } from "react";
import "./style/Signup.css";
import Popup from "./Popup";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const onSubmit = (data) => {
    setUserInfo(data);
    togglePopup();
  };
  console.log(errors);

  const errStyle = {
    color: "red",
    marginLeft: "250px",
    fontSize:"2rem",
  };
  return (
    <div className="signupContainer">
      <div className="headingContainer">
        <h1 className="heading">Register with us</h1>
        <h3>Enter the following details</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="signUpForm">
          <br />
          <label className="labelfield">First Name</label>
          <input
            className="inputfield"
            type="text"
            name="Fname"
            {...register("Fname", { required: "First Name is required" })}
          />
          <p style={errStyle}>{errors.Fname?.message}</p>
          <br />
          <label className="labelfield">Last Name</label>
          <input
            className="inputfield"
            type="text"
            length="20"
            name="Lname"
            {...register("Lname", { required: "Last Name is required" })}
          />
          <p style={errStyle}>{errors.Lname?.message}</p>
          <br />
          <label className="labelfield" id="emailfield">
            Email
            <span />
            <span />
          </label>
          <input
            className="inputfield"
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "This is not a valid email",
              },
            })}
          />
          <p style={errStyle}>{errors.email?.message}</p>
          <br />
          <label className="labelfield" id="passfield" name="password">
            Password
          </label>
          <input
            className="inputfield"
            type="password"
            length="20"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be more than 4 characters",
              },
              maxLength: {
                value: 10,
                message: "Password must not exceed 10 characters",
              },
            })}
          />
          <p style={errStyle}>{errors.password?.message}</p>
          <br />
          <button className="register" type="submit">
            Register
          </button>
        </div>
        <br />
      </form>
      <div className="signupPopup">
              {isOpen && <Popup
      content={<>
        <p>Registered!!! <a href="/Home">Click here to continue shopping </a></p>
      </>}
    />}
        
        </div>
    </div>
  );
};

export default Signup;
