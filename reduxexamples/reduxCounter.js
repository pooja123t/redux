import{useStore,useDispatch,useSelector} from 'react-redux';
function ReduxCounter(){
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
return(
	<div>
	count={count}<br/>
	<button onClick={increase}> increase</button>
	<button onClick={decrese}> decrese</button>
	
	</div>
	)
}

export default ReduxCounter;