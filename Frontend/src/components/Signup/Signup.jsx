import axios from "axios";
import React, { useState  } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {
  const navigate=useNavigate();
  const [data, setData] = useState({
    Name: "",
    comName:"",
    country:"",
    email: "",
    phoneno: "",
    password:"",
    // adharno:"",
    address:"",
    // panno:""
  });
  const [message, setMessage] = useState("");
  const Handle = (e) => {
    const NewData = {...data};
    NewData[e.target.name] = e.target.value;
    setData(NewData);
  };
  // console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login")
    try {
      const url = "http://localhost:5000/register";
      const User = await axios.post(url, {
        name: data.Name,
        email: data.email,
        comName:data.comName,
        country:data.country,
        password: data.password,
        phoneno:data.phoneno,
        address:data.address,
        // adharno:data.adharno,
        // panno:data.panno
      });
      if(User.status === 200){
          setMessage(User.data);
          console.log(User.data)
        
          console.log("hello world")
      
      }
      else if (User.status === 401){
          setMessage(User.data);
      }
    } catch (error) {
      console.log("error on AXios API :", error);
    }

  };
  return (
    <>
      <div className="container p-5">
        <div className="signup-container">
          <div className="card">
            <div className="card-header">
              {" "}
              <h4>Sign UP </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="Name"
                    value={data.Name}
                    onChange={Handle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Name">Company name:</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="comName"
                    value={data.comName}
                    onChange={Handle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    required
                    name="email"
                    value={data.email}
                    onChange={Handle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Phone">Phoneno</label>
                  <br />
                  <input
                    type="Number"
                    className="form-control"
                    required
                    name="phoneno"
                    value={data.phoneno}
                    onChange={Handle}
                  />
                </div>
                <div className="form-group">
                  <label >address</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="address"
                    value={data.address}
                    onChange={Handle}
                  />
                </div>
                <div className="form-group">
                  <label >country</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="country"
                    value={data.country}
                    onChange={Handle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Number">password</label>
                  <br />
                  <input
                    type="Number"
                    className="form-control"
                    required
                    name="password"
                    value={data.password}
                    onChange={Handle}
                  />
                </div>
                <button className="btn btn-primary m-3" type="submit"  onClick={handleSubmit}>
                  SignUp
                </button>
              </form>
            </div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
