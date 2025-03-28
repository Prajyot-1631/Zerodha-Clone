import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // e = event object
  // e.target.name = Gets the name attribute of input field
  // e.target.value = Gets the current value typed by the user in input field
  // ...formData (spread operator) = keeps the previos values in formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData
      );
      // Store JWT Token in localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Stored Token:", localStorage.getItem("token"));

      //Check if the token is stored
      console.log("Saved Token:", localStorage.getItem("token"));

      //   Redirect to Dashboard
      window.location.href = `http://localhost:5173/?token=${response.data.token}`;
    } catch (error) {
      console.error("Login Failed");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
