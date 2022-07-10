import * as ActionType from '../../ActionTypes';
import axios from 'axios';

export const tods=(userId)=>{
    return (dispach)=>{
        axios.get(`
        https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(res=>{
            console.log(res)
            dispach(saveToDo(res.data))
            
        })
        .catch(err=>{
            console.log(err);
        })
        }}

        export const AddToDo=(toDo)=>{
            return (dispach)=>{
                axios.post(`https:////jsonplaceholder.typicode.com/posts`,toDo)
                .then(res=>{
                    console.log(toDo)
                    dispach(addtodo(toDo))
                })
            }
          }
          export const updateTodo=(todo)=>{
            return{
              type:ActionType.UPDATE_TODO,
              paylod:todo
          }
          }
         
         export const addtodo=(toDo)=>{
             return{
                 type:ActionType.ADD_TODO,
                 paylod:toDo
             }
         }
          export const deleteTodos=(id)=>{   
             return{
                type:ActionType.DELETE_TODO,
                paylod:id
             }
          }
        

        export const saveToDo=(todos)=>{
         return{
             type:ActionType.SAVE_TODO,
             paylod:todos
          }
        }
        
//