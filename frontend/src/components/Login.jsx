import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const host = import.meta.env.VITE_API_URL;


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
    let navigate = useNavigate();
  const handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`,{
        method: 'POST',
        headers:{
          'Content-type':'application/json',
        },
        body:JSON.stringify({email:formData.email,password:formData.password})
    });
    const json =await response.json();
    // console.log(json)
    if(json.status==true){
        //redirect
        localStorage.setItem("token",json.authToken);
        navigate("/");
        setFormData({ email: "", password: "" });
    }else{
        alert(json.error)
    }
    // console.log(json);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={()=>(console.log("form Submitted"))}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
