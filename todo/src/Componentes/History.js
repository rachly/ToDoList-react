import ToDo from '../Componentes/ToDo';
import {tods}from '../Store/Action/index';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
const History = (props) => {
 const [letter, setLetter] = useState("");
    useEffect(() => {
        props.tods(props.user.id);
    }, []);

    const filtering=(e)=>{
     setLetter(e.target.value);
     console.log(letter);
     return letter;
    }
    return (<>
    <input type="text" placeholder="הקש שם משימה"onKeyUp={filtering}/>
     <div className="containerTo">
        {props.arr.map((item) => {
            if (item.completed === true&&item.title.includes(letter))
                return <div>
                    <ToDo todo={item} />
                </div>
        }
        )}
</div>


    </>);


}
const mapStateToProps = (state) => {
    return {
        arr: state.todos.userTodo,
        user: state.user.theUser
    }
}
export default connect(mapStateToProps, { tods })(History);