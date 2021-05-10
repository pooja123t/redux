import logo from './logo.svg';
import './App.css';
import Add from './component/Addtutorial'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Listoftitorial from  './component/listoftutorial'
import Navbar from  './component/Navbar'
import Tutorial from  './component/Tutorial'


function App() {
  return (
    <div className="pages">
      <BrowserRouter>
              <Add/>
      </BrowserRouter>


      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
