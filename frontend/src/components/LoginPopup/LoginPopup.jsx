import React, { useState } from 'react'; // Fixed import statement
import './Loginpopup.css';
import { assets } from '../../assets/assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login'>
      <form className='login-container'>
        <div className='login-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-inputs'>
          {currState === 'Login' ? <></> : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required /> {/* Fixed typo in 'required' */}
          <input type="password" placeholder='Your Password' required /> {/* Updated placeholder */}
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='login-condition'>
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
