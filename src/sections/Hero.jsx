import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden section-padding mt-20">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png"/>
      </div>

      <div className="hero-layout mt-10 flex flex-col md:flex-row gap-10 items-center">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Harshit Jain, a developer based in India with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header> 
        {/* RIGHT: Animation */}
        <div 
        className="relative z-10 w-full h-full ">
                  <DotLottieReact
                    src="https://lottie.host/8384a54c-3c02-4783-8b00-6c1c640b96c5/5pe1iZbZ3Z.lottie"
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                  />
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
