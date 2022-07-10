import React,{useState} from 'react';
import {Redirect}from 'react-router-dom';
import { connect } from 'react-redux';
import {saveUsers}from'../Store/Action/index';
import { getDefaultNormalizer } from '@testing-library/dom';
import './Login.css';
const Register = (props) => {

  const inputClass = (e) => {
            let current=e.target
            if (current.validity.valid)
            current.className="validInput";
            else 
            current.className="invalidInput";
        }
   const [userName,setUserName]=useState(null);
   const [city,setCity]=useState(null);
   const [street,setStreet]=useState(null);
   const [email,setEmail]=useState(null);
   const [phon,setPhon]=useState(null);
   const [good,setGood]=useState(false);
   let e="@";
     const cheack=()=>{
     //  if(userName.length>2&&city.length>2&&street.length>2&&email.length>2&&phon.length===10)
         setGood(true);       
      
        registar();
      //}
    
     }
     

   const registar=(e)=>{
    //e.preventDefault();
    props.saveUsers({"userName":userName,"city":city,"street":street,"email":email,"phon":phon,"userTodo":[]})

   }
 const inputClas=(e) => {
    let current = e.target
    if (current.validity.valid)
        current.className = "tbox";
    else
        current.className = "tboxx";
  }
  
 




   const ChaekName=(e)=>{  
    setUserName(e.target.value);
  }
  const CheakCity = (e) => {
    setCity(e.target.value);
   };
   const CheakStreet = (e) => {
    setStreet(e.target.value);
   };
   
  const CheakEmail = (e) => {
    setEmail(e.target.value);
   };
   const CheakPhon = (e) => {
    setPhon(e.target.value);
   };

   
  
   
   if(good==true){
     return<Redirect to="/Dialoge"/>
   }
  

    return (
<>
<form>
<div className="main-container">
        <div className="login-box">
          <div className="header">
            <h1>
             הרשמה
      </h1>
          </div>
          <div className="login">
<div className="form-control1">
<input type="text" placeholder="שם" onKeyUp={ChaekName} required className="tbox"/>
</div>
<div className="form-control1">
<input type="text" placeholder="עיר" onBlur={inputClas} onKeyUp={CheakCity} required className="tbox"/>
</div>
<div className="form-control1">
<input type="text"  placeholder="רחוב" onBlur={inputClas} onKeyUp={CheakStreet} required className="tbox"/>
</div>
<div className="form-control1">
<input type="text" placeholder="מייל"  onBlur={inputClas} onKeyUp={CheakEmail} required pattern={"^[A-Za-z0-9._%+-]{1,}@[A-Za-z0-9.-]{1,}\\u002e[a-z]{2,}$"} className="tbox"/>
</div>
<div className="form-control1">
<input type="text" placeholder="טלפון" onBlur={inputClas} onKeyUp={CheakPhon} required className="tbox"/>
</div>
<div className="form-control1">
<input type="submit" value="הרשם"  onClick={cheack} className="btn"/>
</div>
</div>
</div>
</div>
</form>
</>
      );
}
 
export default connect(null,{saveUsers})(Register);