import React from "react";
import { Link } from "react-router-dom";

const description4 = () => {
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="max-w-2xl mx-auto">

          
          <div class="carousel w-full mt-2">
        <div id="slide1" class="carousel-item relative w-full overflow-hidden">
          <img src="/images/default.jpg" class="w-full" alt="slider" />
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
          <img src="/images/default.jpg" class="w-full" alt="slider" />
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
          <img src="/images/default.jpg" class="w-full" alt="slider" />
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
          <img src="/images/default.jpg" class="w-full" alt="slider" />
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

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                about this projects
              </h1>
              <ul className="text-grey-200 text-1xl">
                <li className="text-1xl font-bold text-base-900">product name: Take A Blog</li>
                <li className="text-1xl font-bold text-base-900">date created: 23,feb 2022</li>
                <li className="text-1xl font-bold text-base-900">size: 1GB</li>
                <li className="text-1xl font-bold text-base-900">devloper name: Tech Nodes</li>
              </ul>
              <p className="leading-relaxed mt-10">
              TakeABlog is a blogging website for tech people that provides a platform for individuals to share their knowledge, experience, and insights about technology.
              </p>
              <div className="flex">
                <button className="flex mr-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Preview
                </button>
                <Link className="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" to="/Getaway">
                  Get It Now
                </Link>
              </div>
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  description
                </h2>
                <p className="leading-relaxed">
                    <ul class="list-disc marker:text-blue-500">
                        <li className="mt-3">Allows a glitch-free playback time of up to 5 hours in single charge and up to 38 hours with charging case. The 700mAh charging case takes 2 hours to charge, which enables quick charging of the earbuds.</li>
                        <li className="mt-3">Bluetooth 5.0 with a 10m range allows instant pairing with any Android or iOS device.</li>
                        <li className="mt-3">IPX-5 water and sweat resistant: Use comfortably outdoors or at the gym</li>
                        <li className="mt-3">Noise cancellation enables an immersive listening experience.</li>
                    </ul>
                    </p>
                
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  How to setup project
                </h2>

                <p>
                1 Install python by official way:<br/>
                2 Then in CMD enter pip install django<br/>
pip install django<br/>
3. Open project directly in cmd and locate manage.py file directory
py -m venv myworld<br/>
4. Then activate the environment<br/>
Myworld\Scripts\activate<br/>
                </p>

                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  Tech Used
                </h2>

                <ul class="list-disc marker:text-blue-500">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>DJANGO</li>
                </ul>


                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  features
                </h2>

                <ul class="list-disc marker:text-blue-500">
                    <li>Take a blog provides a handy feature of ability to edit the existing text and images easily.</li>
                    <li>TakeABlog provides a chat support which does the perfect job by filling the communication gap between the author and the user which equally results into a better user experience.</li>
                    <li>TakeABlog provides a wide category and filter options to choose one's according to the requirements and interest of the user which reflects a better user experience.</li>
                </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default description4;
