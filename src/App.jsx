import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import "@fontsource/space-grotesk/400.css";
import React, { useState, useEffect } from "react";

function App() {
  let [showContent, setShowContent] = useState(false);
  const handleRedirect = () => {
    window.location.href = "https://shangamesh.netlify.app/1/#about";
  };
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const isWrongDomain = window.location.hostname === "shangameshdk.netlify.app";

    if (isMobile && isWrongDomain) {
     window.location.href = "https://shangamesh.netlify.app"; 
    }
  }, []);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 0.9,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.75,
      x: "-55%",
      bottom: "-35%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1  ,
      x: "10%",
      bottom: "50%",
      rotate: 0,
      duration: 2,
      delay: "-.25",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 1}%`,
      });
   
      gsap.to(".bg", {
        x: xMove * 2.5  ,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="150"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  SHANG
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.jpeg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  SHANGAMESH D K
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
             
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.jpeg"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-40 left-2/5 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">MY</h1>
                <h1 className="text-[12rem] leading-none ml-20">PORTFOLIO</h1>
                <h1 className="text-[12rem] leading-none -ml-40">WEBSITE</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-2/10 -translate-x-1/2  scale-[1] rotate-[-20deg]"
                src="./shang.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
           
            </div>
          </div>
          <div className="line w-1 h-1 bg-white"></div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[60%] py-0">
                <div style={{ fontFamily: 'Space Grotesk' }}>
                  <h1 className="text-7xl font-bold">Hi,</h1>
                  <h2 className="text-6xl font-bold">I am Shangamesh D K,</h2>
                  <h1 className="mt-2 text-[3rem]  font-bold">Software Developer
& VFX Artist.</h1>
                </div>
                <div
                  className="mt-10 w-[150px] h-2"
                  style={{ backgroundColor: "#1FA574" }}
                ></div>
                <div style={{ fontFamily: "Space Grotesk" }}>
                  <p className="mt-10 text-xl font-bold opacity-80">
                  I’m a passionate and results-driven Software Developer and VFX Artist with a keen eye for detail and a strong commitment to innovation. Whether it’s building seamless web applications, crafting immersive visual experiences, or optimizing performance, I take pride in delivering efficient, scalable, and visually compelling solutions.
                  </p>
                </div>
                <div style={{ fontFamily: "Space Grotesk" }}>
                  <p className="mt-5 text-xl font-bold opacity-80">
                  With a background that bridges both technical development and digital creativity, I bring a unique perspective to every project. My experience ranges from front-end and back-end development to 3D design, compositing, and animation, enabling me to approach challenges from both functional and aesthetic angles.
                  </p>
                </div>
                <div style={{ fontFamily: "Space Grotesk" }}>
                  <p className="mt-5 text-xl font-bold opacity-80">
                  I believe that technology should be intuitive and impactful. My goal is always to create high-quality, user-centric outcomes that align with client goals and enhance user experiences. I’m constantly exploring new tools, trends, and techniques to stay ahead in the ever-evolving world of software and visual effects.
                  </p>
                </div><div style={{ fontFamily: "Space Grotesk" }}>
                  <p className="mt-10 text-xl font-bold opacity-80">
                  💡 Let’s collaborate and turn your vision into a reality—whether it’s a cutting-edge application, an engaging portfolio, or a stunning visual production.
                  </p>
                </div>  
                <button
                  onClick={handleRedirect}
                  className="mt-10 px-6 py-3 bg-[#1FA574] text-white font-bold text-xl rounded-lg hover:bg-green-700 transition-all"
                >
                  KNOW MORE
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;









