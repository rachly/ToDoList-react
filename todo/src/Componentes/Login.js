import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { validator } from 'validator';
import { connect } from 'react-redux';
import { logUser } from '../Store/Action/index';
import './App.css';
import './Login.css';

const Login = (props) => {

  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);


  const ChaekName = (e) => {
    setUserName(e.target.value);
  }
  const CheakEmail = (e) => {
    setEmail(e.target.value);
  };
  const login = (e) => {
   e.preventDefault();
    props.logUser({ "userName": userName, "email": email })
  }
 
    
const inputClass = (e) => {
  let current = e.target
  if (current.validity.valid)
      current.className = "tbox";
  else
      current.className = "tboxx";
}

  if (props.theUser)
    return <Redirect to="/ToDoS" />
  return (<>


    <form>
      <div className="main-container">
        <div className="login-box">
          <div className="header">
            <h1>
              כניסה
      </h1>
          </div>
          <div className="login">
            <div className="form-control1">
              <input type="text" placeholder="name" onKeyUp={ChaekName} onBlur={inputClass} required className="tbox" />
            </div>
            <div className="form-control1">
              <input type="text" placeholder="email" onKeyUp={CheakEmail} onBlur={inputClass} pattern={
                "^[A-Za-z0-9._%+-]{1,}@[A-Za-z0-9.-]{1,}\\u002e[a-z]{2,}$"} required className="tbox" />
            </div>
            <div className="form-control1">
              <input type="submit" value="כניסה" onClick={login}  className="btn" />
            </div>
          </div>
        </div>
      </div>
    </form>

  </>
  );
}

const mapDispachToprops = (state) => {
  return {
  //  theUser: state.user.user
  }
}
export default connect(mapDispachToprops, { logUser })(Login);