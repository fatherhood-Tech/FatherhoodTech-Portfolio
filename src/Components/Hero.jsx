import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative py-10 text-white bg-black mb-96 sm:py-16 md:py-24 md:pb-72">
        <div className="absolute hidden w-11/12 max-w-4xl -mt-56 duration-300 -translate-x-1/2 shadow-lg group top-full left-1/2 md:block hover:translate-y-3">
          <img
            className="object-cover w-full h-full"
            src="https://adminlte.io/wp-content/uploads/2021/07/notus-nextjs-tailwind-css-template.jpg"
            alt=""
          />
        </div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:flex lg:px-8">
          <div className="flex flex-col items-center mx-auto mb-16 text-center lg:mb-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full ">
                  Transforming Ideas into Digital Reality
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
                WELCOME TO FATHERHOOD TECH
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                At Fatherhood tech Inc, we specialize in bringing your vision
                to life with cutting-edge software development services. From
                concept to completion, we provide end-to-end solutions tailored
                to your unique business needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0">
              <button className="relative flex items-center justify-center px-6 py-2 mt-4 font-medium text-black transition bg-gray-100 border-2 border-gray-100 rounded-lg hover:translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Kurajyahe?
              </button>
              <button className="flex items-center px-6 py-2 mt-4 font-medium text-gray-100 transition border-2 border-gray-100 rounded-lg hover:translate-y-1 hover:text-black hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                Al bakala
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
