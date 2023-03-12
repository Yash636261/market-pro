
import React from "react";
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" to="/">market-pro</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/R.png" alt="/" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52 ">
        <li className="mt-1"><Link to="/">Home</Link></li>
        <li className="mt-1">
          <Link className="justify-between" to="/profile">
            Profile
            {/* <span className="badge">New</span> */}
          </Link>
        </li>
        <li className="mt-1"><Link to="/login">LogIn</Link></li>
      </ul>
    </div>
  </div>
</div>
  );
};
export default navbar;
