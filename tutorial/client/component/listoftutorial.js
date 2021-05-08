function Listoftitorial({user})

{
return(
<div>
{
      user.map(function(val){
        return <tr><td>{val.Title}</td>
        <td>{val.description}</td>
        </tr>
      })
  }
     </div>
     )
 }
 export default Listoftitorial;
