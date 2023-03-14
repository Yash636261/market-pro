import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext();
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            <p>market-pro</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="flex-1">
            {user && (
              <>
              <div className="nav-links">
                <button
                  className="btn btn-small"
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  logout
                </button>
              </div>
              </>
            )}
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <button>
                <img src="./R.png" alt="logo" />
              </button>
            </label>

            {user && (
              <>
              <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52  text-white"
            >
              
              <li className="mt-1">
                <Link to="/card">Home</Link>
              </li>
              <li className="mt-1">
                <Link className="justify-between" to="/profile">
                  Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
            </ul>
              </>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.nav`
  background: var(--white);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
  }
  .nav-links p {
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }
  .home-link {
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 776px) {
    .nav-links {
      flex-direction: row;
      align-items: center;
    }
    .nav-links p {
      margin: 0;
      margin-right: 1.5rem;
    }
  } ;
`;

export default Navbar;
