import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useGlobalContext();
  const { name, userId, role, category } = user;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/v1/users/${userId}`);
      const data = await response.json();
      console.log(data);
      setUserData(data.user);
    };
    fetchData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div class="w-max w-[100vw] flex">
        <div class="w-[100vw] flex flex-col">

        <h1 class="text-center text-2xl font-extrabold text-base-400">
            user details
          </h1>

          <div class=" h-[100px] m-[20px] text-center">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">username</div>
                <div className="stat-value">{user.name}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Age</div>
                <div className="stat-value">{userData.age}</div>
              </div>

              <div className="stat">
                <div className="stat-title">organization</div>
                <div className="stat-value">{userData.organization}</div>
              </div>
              
          <p className="stat mt-5 flex justify-center">
            <Link to="/FormComponent" class="btn btn-xs">
              Edit
            </Link>
          </p>
            </div>
            
          </div>
          

          <h1 class="text-center text-2xl font-extrabold text-base-400">
            Project Section
          </h1>
          <Link className="ml-10 w-[250px] h-[40px] text-xl btn btn-xs" to="/CreateProject">Upload new project</Link>
          <div class="">
            <div className="main flex flex-wrap justify-around items-center mt-15px my-8">
            <div className="card w-96 bg-cream-200 shadow-xl mt-10">
          <figure>
            <img src="/images/Code.gif" alt="logo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             CodeCompanion
            </h2>
            <p>CodeCompanion is a comprehensive and user-friendly web-based tool designed to support and enhance the development process for software engineers.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Github</div>
              <div className="badge badge-outline">BlogingSite</div>
            </div>
            <Link className="btn btn-ghost normal-case text-0 mt-5" to="/description"> View more</Link>
          </div>
        </div>
        <div className="card w-96 bg-cream-200 shadow-xl mt-10">
          <figure>
            <img src="/images/Take.png" alt="logo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             TakeABlog
            </h2>
            <p>TakeABlog is a blogging website for tech people that provides a platform for individuals to share their knowledge, experience, and insights about technology.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Github</div>
              <div className="badge badge-outline">BlogingSite</div>
            </div>
            <Link className="btn btn-ghost normal-case text-0 mt-5" to="/description"> View more</Link>
          </div>
        </div>
             <div className=" ml-2 card w-96 bg-base-100 shadow-xl mt-10">
                <figure>
                  <img src="/images/default.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Api-name
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className=" ml-2 card w-96 bg-base-100 shadow-xl mt-10">
                <figure>
                  <img src="/images/default.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Api-name
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
