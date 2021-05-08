import Tutorial from  './Tutorial'
import {useState,useEffect} from'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Childcomponent from './childcomponent'
import axios from 'axios';
import Navbar from  './Navbar'
import Edittutorial from './Edittutorial'


function Add()
{
const [user,setuser]=useState([{}]);
const [user1,setuser1]=useState([]);

useEffect(()=>{
getTitorial();
},[]);
	const getTitorial=()=>
	{
		axios.get('/tutorial')
		.then((res)=>
		{
			setuser(res.data);
		})
		.catch((err)=>
		{
			handlError(err)
		})
	}
	console.log(user)

	const handlError=(err)=>{
		console.log()
		alert(err.toString());
	}
	const add=(e)=>
	{
		e.preventDefault();
		const {Title,description}=e.target;

 		let tutorialOb={
 			Title:Title.value,
 			description:description.value
 		}
 		axios.post('/tutorial',tutorialOb)
 		.then((res)=>
 		{
 			axios.get('/tutorial')
 			.then((res)=>{
 				setuser(res.data)
 			})
 			.catch((err)=>{
			handlError(err)
		})
 		})
 		
 	}
 	function deleteTutorial()
 	{
 		setuser([])
 		axios.delete('/tutorial')
	}
	/*function searchtitle(e)
	{
	 axios.get('/tutorial/'+Title,params:{e.target.search.value})	
	}*/
	function searchtitle(e)
	{
		e.preventDefault()
		let res=user.filter(function(val){
			if(val.Title==e.target.search.value)
			{
			 return true;
			}
			else
			{
			 return false;
			}
		})
		setuser(res)
	}
	function row(rowindex)
	{
     let ans=user.filter(function(val,index){
     	if(rowindex==index)
		  return true;
		  return false;
     })
     		setuser1(ans)

	}
	function 
	axios.put()
 	
	return(
		<div>

              <Navbar/>
              <Route path="/Add">
			  <Childcomponent add={add} />
			  </Route>
				
				 <Route path="/Tutorial">
			  <Tutorial  user={user} deleteTutorial={deleteTutorial} searchtitle={searchtitle} row={row} user1={user1}/>
			  </Route>

            
		</div>
		)
}
export default Add;