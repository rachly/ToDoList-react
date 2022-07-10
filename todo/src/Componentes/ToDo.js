import{deleteTodos}from '../Store/Action/index';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import{updateTodo}from '../Store/Action/index';
import './ToDo.css';
const ToDo = (props) => {
  let [completed,setComplited]=useState(props.todo.completed);
    const deleteTodos=()=>{
     props.deleteTodos(props.todo.id)
      }

      const handleInputChange=(e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        props.updateTodo(props.todo)
        setComplited(value);
    }
  
    return ( <>
    <div className="body">
             <div className="countainer">        
                 {/* {props.todo.id}  */}
                 <div className="titletoDo">
                   <b> המשימה שלי היא:</b>
                 {props.todo.title}
                 {props.todo.body}
                 </div>
                 <div className="cd">
                   <div className="co">
                   <b>האם המשימה הושלמה? </b>
                 {/* {props.todo.completed?"true":"false"} */}
                  <input type="checkbox" name="check" checked={completed}  onChange={handleInputChange}/>
                 </div>
               <div>
                 <b className="d">מחיקת משימה</b>
                    <input type="button" onClick={deleteTodos} value="delete" id="delete" />
                 </div> 
                 </div>
                 </div>
                 </div>
                   </>  
     );
}
 
export default connect(null,{deleteTodos,updateTodo})(ToDo);