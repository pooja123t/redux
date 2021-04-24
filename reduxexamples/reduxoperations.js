import{useStore,useDispatch,useSelector} from 'react-redux';
function ReduxOperations(){
	const dispatch=useDispatch();
	
const store=useStore();
const count=useSelector(state=>state.count);
const increase=()=>
{
	dispatch({type:'counter/increase'})
}
const decrese=()=>
{
	dispatch({type:'counter/decrease'})
}
const reset=()=>
{
	dispatch({type:'counter/initialState'})
}
const square=()=>
{
	dispatch({type:'counter/square'})
}
return(
	<div>
	count={count}<br/>
	<button onClick={increase}> increase</button>
	<button onClick={decrese}> decrese</button>
	<button onClick={reset}> reset </button>
	<button onClick={square}> square </button>

	</div>
	)
}

export default ReduxOperations;