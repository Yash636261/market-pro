import React from "react";

const getaway=()=>{

    return(
        <>
        <div class="w-full md:w-96 md:max-w-full mx-auto">
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form
      method="POST"
      action="https://herotofu.com/start"
      enctype="multipart/form-data"
    >
      <label class="block mb-6">
        <span class="text-gray-700">Company/Individual name</span>
        <input
          name="name"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Acme Corp"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">VAT number</span>
        <input
          name="vat"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Your logo</span>
        <input
          name="logo"
          type="file"
          class="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Country</span>
        <input
          name="country"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Billing address</span>
        <textarea
          name="address"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="5"
          placeholder=""
        ></textarea>
      </label>
      <div class="mb-6">
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                name="invoices"
                value="yes"
                type="checkbox"
                class="
                  text-indigo-600
                  border-gray-300
                  rounded
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                checked=""
              />
              <span class="ml-2">Receive invoices via email</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Update
        </button>
      </div>
      <div>
        <div class="mt-2 text-gray-700 text-right text-xs">
          by
          <a href="https://herotofu.com" class="hover:underline" target="_blank"
            >HeroTofu</a
          >
        </div>
      </div>
    </form>
  </div>
</div>

        </>
    );
};

export default getaway;