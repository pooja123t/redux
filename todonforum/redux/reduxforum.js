import{useStore,useDispatch,useSelector} from 'react-redux';
import {useState} from 'react'
function Reduxforum(){

const dispatch=useDispatch();
const store=useStore();
const todo1=useSelector(state=>state.todo1);
const [forms,setforum]=useState([]);
let arr;

const addBlog=(e)=>
{
	e.preventDefault()
let myobj=
{
	name:e.target.text.value,
	date:e.target.date.value,
	id:e.target.id.value,
	date:new Date().toLocaleTimeString(),
	mil:new Date().getTime(),
	author:e.target.author.value
}
dispatch({type:'add/forum',todo1:forms})
arr=forms.concat(myobj);
setforum(arr);
}
const deleteone=(index)=>
{
let r=window.confirm("are you sure to delete");
let myval=forms	.filter(function(val,indextodelete)
{
if(indextodelete==index)
	return false;
return true;
})
if(r==true)
	{
	setforum(myval);
	}

}

const deleteall=()=>
{
let day=new Date().getTime();
let currentday=Math.floor(day/1000/60);
console.log(currentday)
let asd=forms.filter(function(val)
{
	if(Math.floor(val.mil/1000/60)<=currentday-5)
		return false
	return true
	
})
setforum(asd);
}
	return(
		<div>
		<form onSubmit={addBlog}>
		<input type="text" name="text" placeholder="enter the text"/><br/>
		<input type="date" name="date"/><br/>
		<input type="id" name="id" placeholder="enter the id"/><br/>
		<select name="author">
		<option > author 1</option>
		<option> author 2</option>
		</select>
		<button>add blog</button>
		</form>
		<button onClick={deleteall}>deleteall</button>
		{
			forms.map(function(val,index){
				return<div>{val.name}{val.date}{val.id}{val.author}
				<button onClick={()=>{deleteone(index)}}>delete</button>
				</div>
			})
		}
		</div>
		)
}

export default Reduxforum;