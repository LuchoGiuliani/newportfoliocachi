import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGoogle,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  // const pinn = useRef();

  // useLayoutEffect(() => {
  //   const  titles = document.querySelectorAll(".title")
  //   const ctx = gsap.context(() => {
  //     console.log(titles);
  //       gsap.to(titles, {
  //           scrollTrigger: {
  //             trigger: ".container_title",
  //             start: "top top ",
  //             end: "bottom 10%",
  //             pin: titles,
  //             toggleActions: "restart none none",
  //             scrub: 4,

  //           },
  //         }),
  //         gsap.to(titles, {
  //           scrollTrigger: {
  //             trigger: ".container_title",
  //             start: "top top ",
  //             end: "bottom 10%",
  //             pin: ".title2",
  //             duration:2,
  //             toggleActions: "restart none none",
  //             scrub: 4,

  //           },
  //         });
  //       }, pinn);

  //       // then later
  //     return () => ctx.revert();
  //   })

  return (
    <div className="flex justify-between gap-3  bg-[#232629] opacity-70 rounded-t-lg fixed sm: items-center z-10 container_title bottom-0 max-h-12  left-1/2 transform -translate-x-1/2 navbar">
    <h1 className=" text-white text-center p-1">Carla Giuliani</h1>
    <a className="hover:scale-125" target="_blank"  href="https://www.youtube.com/@cachideviaje/videos"> <FontAwesomeIcon className="text-white hover:text-red-700 " icon={faYoutube} /></a>
    <a className="hover:scale-125" target="_blank"  href="mailto:cachicorreo@gmail.com"> <FontAwesomeIcon  className="text-white hover:text-slate-600 " icon={faGoogle} /></a>
    <a className="hover:scale-125" target="_blank" href="https://www.linkedin.com/in/cachi-giuliani-audiovisual/ "> <FontAwesomeIcon  className="text-white hover:text-blue-500 " icon={faLinkedin} /></a>
    <a className="hover:scale-125" target="_blank"  href="/twitter"> <FontAwesomeIcon  className="text-white hover:text-green-600" icon={faWhatsapp} /></a>
    <h1 className=" text-white p-2 text-center ">Diseño Audiovisual</h1>
  </div>
  );
}

export default Navbar;
