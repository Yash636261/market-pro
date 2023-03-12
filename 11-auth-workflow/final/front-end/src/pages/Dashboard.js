import { Link } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/main.svg";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
function Dashboard() {
  const { user } = useGlobalContext();
  const { name, userId, role } = user;
  return (
    <>
      {/* <Wrapper className='page'>
        <h2>Hello there, {user.name}</h2>
        <p>
          Your ID : <span>{userId}</span>
        </p>
        <p>
          Your Role : <span>{role}</span>
        </p>
      </Wrapper> */}
      <div class="w-max w-[100%] flex flex-row">
        <div class="border-2 border-rose-500 h-[1000px] w-[30vw]">
          <div class="flex flex-col m-[20px] space-y-4">
            <img
              class="rounded w-36 h-36 flex justify-center items-start m-[30px]"
              src="https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg?w=200&h=200&fit=crop&dpr=1"
              alt="Extra large avatar"
            />

            <div class="flex flex-col text-center text-black">
              <p>{user.name}</p>
              <p>Email</p>
              <p>{role}</p>
              <p>extra</p>
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

            <button class="btn btn-xs">Edit</button>
          </div>
        </div>

        <div class=" w-[70vw] flex flex-col">
          <div class=" h-[100px] m-[20px] border-2 border-emerald-400 text-center">
            <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              aperiam, ea voluptatibus ipsam ut repudiandae harum aut laborum
              voluptatem voluptatum.
            </p>
          </div>
          <h1 class="text-center text-4xl font-extrabold dark:text-white">
            Project Section
          </h1>
          <div class="border-2 border-blue-700">
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
}

const Wrapper = styled.div`
  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }
`;

export default Dashboard;
