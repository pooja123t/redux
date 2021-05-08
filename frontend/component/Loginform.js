import axios from 'axios'
import {useHistory} from 'react-router-dom'

 function  Loginform()
 {
 	let history=useHistory();

 const doLogin=(e)=>
 {
 	e.preventDefault();
 	const userDetails={
 		email:e.target.email.value,
 		password:e.target.password.value
	}; 
 axios.post('/users/login/',userDetails)
 .then((res)=>
 {
 	console.log(res.data);
 	localStorage.setItem('usertoken',res.data.token)
 	history.push('/members')
 })
}
	return(
		<form onSubmit={doLogin}>
		<input type="email" placeholder="user email" name="email"/>
		<input type="password" placeholder="password" name="password"/>
		<button>submit</button>
		</form>
		)
} 
export default Loginform;