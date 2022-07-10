import { tods } from '../Store/Action/index';
import AddToDo from '../Componentes/AddToDo';
import ToDo from '../Componentes/ToDo';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './ToDo.css';
//  import AddToDo from './AddToDo';
const ToDoS = (props) => {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const cheakis = () => {
    setIsShowAdd(true);

  }
  useEffect(() => {
    props.tods(props.user.id);
  }, []);

  return (<>
    <div >
      {isShowAdd && <AddToDo chancel={() => { setIsShowAdd(false) }} />}
      {!isShowAdd && <input type="button" value="add todo" onClick={cheakis} className="add" />}
    </div>
    <div className="containerTo">
      {props.arr.map((item) => {
        if (item.completed === false)
          return  <ToDo todo={item} />

      }
      )} 
 </div>

  </>
  );
}
const mapStateToProps = (state) => {
  return {
    arr: state.todos.userTodo,
    user: state.user.theUser
  }
}
export default connect(mapStateToProps, { tods })(ToDoS);