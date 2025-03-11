import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

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
      window.location.href = `http://localhost:5174/?token=${response.data.token}`;
    } catch (error) {
      console.error("Login Failed");
    }
  };
  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          ></input>
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
