import { use, useState } from "react";
import { FaGoogle,FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { MyContext } from "../Provider/ContextProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Auth/Auth.init";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {
  const { emailRegister, setUser, googleLogin } = use(MyContext);
  const navigate = useNavigate();
  const [visible,setVisible] =useState(false);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const CurrentUser = res.user;
        toast("Login Successful");
        setUser(CurrentUser);
        navigate("/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    emailRegister(email, password)
      .then((user) => {
        const CurrentUser = user.user;
        toast("Registered Successfully");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("Profile Updated");
            setUser({ ...CurrentUser, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => toast(error.message));
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-primary max-w-md md:w-120 shrink-0 shadow-2xl p-3 md:p-6 lg:p-8">
            <h2 className="text-center text-2xl md:text-4xl font-bold">
              Welcome To ToyTopia
            </h2>
            <p className="text-center mt-2">
              You can explore interesting toys here.
            </p>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo"
                    name="photoUrl"
                    required
                  />
                  <label className="label">Password</label>
                  <div className=' relative'>
                                              <input
                                            type={visible ? "text" : "password"}
                                              
                                              className="input"
                                              placeholder="Password"
                                              name="password"
                                              required
                                            />
                                            
                                            
                                            <button onClick={()=>setVisible(!visible)} type="button" className='absolute top-2 right-2 md:right-10 lg:right-5  text-lg'>{visible?<FaEye />:<FaEyeSlash />}
                                            </button>
                                            </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue-600">
                login Now
              </NavLink>
            </p>
            <hr />
            <button
              onClick={handleGoogleLogin}
              className="btn btn-secondary mt-4"
            >
              <FaGoogle /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
