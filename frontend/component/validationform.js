import React from 'react';
import { useForm } from "react-hook-form";
import {useRef} from 'react';
import axios from 'axios'
export default function ValidationLogin() {
  const { register, handleSubmit, formState:{errors},watch } = useForm();

  const password = useRef({});
    password.current = watch("password", "");
    
  const onSubmit = (data) => {
    console.log(data);
    axios.post('/users/register',data)
    .then((res)=>
    {
      console.log(res.data)
    })
  };

   return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"  placeholder="enter User name" name= "username" 
        {...register("username",{ required: "user required",message:"username is required"})}/>
        <br/>{errors.username && <>{errors.username.message}</>}<br/>

        <input  type = "text" placeholder="User email" {...register("email", { required: "email is required",pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"enter valid email"} })}/><br/>{errors.email && <>{errors.email.message}</>}<br/>

         <input type="password" placeholder="User password" name="password"
         {...register("password", { required: "enter correct password", 
          minLength: {value: 5,message: "Password must have at least 8 characters"}})}/>
         <br/>{errors.password && <>{errors.password.message}</>}<br/>

          <input type="password" placeholder="Confirm password" {...register("user_confirmpswd",{
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
            /><br/>
                   <br/>{errors.user_confirmpswd && <>{errors.user_confirmpswd.message}</>}<br/>
        <button>Submit</button>

      </form>

    </div>
  );
}
