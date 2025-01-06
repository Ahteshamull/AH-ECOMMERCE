import React from "react";

const AllProducts = () => {
  return (
    <>
      <>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">
            Premium Threads
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product1.webp"
                  alt="Product 1"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Lexicon Luxe
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $10
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product2.webp"
                  alt="Product 2"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Adjective Attire
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $12
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product3.webp"
                  alt="Product 3"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    ThreadCraft Vibes
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $14
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product7.webp"
                  alt="Product 3"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Verbal Vogue Tees
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $12
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product5.webp"
                  alt="Product 3"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Jargon Jungle
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $15
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="Product 3"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Syllable Streetwear
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $14
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product1.webp"
                  alt="Product 3"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Syllable Streetwear
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $14
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
              <div className="w-full">
                <img
                  src="https://readymadeui.com/images/product2.webp"
                  alt="Product 3"
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                    Syllable Streetwear
                  </h5>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <h6 className="text-sm sm:text-base font-bold text-gray-800">
                      $14
                    </h6>
                    <div
                      className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[sans-serif] bg-gray-100">
          <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">
              Premium Sneakers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product9.webp"
                    alt="Product 1"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Sole Elegance
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $10
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product10.webp"
                    alt="Product 2"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Urban Sneakers
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $12
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product11.webp"
                    alt="Product 3"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Velvet Boots
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $14
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product12.webp"
                    alt="Product 3"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Summit Hiking
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $12
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product13.webp"
                    alt="Product 3"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Zenith Glow
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $15
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    alt="Product 3"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Echo Elegance
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $14
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product15.webp"
                    alt="Product 3"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">Pumps</h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $14
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                <div className="mb-4 bg-gray-100 rounded p-2">
                  <img
                    src="https://readymadeui.com/images/product10.webp"
                    alt="Product 3"
                    className="aspect-[33/35] w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <h5 className="text-base font-bold text-gray-800">
                      Blaze Burst
                    </h5>
                    <h6 className="text-base text-gray-800 font-bold ml-auto">
                      $14
                    </h6>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div
                      className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                      title="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-pink-600 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="text-sm px-2 h-9 font-semibold w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">
            Premium Threads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="laptop1"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $600
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">50</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop3.webp"
                  alt="laptop2"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    ASUS Vivobook 15, Intel Core i3-1220P 12th Gen
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $550
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">70</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop1.webp"
                  alt="laptop3"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Lenovo V15 Intel Celeron N4500 15.6" (39.62 cm)
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $570
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">30</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop4.webp"
                  alt="laptop4"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Acer One 14 AMD Ryzen 3 (8GB RAM/256GB SSD/AMD)
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $520
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">55</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop5.webp"
                  alt="laptop5"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Dell 15 Laptop, 8GB/ 1TB+256GB SSD/15.6
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $570
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">65</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop6.webp"
                  alt="laptop5"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Samsung 15 Laptop, 8GB/ 1TB+256GB SSD/15.6
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $770
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="laptop1"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $600
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">50</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop3.webp"
                  alt="laptop2"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    ASUS Vivobook 15, Intel Core i3-1220P 12th Gen
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $550
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">70</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop1.webp"
                  alt="laptop3"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Lenovo V15 Intel Celeron N4500 15.6" (39.62 cm)
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $570
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">30</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop4.webp"
                  alt="laptop4"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Acer One 14 AMD Ryzen 3 (8GB RAM/256GB SSD/AMD)
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $520
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">55</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop5.webp"
                  alt="laptop5"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Dell 15 Laptop, 8GB/ 1TB+256GB SSD/15.6
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $570
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">65</p>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
              <div className="w-full p-4">
                <img
                  src="https://readymadeui.com/images/laptop6.webp"
                  alt="laptop5"
                  className="aspect-[8/6] w-full object-contain"
                />
              </div>
              <div className="p-6">
                <hr className="border mb-6" />
                <div>
                  <h4 className="text-sm text-gray-800 leading-relaxed">
                    Samsung 15 Laptop, 8GB/ 1TB+256GB SSD/15.6
                  </h4>
                  <h4 className="text-base text-gray-800 font-bold mt-4">
                    $770
                  </h4>
                </div>
                <div className="flex items-center space-x-1 mt-4">
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-base text-gray-800 !ml-2">85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-16">
            Top Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8 sm:gap-y-16">
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/watch1.webp"
                  alt="product1"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  French Connection Timex
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $95.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch2.webp"
                  alt="product4"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Classic Bluetooth
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $60.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch3.webp"
                  alt="product6"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Smart Watch
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $110.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch4.webp"
                  alt="product2"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Amazfit GTR
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $85.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch5.webp"
                  alt="product3"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Michael Kors Lexington
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $77.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch8.webp"
                  alt="product5"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Garmin Venu
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $90.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch7.webp"
                  alt="product7"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Fitbit Sense
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $50.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
            <div className="bg-white overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/watch8.webp"
                  alt="product8"
                  className="aspect-[128/70] w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Fossil Gen
                </h4>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $35.00
                </h4>
              </div>
              <div className="flex justify-center space-x-1 mt-4">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl max-w-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
              <div className="bg-gray-50 overflow-hidden mx-auto rounded-b-2xl">
                <img
                  src="https://readymadeui.com/images/sunglass1.webp"
                  alt="sunglass1"
                  className="aspect-[281/218] w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Golden Glass Wear
                </h3>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10  bg-gray-100 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold">
                    $10.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
              <div className="bg-gray-50 overflow-hidden mx-auto rounded-b-2xl">
                <img
                  src="https://readymadeui.com/images/sunglass2.webp"
                  alt="sunglass2"
                  className="aspect-[281/218] w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Blue Glass Wear
                </h3>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10  bg-gray-100 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold">
                    $9.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
              <div className="bg-gray-50 overflow-hidden mx-auto rounded-b-2xl">
                <img
                  src="https://readymadeui.com/images/sunglass5.webp"
                  alt="sunglass3"
                  className="aspect-[281/218] w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Black Glass Wear
                </h3>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10  bg-gray-100 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold">
                    $16.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
              <div className="bg-gray-50 overflow-hidden mx-auto rounded-b-2xl">
                <img
                  src="https://readymadeui.com/images/sunglass3.webp"
                  alt="sunglass4"
                  className="aspect-[281/218] w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Round Glass
                </h3>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10  bg-gray-100 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold">
                    $14.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
              <div className="bg-gray-50 overflow-hidden mx-auto rounded-b-2xl">
                <img
                  src="https://readymadeui.com/images/sunglass7.webp"
                  alt="sunglass5"
                  className="aspect-[281/218] w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  White Lens Glass
                </h3>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10  bg-gray-100 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold">
                    $8.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
              <div className="bg-gray-50 overflow-hidden mx-auto rounded-b-2xl">
                <img
                  src="https://readymadeui.com/images/sunglass6.webp"
                  alt="sunglass6"
                  className="aspect-[281/218] w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Black Glass
                </h3>
                <div className="flex items-center justify-between gap-2 mt-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10  bg-gray-100 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      className="fill-gray-800 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold">
                    $11.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans bg-gray-50 px-4 py-8">
          <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/watch1.webp"
                    alt="product1"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    French Timex
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $95.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    alt="product2"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Echo Elegance
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $20.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/laptop4.webp"
                    alt="product3"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Acer One 14 AMD
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $400.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/watch4.webp"
                    alt="product4"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Irish Cream Dream
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $11.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/coffee7.webp"
                    alt="product5"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Luxury desk clock
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $90.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/watch7.webp"
                    alt="product6"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Smart Watch
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $110.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/watch8.webp"
                    alt="product7"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Creative Wall Clock
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $50.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/laptop2.webp"
                    alt="product8"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    ASUS Vivobook 15
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $450.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/watch3.webp"
                    alt="product1"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    French Timex
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $95.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    alt="product2"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Echo Elegance
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $20.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/laptop4.webp"
                    alt="product3"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Acer One 14 AMD
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $400.00
                  </h4>
                </div>
              </div>
              <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                <div className="w-full overflow-hidden mx-auto">
                  <img
                    src="https://readymadeui.com/images/watch5.webp"
                    alt="product4"
                    className="aspect-[108/82] w-full object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold text-gray-800">
                    Irish Cream Dream
                  </h3>
                  <h4 className="text-sm text-blue-600 font-bold mt-2">
                    $11.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
            Top Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/sunglass7.webp"
                  alt="product1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    White Sun Glass
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $35.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/product14.webp"
                  alt="product2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    Echo Elegance
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $20.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/laptop4.webp"
                  alt="product3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    Acer One 14 AMD
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $400.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/coffee2.webp"
                  alt="product4"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    Irish Cream Dream
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $11.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/coffee7.webp"
                  alt="product5"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    Mocha Madness
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $10.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/sunglass6.webp"
                  alt="product6"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    Black Sun Glass
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $70.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/product12.webp"
                  alt="product7"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    Urban Sneakers
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $20.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
              <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="product8"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-sm lg:text-base font-bold text-white lg:text-gray-800">
                    ASUS Vivobook 15
                  </h3>
                  <h4 className="text-sm lg:text-base text-blue-600 font-bold mt-2">
                    $450.00
                  </h4>
                </div>
                <div className="flex justify-center space-x-1 mt-4 max-sm:hidden">
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans bg-white p-4 mx-auto lg:max-w-7xl md:max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-4 sm:gap-x-6">
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch1.webp"
                  alt="product1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  French Connection
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $95.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch2.webp"
                  alt="product2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Classic Bluetooth
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $78.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch3.webp"
                  alt="product3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Kors Lexington
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $68.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch4.webp"
                  alt="product4"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Smart Watch
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $105.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch5.webp"
                  alt="product5"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Alarm Clock Watch
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $30.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch6.webp"
                  alt="product6"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Wall Clock
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $40.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch7.webp"
                  alt="product7"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Classic Watch
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $60.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch8.webp"
                  alt="product8"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  French Watch
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $80.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch1.webp"
                  alt="product1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  French Connection
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $95.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch2.webp"
                  alt="product2"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Classic Bluetooth
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $78.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch3.webp"
                  alt="product3"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Kors Lexington
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $68.00
                </h4>
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center gap-6 overflow-hidden cursor-pointer">
              <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden rounded-lg">
                <img
                  src="https://readymadeui.com/images/watch4.webp"
                  alt="product4"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-800">
                  Smart Watch
                </h3>
                <h4 className="text-sm sm:text-base text-blue-600 font-bold mt-2">
                  $105.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AllProducts;
