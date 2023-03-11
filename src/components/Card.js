import React from "react";
const card=()=>{

    return(
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

    )
}

export default card;