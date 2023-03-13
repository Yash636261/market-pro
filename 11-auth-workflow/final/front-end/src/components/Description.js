import React from "react";

const description = () => {
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
                <li className="text-1xl font-bold text-base-900">product name: impt</li>
                <li className="text-1xl font-bold text-base-900">date created: impt</li>
                <li className="text-1xl font-bold text-base-900">size: impt</li>
                <li className="text-1xl font-bold text-base-900">devloper name: impt</li>
              </ul>
              <p className="leading-relaxed mt-10">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex">
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
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
                
  
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  features
                </h2>

                <ul class="list-disc marker:text-blue-500">
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default description;
