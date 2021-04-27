import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Formvalidation from './miniprojects/formvalidation'
import store from './store/store'
import ReduxTitle from'./reduxtile'
import Reduxforum from'./redux/reduxforum'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

{/*import Userregisrationform1 from './assignment/Userregistrationformintable.js';
import UserProfile from './class/UserProfile.js';
import Girne from './class/table.js';
import Comment from './class/Comment.js';
import About from './assignment/about.js';
import Contact from './assignment/contact.js'
import Employee from './assignment/employee.js' 
import Home from './assignment/home.js'
import Mehodsinclass from './class/methodsinclass'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Changetitle from './class/Changetitle.js';*/}
store.subscribe(function(){
  const currentState=store.getState();
})
store.dispatch({type:'counter/increase'})

store.dispatch({type:'counter/decrease'})

function App() {
      const [step,setStep]=useState(1);
  return (
    <div className="App">
   <Reduxforum/>
{/*<BrowserRouter>
      <Link to ="/Changetitle">Changetitle</Link>
      <Route path = "/Changetitle">
      <Changetitle/>
      </Route>
      </BrowserRouter>
    <input type = "number" onChange ={(e)=>{setStep(parseInt(e.target.value))}}/>
    <Mehodsinclass step ={step}/>
     <BrowserRouter>
      <Link to ="/Counter">Counter</Link>
      <Route path = "/Counter">
        
      <Mehodsinclass/>
      </Route>
      </BrowserRouter>*/}
   {/* <BrowserRouter>
    <a href="/Girne">bad link</a>
    <Link to="/Girne">Girne</Link>
    <Link to="/Comment/2">Comment</Link>

    <Route path="/Girne">
    <Girne  />
    </Route>
  
    <Link to ="/about">about</Link>
    <Link to ="/Contact">Contact</Link>
    <Link to ="/Employee">Employee</Link>
    <Link to ="/Home">home</Link>

    <Link to ="/Mehodsinclass">Mehodsinclass</Link>
    <Route path="/Mehodsinclass">
    <Mehodsinclass/>
    </Route>


    <Route path="/Comment/:id">
    <Comment/>
    </Route>
    <Route path="/About">
    <About/>
    </Route>
    <Route path="/Contact">
    <Contact/>
    </Route>
    <Route path="/Employee">
    <Employee/></Route>
    <Route path="/Home">
    <Home/></Route>
    </BrowserRouter>
*/}

   {/* <UserProfile/>
     <Userregisrationform1></Userregisrationform1>*/}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Formvalidation/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}
export default App;