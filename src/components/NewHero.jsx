import React, { useEffect, useRef } from "react";
import { preloadImages } from "./../../utils"; // Asegúrate de ajustar la ruta correcta a tu archivo de utilidades
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";

const NewHero = () => {
  const scrollRef = useRef(null);

  const transition = { duration: 0.5, ease: "easeInOut" };
  const gridItems = [
    { row: 1, col: 4, image: "foto-1.jpg" },
    { row: 1, col: 1, image: "/src/assets/ercdisis.mp4" },
    { row: 2, col: 8, image: "foto-3.jpg" },
    { row: 2, col: 5, image: "foto-4.jpg" },
    { row: 3, col: 1, image: "foto-5.jpg" },
    { row: 4, col: 7, image: "fotos.png" },
    { row: 5, col: 8, image: "MEMORIA.jpg" },
    { row: 6, col: 2, image: "NOVENA.png" },
    { row: 7, col: 3, image: "PAJARO.jpg" },
    { row: 8, col: 7, image: "SALON_ROJO" },
    { row: 9, col: 1, image: "foto-5.jpg" },
    { row: 9, col: 6, image: "cachi.png" },
    { row: 10, col: 4, image: "bvs.mp4" },
    { row: 11, col: 2, image: "fotos.png" },
    { row: 12, col: 6, image: "NOVENA.png" },
    { row: 13, col: 3, image: "MEMORIA.jpg" },
    { row: 14, col: 5, image: "foto-2.jpg" },
    { row: 15, col: 1, image: "foto-5.jpg" },
    { row: 16, col: 2, image: "PAJARO.jpg" },
    { row: 17, col: 8, image: "foto-3.jpg" },
    { row: 18, col: 3, image: "PAJARO.jpg" },
    { row: 19, col: 5, image: "MEMORIA.jpg" },
    { row: 20, col: 4, image: "foto-5.jpg" },
  ];

  useEffect(() => {}, []);

  useEffect(() => {
    const text = new SplitType(".cursor-title");
    SplitType.revert(text);

    const characters = document.querySelectorAll(".char");
    console.log(characters);
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    gsap.to(".cursor-title", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".main",
        start: "top bottom",
        end: "bottom bottom",
        stagger: 0.05,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2);
          gsap.to(".cursor-title", { opacity: 1 - progress });
        },
      },
    });

    const gridItems = document.querySelectorAll(".grid > .grid__item");

    // Preload images
    preloadImages(".grid__item-img").then(() => {
      document.body.classList.remove("loading");
      let winsize;
      const calcWindowSize = () => {
        winsize = { width: window.innerWidth, height: window.innerHeight };
      };
      calcWindowSize();
      window.addEventListener("resize", calcWindowSize);
      gridItems.forEach((item) => {
        const image = item.querySelector(".grid__item-img");

        const xPercentRandomVal = gsap.utils.random(-100, 100);

        gsap
          .timeline()
          .addLabel("start", 0)
          .set(
            image,
            {
              transformOrigin: `${xPercentRandomVal < 0 ? 0 : 100}% 100%`,
            },
            "start"
          )
          .to(
            image,
            {
              ease: "none",
              scale: 0,
              scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
            "start"
          )
          .to(
            item,
            {
              ease: "none",
              xPercent: xPercentRandomVal,
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            },
            "start"
          );
      });
    });
  }, []);

  return (
    <div>
      <main className="main">
        <h1 className=" text-gray-100 text-xl cursor-title z-[9999] fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4  sm:text-8xl ">
          CARLA GIULIANI
        </h1>
        <div className="content">
          <div className="cover"></div>
          <div className="grid">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="grid__item"
                style={{ "--r": item.row, "--c": item.col }}
              >
                {item.image.endsWith(".mp4") ? (
                  <video
                    className="grid__item-img rounded-lg min-w-[120px] min-h-[120px]"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={item.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    className="grid__item-img rounded-lg min-w-[120px] min-h-[120px]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewHero;
