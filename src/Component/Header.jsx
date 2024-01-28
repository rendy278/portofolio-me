import React, { useState, useEffect } from "react";
import "./HeroPortfolio.css";
import { Typewriter } from "react-simple-typewriter";
import Sukume from "./Sukume.jpeg";
import AOS from "aos";

const HeroPortfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-gradient-to-l from-sky-500 to-red-500 flex items-center lg:h-screen headsec py-20 home ">
      <div className="text-white px-6 lg:px-10 w-full">
        <div className="flex md:flex-row flex-col items-center ">
          <div className="md:w-2/3 mx-auto">
            <p
              data-aos="fade-up"
              className="text-3xl font-medium mb-3 md:text-2xl"
            >
              Hi <span className="text-blue-200">I'm</span>
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="font-bold text-2xl lg:text-3xl"
            >
              R E N D Y
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-3xl mt-2 sm:text-small"
            >
              I'm{" "}
              <span className="text-2xl font-montserrat font-bold text-blue-200 ">
                <Typewriter
                  words={["Front End", "Web Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={200}
                  delaySpeed={180}
                />
              </span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-base lg:text-xl md:text-lg mb-3 lg:w-3/4 leading-8 mt-3"
            >
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning, I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="flex flex-col lg:flex-row gap-2 mt-4 mb-4 font-medium"
            >
              <button className="lg:py-4 lg:px-6 py-2 px-3 relative rounded-md bg-sky-600 text-white font-bold hover:border hover:bg-transparent hover:text-gray-800">
                <div className="bg-slate-200 rounded-full px-2 animate-ping py-2 absolute  -top-1 -left-1 "></div>
                <a href="https://wa.me/6283122895534">Hire me</a>
              </button>
              <button className="lg:py-4 lg:px-6 py-2 px-3 rounded-md bg-sky-600 text-white font-bold hover:border hover:bg-transparent hover:text-gray-800">
                <a href="">
                  <i className="uil uil-arrow-to-bottom"></i>Download CV
                </a>
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-first md:order-none mt-3 w-[220px] h-[220px] lg:w-[380px] lg:h-[380px]"
          >
            <img
              src={Sukume}
              alt="sukuna"
              className="rounded-full border-solid border-4 border-blue-600 heroImg "
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="grid grid-cols-3 lg:grid-cols-1 gap-3 text-balance mx-3 md:px-2 py-1 justify-between sosmed order-first md:order-none mt-2"
          >
            <a
              href="https://www.instagram.com/rnd_arstls?igsh=bWZiNjNqNmhybGps"
              className="uil uil-instagram  text-blue-200 hover:scale-110"
            ></a>
            <a
              href="linkedin.com/in/rendy-b232b1248"
              className="uil uil-linkedin-alt lg:block  text-blue-200 hover:scale-110"
            ></a>
            <a
              href="https://wa.me/6283122895534"
              className="uil uil-whatsapp lg:block  text-blue-200 hover:scale-110"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
