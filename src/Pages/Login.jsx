import React from 'react';
import { NavLink } from 'react-router';
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div>
              
              <div className="hero">
                <div className="hero-content flex-col">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                  </div>
                  <div className="card bg-primary max-w-md md:w-120 shrink-0 shadow-2xl p-3 md:p-6 lg:p-8">
                    <h2 className="text-center text-2xl md:text-4xl font-bold">
                      Welcome Back!
                    </h2>
                    <p className="text-center mt-2">
                      You can explore interesting toys here.
                    </p>
                    <div className="card-body">
                      <form>
                        <fieldset className="fieldset">
                          
                          <label className="label">Email</label>
                          <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name="email"
                          />
                          
                          <label className="label">Password</label>
                          <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name="password"
                          />
                          <div><a className="link link-hover">Forgot password?</a></div>
                          <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                      </form>
                    </div>
                    <p>
                      Don't have an account?{" "}
                      <NavLink to="/register" className="text-blue-600">
                        Register Now
                      </NavLink>
                    </p>
                    <hr />
                    <button className="btn btn-secondary mt-4">
                      <FaGoogle /> Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Login;