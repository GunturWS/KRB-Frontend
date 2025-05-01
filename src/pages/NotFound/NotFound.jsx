import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import NotFoundImage from "../../../public/images/NotFound-img.png";
import "../../index.css"


const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1 flex flex-col items-center justify-center pt-0 pb-12">
        <div className="container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center mx-auto">
          <div className="home__data text-center lg:text-left">
            <p className="pb-2 font-semibold text-xl text-gray-700">Error 404</p>
            <h1 className="pb-4 text-5xl font-bold text-gray-900 lg:text-6xl">Hey Buddy</h1>
            <p className="pb-8 font-semibold text-gray-600">
              We can't seem to find the page <br />
              you are looking for.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 py-4 px-8 font-bold text-white"
            >
              Go Home
            </a>
          </div>

          <div className="home__img justify-self-center mt-6 lg:mt-0">
            <img
              src={NotFoundImage}
              className="w-64 animate-floting lg:w-[400px]"
              alt="home image"
            />
            <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-full bg-gray-900/30 blur-md lg:w-64"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
