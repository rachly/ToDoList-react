import  * as ActionTypes from  "../../ActionTypes";
const instialState={
  userTodo:[]
}
export const toDosuserReduser=(state=instialState,action)=>{
    switch(action.type){
        case ActionTypes.SAVE_TODO:
            console.log(action.paylod)
            return{
                ...state,
                userTodo:[...action.paylod]
            }
        case ActionTypes.ADD_TODO:
            console.log(action.paylod)
            return{
                ...state,
                userTodo:[...state.userTodo,action.paylod]
            }
        case ActionTypes.DELETE_TODO:
           console.log(action.paylod);
           let arr=state.userTodo.filter(t=>t.id!==action.paylod);
              console.log(arr);
            return{
             ...state,
             userTodo:[...arr]  
            }
        case ActionTypes.UPDATE_TODO:
            console.log(action.paylod);
            let index=state.userTodo.findIndex(t=>t.id===action.paylod.id);
            console.log(index)
            let crr = [...state.userTodo]; 
           console.log(crr[index])
            crr[index].completed = true;
          return{
           ...state,
           userTodo:crr
          }  
            default:return state; 
    }
}