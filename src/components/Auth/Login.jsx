import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    console.log(e);
    e.preventDefault();
    if (email === "qa@gmail.com" && password === "Qazwsx@123") {
      navigate("/todo");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div >
      <form className="flex flex-col items-center justify-center gap-6" onSubmit={handleForm}>
        <div className="flex items-center gap-2">
          <label className="text-[#ECDFCC]" htmlFor="">
            Email:{" "}
          </label>
          <input
            className=" rounded-md bg-[#ECDFCC] p-1"
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter email..."
          />
        </div>
        <div className="flex gap-2">
        <label className="text-[#ECDFCC]" htmlFor="">
          Password:{" "}
        </label>
        
          <input
            className=" rounded-md bg-[#ECDFCC] p-1 text-"
            type="password"
            name="pass"
            placeholder="Enter password..."
            value={password}
            onChange={handlePass}
          />
        </div>
        <input
          className="bg-[#697565] text-[#ECDFCC] cursor-pointer px-6 py-3 rounded-lg" 
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};
export default Login;
