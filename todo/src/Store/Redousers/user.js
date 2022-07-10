import  * as ActionTypes from  "../../ActionTypes";
// import {Redirect,useHistory}from 'react-router-dom';
const instialState={
    theUser:null ,
     
}

   export const userReduser=(state=instialState,action) =>{
    switch(action.type){
        case ActionTypes.SAVE_USER:
            console.log(action.paylod);
            return{
             ...state,
            theUser:action.paylod
            
            } 
        case ActionTypes.DELETE_USER:
            return{
                ...state,
                theUser:action.paylod 
           }  
         default:return state;               
    }

   
   }
  