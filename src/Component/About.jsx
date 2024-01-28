import React from "react";
import Rendy from "./rendy.png";
import "./HeroPortfolio.css";

const About = () => {
  return (
    <section className="items-center justify-center about h-screen">
      <div className="container mx-auto px-4 py-4 mt-2">
        <h1
          data-aos="fade-up"
          className="lg:text-4xl font-bold text-center text-3xl "
        >
          About <span className="text-sky-600">Me</span>
        </h1>
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:text-3xl font-semibold text-gray-600 text-center mt-1 mb-3 text-2xl"
        >
          My Introduction
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            src={Rendy}
            alt=""
            className="rounded-full border-4 border-sky-400 h-52 w-52 lg:h-96 lg:w-96 lg:mr-10 mt-2 lg:mb-0 object-cover "
          />
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center lg:text-left mt-4"
          >
            <h1 className="font-bold text-3xl mb-2 mt-1 lg:text-4xl">
              Tentang <span className="text-sky-600">Saya</span>
            </h1>
            <p className=" lg:text-xl lg:w-4/6 sm:text-sm">
              Halo, perkenalkan nama saya Rendy. Saya berasal dari Jakarta. Umur
              saya saat ini adalah 19 tahun, saya lahir pada 17 Maret 2004. Saat
              ini saya masih menempuh pendidikan kuliah S1 semester 3 di
              Universitas Bina Sarana Informatika di Fakultas Teknik
              Informatika.
              <p>
                Saya sangat menyukai hal baru dan saya akan sangat antusias
                apabila saya mendapatkan tantangan yang lebih menantang untuk
                bersaing di bidang industri.
              </p>
            </p>
            <h1 className="font-bold text-2xl mb-4">
              Hobby <span className="text-sky-600">Saya :</span>{" "}
              <span className="text-xl">Berolahraga</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
