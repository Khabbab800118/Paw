import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Register now!</h1>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body">
            <fieldset class="fieldset">
              <label class="label">Name</label>
              <input type="text" class="input" placeholder="Name" />
              <label class="label">Image URL</label>
              <input type="text" class="input" placeholder="Image URL" />
              <label class="label">Email</label>
              <input type="email" class="input" placeholder="Email" />
              <label class="label">Password</label>
              <input type="password" class="input" placeholder="Password" />
              <button class="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <small>
              Don't Have An Account?{" "}
              <Link
                className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                to="/login"
              >
                Log In
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
