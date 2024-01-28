import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../project images/webpencarianfilm.png";
import Project2 from "../project images/landingpage.png";
import Project3 from "../project images/crudjquery.png";
import Project4 from "../project images/ecourse.png";
import Project5 from "../project images/cruddatabase.png";
import Project6 from "../project images/shopingcart.png";
import Project7 from "../project images/weather.png";
import Project8 from "../project images/kalkulator.png";
const projects = [
  {
    name: "Web Pencarian Film",
    image: Project1,
    description:
      "Web ini dibuat menggunakan html css bootstrap javascript dan jquery untuk fetch data web ini menggunakan postman",
    liveDemo: "https://rendy278.github.io/WebPencarianFilm/callback.html",
    repository: "https://github.com/rendy278/WebPencarianFilm.git",
  },
  {
    name: "Web Landing Page E-commers",
    image: Project2,
    description:
      "Web ini dibuat menggunakan html css javascript Web E-commers ini hanya menampilkan tampilan nya saja jadi tidak ada fitur didalam web tersebut",
    liveDemo:
      "https://rendy278.github.io/landing-page-ecommers/kelompok-ecommerce-website-master/index.html",
    repository: "https://github.com/rendy278/landing-page-ecommers.git",
  },
  {
    name: "Web Crud Jquey",
    image: Project3,
    description:
      "Web crud ini dibuat dengan menggunakan html css javascript dan jquery hanya saja web crud ini tidak terkoneksi kedalam database",
    liveDemo:
      "https://rendy278.github.io/crud-javascript-jquery/crud%20liblary.html",
    repository: "https://github.com/rendy278/crud-javascript-jquery.git",
  },
  {
    name: "Web Landing Page E-course",
    image: Project4,
    description:
      "Web ecourse ini dibuat menggunakan html css javascript dan php tujuan web ini dibuat adalah untuk menyelesaikan tugas matkul terakhir web programing 1",
    liveDemo: "https://jawirecourse.000webhostapp.com/education.html",
    repository: "https://github.com/rendy278/E-course.git",
  },
  {
    name: "Web Crud DataBase",
    image: Project5,
    description:
      "Web crud ini dibuat menggunakan React Js Node Js Bulma Css dan Express Js. Pada web ini sudah terhubung dengan database mysql dan web ini belom di hosting",
    liveDemo: "/",
    repository: "https://github.com/rendy278/Crud-database.git",
  },
  {
    name: "Shoping cart ReactJs",
    image: Project6,
    description:
      "Web ini dibuat untuk mempelajari membuat shopingcart pada web jadi web ini tidaklah responsive",
    liveDemo: "https://shoping-cart-red-alpha.vercel.app/",
    repository: "https://github.com/rendy278/shoping-cart.git",
  },
  {
    name: "Weather App",
    image: Project7,
    description:
      "Web weather app ini di buat menggunakan html css react js dan tailwind web ini dibuat untuk mengetahui cuaca di beberapa negara",
    liveDemo: "https://weather-app-one-pi-54.vercel.app/",
    repository: "https://github.com/rendy278/weather-app.git",
  },
  {
    name: "Kalkulator Reactjs",
    image: Project8,
    description:
      "Kalkulator ini digunakan untuk menghitung dan pada kalkulatir ini sudah dilengkapi sistem dark mode, dan pada web ini dibuat menggunakan Reactjs dan tailwind css",
    liveDemo: "https://kalkulator-react-js.vercel.app/",
    repository: "https://github.com/rendy278/kalkulator-react-js.git",
  },
];

const Portfolio = () => {
  return (
    <div className="lg:mx-12 mx-4 my-32 portofolio" id="portfolio">
      <div className="mb-9 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p
            data-aos="fade-up"
            className="text-lg lg:text-xl font-bold text-headingcolor mb-4 mt-6"
          >
            My Project
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="200"
            className="lg:text-4xl text-2xl text-headingcolor font-semibold"
          >
            Below are some of the <br />
            projects I have made
          </h2>
        </div>
        <button
          data-aos="fade-left"
          data-aos-duration="200"
          className="py-2 px-2 lg:px-3 lg:py-3 text-white bg-sky-400 rounded-md  w-40 sm:w-auto hover:bg-sky-600"
        >
          <a href="https://github.com/rendy278">Visit My Repository</a>
        </button>
      </div>

      {/* project card */}
      <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={`fade-up`}
            data-aos-duration={400 * (index + 1)}
            data-aos-once="false"
            className="max-w-md rounded overflow-hidden shadow-xl hover:bg-slate-200"
          >
            <img src={project.image} alt={project.name} />
            <div className="px-2 py-2">
              <div className="font-bold lg:text-lg text-md mb-2 px-3 mt-3 ">
                {project.name}
              </div>
              <p className="text-gray-700 lg:text-md text-sm overflow-auto h-20  px-3">
                {project.description}
              </p>
            </div>
            <div className="flex mx-2 mb-3 gap-2">
              <span className=" bg-red-600 rounded px-1 py-1 text-sm font-semibold text-white hover:bg-sky-500">
                <a
                  href={project.liveDemo}
                  className="text-xs lg:text-lg mx-auto"
                >
                  Live Demo
                </a>
              </span>
              <span className=" bg-red-600 rounded px-1 py-1 text-sm font-semibold text-white  hover:bg-sky-500">
                <a
                  href={project.repository}
                  className="text-xs lg:text-lg mx-auto"
                >
                  Repositories
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link to="https://github.com/rendy278">
        <button
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="py-3 mt-9 px-4 text-white bg-sky-400 rounded-md sm:w-auto hover:bg-sky-600 mx-auto  flex justify-center"
        >
          Visit More Portfolio
        </button>
      </Link>
    </div>
  );
};

export default Portfolio;
