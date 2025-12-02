import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firbase.config";

const Register = () => {
  const { createUser, googleSignIn, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            setUser(userCredential.user);
            alert("Registration success")
          })
          .catch((error) => {
            const errorMessage = error.message;
            if (error) {
              alert(errorMessage);
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error) {
          alert(errorMessage);
        }
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log("Google user:", loggedUser);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Image URL</label>
              <input
                name="image"
                type="text"
                className="input"
                placeholder="Image URL"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
            <small>
              Don't Have An Account?{" "}
              <Link
                className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                to="/login"
              >
                Log In
              </Link>
            </small>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
