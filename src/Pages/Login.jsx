import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body">
            <fieldset class="fieldset">
              <label class="label">Email</label>
              <input type="email" class="input" placeholder="Email" />
              <label class="label">Password</label>
              <input type="password" class="input" placeholder="Password" />
              <div>
                <a class="link link-hover">Forgot password?</a>
              </div>
              <button class="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <small>
              Don't Have An Account?{" "}
              <Link
                className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                to="/register"
              >
                Register
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
