import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import {useState} from'react'
import axios from 'axios';
import Childcomponent from './childcomponent'


function Tutorial({user,deleteTutorial,searchtitle,row,user1,updateTutorial})
{

	function add(){}
	return(
		<div className='divtag'>
			<form onSubmit={searchtitle}>
			<input type="text" name="search"/>
			<button >search</button>
			</form>
			<p className="p1">
			<h2>Tutorial list</h2>
			<table border='2px' className="table">
			<tr>	
			<th>title</th>
			<th>description</th></tr>

					{
				      user.map(function(val,index)
				      {
				        return <tr onClick={()=>{row(index)}}><td>{val.Title}</td>
				        <td>{val.description}</td>
				        </tr>
				      })
				 }
				 </table>
				 		<button onClick={deleteTutorial} className='button'>delete all</button>

				 </p>

				 <p className="p2">
			           {
				      user1.map(function(val)
				      {
				        return <tr><b> Tutorial details</b>
                                  <p>Title:{val.Title}</p>
					        <p>description:{val.description}</p>
		             
				    </tr>
				    })
				 }
				 </p>

		</div>
		)
}

export default Tutorial;
