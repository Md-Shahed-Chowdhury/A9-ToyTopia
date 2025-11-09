
import { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router";
import { MyContext } from "../Provider/ContextProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Auth/Auth.init";
import { toast } from "react-toastify";

const Register = () => {
  const {emailRegister,setUser,googleLogin} = use(MyContext);
  
  const handleGoogleLogin = () =>{
    
    googleLogin().
    then((res)=>{
      
      const CurrentUser = res.user;
      toast("Login Successful");
      setUser(CurrentUser);
    }).
    catch((error)=>{
      alert(error.message);
    });
  }
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        emailRegister(email,password).
        then((user)=>
        { const CurrentUser = user.user;
          toast("Registered Successfully");
          updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
          }).
          then(()=>{
            console.log("Profile Updated");
            setUser({...CurrentUser,displayName:name,photoURL:photoUrl});
          }).
          catch((error)=>alert(error.message));
        }).
        catch((error)=>{
          alert(error.message);
        });
        
    }
  return (
    <div>
      
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
              <form onSubmit={handleRegister} >
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    name="name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo"
                    name="photoUrl"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <button className="btn btn-neutral mt-4" >Register</button>
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
            <button onClick={handleGoogleLogin} className="btn btn-secondary mt-4">
              <FaGoogle /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
