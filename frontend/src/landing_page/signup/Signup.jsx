import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, serFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    serFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        formData
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed");
    }
  };
  return (
    <>
      <div>
        <h2> Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          ></input>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
