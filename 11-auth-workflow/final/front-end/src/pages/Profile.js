import React, { useState,useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user } = useGlobalContext();
  const { name, userId, role ,category} = user;
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
      <div class="w-max w-[100%] flex">
        <div class="justify-center h-[1000px] w-[30vw]">
          <div class="flex flex-col m-[20px] space-y-4">
            <img
              class="rounded w-36 h-36 justify-center items-start m-[30px]"
              src="https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt="Extra large avatar"
            />

            <div class="flex flex-col text-center text-base-400">
              <p>{userData.name}</p>
              <p>{userData.age}</p>
              <p>{userData.category}</p>
              <p>{userData.organization}</p>
            </div>
            {/* <form method="GET">
      <div className="flex flex-col">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="extra1">Extra:</label>
        <input type="text" id="extra1" name="extra1" value={extra1} onChange={(e) => setExtra1(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="extra2">Extra:</label>
        <input type="text" id="extra2" name="extra2" value={extra2} onChange={(e) => setExtra2(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form> */}

          <p>  <Link to="/FormComponent" class="btn btn-xs">Edit</Link></p>
          </div>
        </div>

        <div class="w-[70vw] flex flex-col">
          <div class=" h-[100px] m-[20px] text-center">
            <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              aperiam, ea voluptatibus ipsam ut repudiandae harum aut laborum
              voluptatem voluptatum.
            </p>
          </div>
          <h1 class="text-center text-4xl font-extrabold text-base-400">
            Project Section
          </h1>
          <div class="">
            <div className="main flex flex-wrap justify-around items-center mt-15px my-8">
              <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure>
                  <img src="/images/default.jpg" alt="logo" />
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
              <div className="card w-96 bg-base-100 shadow-xl mt-10">
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
              <div className="card w-96 bg-base-100 shadow-xl mt-10">
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
              <div className="card w-96 bg-base-100 shadow-xl mt-10">
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
