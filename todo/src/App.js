
import Login from './Componentes/Login';
import History from './Componentes/History';
import ToDoS from './Componentes/ToDoS';
import Register from './Componentes/Register';
import Dialoge from './Componentes/Dialoge';
import { Link,Route,Switch } from 'react-router-dom';
import {logOut}from './Store/Action/index';
import { connect } from 'react-redux';


function App(props) {
  const logout=()=>{
    props.logOut()
  }
  return (  <>
      {/* <input type="button" value="log out" /> */}
  <nav>
      <ul> 
        <li className="btnOut">
         <a onClick={logout}><Link>יציאה</Link></a>
          </li>     
        <li>
          <Link to="Login">כניסה</Link>
        </li>          
         {props.theUser&&<li> <Link to="/Todos">משימות שלי</Link>  </li>} 
        <li>
        <Link to="/Register">הרשמה</Link>
        </li>  
       
       {props.theUser&& <li> <Link to="/History">היסטוריה</Link> </li>}  
        
      </ul>
    </nav>  
    <Switch>    
        <Route  path="/Login" ><Login/></Route> 
        <Route path="/TodoS"><ToDoS/> </Route> 
       <Route path="/Register"><Register/></Route>
       <Route path="/Dialoge"><Dialoge/></Route>
       <Route path="/History"><History/></Route>
       <Route exact path="/" ><Login/></Route> 
       {/* <Route path="/ToDoS"><ToDoS/></Route> */}
     {/* <Route  path="/" ><NotFondPage/></Route>  */}
    </Switch>

   </>
  );
}
const mapStataToProps=(state)=>{
  return{
    theUser:state.user.theUser
  }
}
export default connect(mapStataToProps,{logOut})(App);
