import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AddToDo } from '../Store/Action/index';
import ToDoS from '../Componentes/ToDoS';
import './ToDo.css';
const AddToDos = (props) => {
  const [title, settitle] = useState(null);

  // let cnt;
  const newToDo = (e) => {
    settitle(e.target.value);
   
  }
  const save = () => { 
    // cnt = props.arrTask.length + 1;
    props.AddToDo({ title: title, id: props.arrTask.length + 1, "completed": false })
    settitle(null);
    props.chancel();

  }

  const chancel = () => {
    props.chancel();
  }
  return (
    <>
    <div>   
      <input type="text" placeholder="add todo" onKeyUp={newToDo} className="input"/>
      <input type="button" value="sava" onClick={save} className="inputS"/>
      <input type="button" value="chancel" onClick={chancel} className="inputC"/>
      </div>
    </>
  );
}
const mapDispachToProps = (state) => {
  return {
    arrTask: state.todos.userTodo,
    user: state.user.theUser
  }
}
export default connect(mapDispachToProps, { AddToDo })(AddToDos);