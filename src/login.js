import axios from "axios";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const { name, userName, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate("/users/order");
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#D9E1E2",
        width: "60%",
        marginLeft: "20%",
        marginTop: "100px",
        border: "1px solid black",
      }}
    >
      <form
        onSubmit={(e) => onSubmit(e)}
        style={{ margin: "20px", marginLeft: "20%", width: "60%" }}
      >
        <div>
          <div
            class="form-group"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <label>Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div
            class="form-group"
            style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}
          >
            <label>UserName</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter UserName"
              name="userName"
              value={userName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div class="form-group" style={{ marginTop: "20px" }}>
            <label
              for="exampleInputPassword1"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ marginTop: "10px" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
