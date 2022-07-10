import {Redirect}from 'react-router-dom';
import React,{useState} from 'react';
import './Dialoge.css';
const Dialoge = () => { 
   const [ok,setOk] = useState(false);
    const DialogTrue=()=>{
        setOk(true); 
    }
     if(ok==true){
         
       return <Redirect to="/ToDoS" />
     }

    return (      
        <>  
        <div className="container">
        <h1>
          נרשמת בהצלחה
        </h1>
       <input type="button" value="אישור" onClick={DialogTrue} className="button"/>
       </div> 
    </>
      );
}
 
export default Dialoge;