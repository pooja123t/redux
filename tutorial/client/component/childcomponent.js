function Childcomponent({add})
{
	return(
<form onSubmit={add}>
		<p>Title:<input type="text" name="Title"/></p><br/>
		<p>description:<input type name="description"/></p><br/>
		<button> submit </button>
		</form>
		)
};
export default Childcomponent;