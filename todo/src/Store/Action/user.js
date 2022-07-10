import * as ActionType from '../../ActionTypes';
import axios from 'axios';



export const logUser=(user)=>{
  return (dispach)=>{
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${user.userName}&email=${user.email}`)
    .then(res => {
        console.log(res)
        dispach(saveUser(res.data[0]))
      
    })
    .catch(err=>{
        console.log(err)    
    })
  }
}

export const saveUsers=(user)=>{
  return(dispach)=>{
    axios.post(`https:////jsonplaceholder.typicode.com/users`,user)
    .then(res=> {
      console.log(user); 
       console.log("scsess");    
       dispach(saveUser(user) )
         
    })
    .catch(err=>{
      console.log(err);  
    })
  }
}
export const logOut=()=>{
  return{
    type:ActionType.DELETE_USER,
    paylod:null
  }
}

export const saveUser=(user)=>{
  
    return{
       type:ActionType.SAVE_USER,
       paylod:user
   }
   

  }
  

  