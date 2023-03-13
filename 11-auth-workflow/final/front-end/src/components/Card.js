import React from "react";
import { Link } from "react-router-dom";
const card = () => {
  return (
    <>
      <div class="carousel w-full mt-2">
        <div id="slide1" class="carousel-item relative w-full overflow-hidden">
          <img src="/ebay.webp" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="/ebay.webp" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="/ebay.webp" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="/ebay.webp" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="main flex flex-wrap justify-around items-center mt-15px my-8">
        <div className="card w-96 bg-cream-200 shadow-xl mt-10">
          <figure>
            <img src="/images/default.jpg" alt="logo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Api-name
            </h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <Link className="btn btn-ghost normal-case text-0 mt-5" to="/description"> view more</Link>
          </div>
        </div>
        <div className="card w-96 bg-cream shadow-xl mt-10">
          <figure>
            <img src="/images/default.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Api-name
            </h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <Link className="btn btn-ghost normal-case text-0 mt-5" to="/description"> view more</Link>
          </div>
        </div>
        <div className="card w-96 bg-cream-200 shadow-xl mt-10">
          <figure>
            <img src="/images/default.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Api-name
            </h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <Link className="btn btn-ghost normal-case text-0 mt-5" to="/description"> view more</Link>
          </div>
        </div>
        <div className="card w-96 bg-cream-200 shadow-xl mt-10">
          <figure>
            <img src="/images/default.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Api-name
            </h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <Link className="btn btn-ghost normal-case text-0 mt-5" to="/description"> view more</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
