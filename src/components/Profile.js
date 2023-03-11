import React from "react";

const profile=()=>{
    return(<>
        <div class="w-max w-[100%] flex flex-row">

            <div class="border-2 border-rose-500 h-[1000px] w-[30vw]">

                <div class="flex flex-col m-[20px] space-y-4">


                <img
                    class="rounded w-36 h-36 flex justify-center items-start m-[30px]"
                    src="https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg?w=200&h=200&fit=crop&dpr=1"
                    alt="Extra large avatar"
                />


                <div class="flex flex-col text-center text-white">
                    <p>Username</p>
                    <p>Email</p>
                    <p>Extra</p>
                    <p>extra</p>
                </div>


                <button class="btn btn-xs">Edit</button>
                </div>
            </div>

            <div class="border-2 border-rose-500 w-[70vw] flex flex-col">
   
                <div
                class=" h-[100px] m-[20px] border-2 border-emerald-400 text-center"
                >
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

};

export default profile;