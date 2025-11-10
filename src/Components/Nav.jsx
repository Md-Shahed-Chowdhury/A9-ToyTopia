
import { Link, NavLink, useNavigate } from 'react-router';
import '../App.css';
import { use, useState } from 'react';
import { MyContext } from '../Provider/ContextProvider';
import { toast } from 'react-toastify';


const Nav = () => {

  const {user,logOut} = use(MyContext);
  const [hover,setHover] =useState(false);
  const navigate=useNavigate();
  const handleLogOut = () =>{
    logOut().
    then(()=>{
      toast("Logged Out Successfully");
      navigate('/home');
    }).
    catch((error)=>{
      toast(error.message);
    });
  }
  
    return (
        <div className="navbar bg-info  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/myProfile">My Profile</NavLink></li>
        <li><NavLink to="/other">Other</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">ToyTopia</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/myProfile">My Profile</NavLink></li>
        <li><NavLink to="/other">Other</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    {user && <div className='rounded-full w-10 mr-2 relative'><img src={user.photoURL} alt="" className='overflow-hidden rounded-full' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}/></div>}
    {
      hover && <div className='absolute top-5 right-35 bg-gray-800 text-white px-2 py-1 rounded-md'>{user.displayName}</div>
    }
    {user?<Link onClick={handleLogOut} className="btn">Logout</Link>:<NavLink to="/login" className="btn">Login</NavLink>}
    
  </div>
</div>
    );
};

export default Nav;
