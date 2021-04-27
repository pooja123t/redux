import{useStore,useDispatch,useSelector} from 'react-redux';
import { useState } from 'react';
function ReduxTodo()
{

const dispatch=useDispatch();
const store=useStore();
const todo1=useSelector(state=>state.todo1);
const userone=useSelector(state=>state.user);
//console.log(userone);

const[userval,setuserval]=useState([]);
const submit=(e)=>
{
	e.preventDefault()
	let array=userval.concat(e.target.text.value)
	setuserval(array);
    dispatch({type:'add/todo',todo1:userval})
    console.log(todo1)
    console.log(userval)

}

	return(
		<div>
		<h1>todolist</h1>
		<h3>{todo1}</h3>
        <form  onSubmit={submit}>
        <input type="text" name="text" palceholder="enter your todo"  />
        <button > add </button>
        </form>
       {
        	userval.map(function(val)
        	{
           return <div>{val}</div>
        	})
        }
		</div>
		)
}
export default ReduxTodo;