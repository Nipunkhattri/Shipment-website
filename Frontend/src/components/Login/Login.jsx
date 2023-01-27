import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const Handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:5000/login";
    try {
      const User = await axios.post(url, {
        email: data.email,
        password: data.password,
      });
      if (User.status === 200) {
        console.log("login")
        navigate("/")
        setMessage(User.data);
       
      } else if (User.status === 401) {
        console.log("No user")
        setMessage(User.data);
        
      }
    } catch (error) {
      console.log("error", error);
    }
  };

 
  return (
    <div className="container">
      <div className="login-box mt-5">
        <div className="card">
          <div className="card-header">
            <h3>Login page</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email m-1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={(e) => Handle(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password m-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={data.password}
                  onChange={(e) => Handle(e)}
                />
              </div>
              <button className="btn btn-primary m-4" type="submit">
                Login
              </button>
            </form>
            <div className="alert alert-light">
                <p>{message}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
