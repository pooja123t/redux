function Edittutorial({updateTutorial})
{
	return(
		<div>
        	<form onSubmit={updateTutorial}>
		<p>Title:<input type="text" name="Title"/></p><br/>
		<p>description:<input type name="description"/></p><br/>
		<button> submit </button>
		</form>
		</div>
		)
};
export default Edittutorial;