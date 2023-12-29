import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, signUpProvider, signUpProviderGithub, forgotPassword } =
    useAuthContext();
  // inputlarla çalışıyorsak ilk değerleri null veya undefined olmamalı
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = info;
    signIn(email, password);
  };

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden flex-1  justify-center items-center">
        <div className={`form-container mt-[5vh] w-[380px] h-[500px] `}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Sign In
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="email"
                className="peer"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="password"
                className="password"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_password">Password</label>
            </div>
            <div className="flex justify-between">
              <span
                className="py-3 font-[0.75rem] cursor-pointer decoration-none text-gray-500 hover:text-red-500"
                onClick={() => forgotPassword(info.email)}
              >
                Forgot Password
              </span>
              <Link
                to="/register"
                className="py-3 font-[0.75rem] cursor-pointer decoration-none text-gray-500 hover:text-red-500"
              >
                Sign Up
              </Link>
            </div>
            <button className="btn-danger" type="submit">
              Login
            </button>
            <button
              className="flex justify-between text-center items-center btn-danger"
              type="button"
              onClick={signUpProvider}
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
            <button
              className="flex justify-between text-center items-center btn-danger"
              type="button"
              onClick={signUpProviderGithub}
            >
              Continue with Github
              <FaGithub className="text-[2rem]" color="currentColor" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
