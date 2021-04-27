let initialState={count:0,title:"default title"}

function ChangeTitle(state=initialState,action)
{
	console.log(action)
	console.log(state)

	switch(action.type){
		case 'counter/increase':
		console.log('came in action counter/increase')
		return{...state,count:state.count+1}

		case 'counter/decrease':
		console.log('came in action counter/decrese')
		return{...state,count:state.count-1}

	
		case 'counter/changetitle':
		let newstate={...state,title:action.title}
		return newstate;

		default:return state;
	}	
}
export default ChangeTitle;