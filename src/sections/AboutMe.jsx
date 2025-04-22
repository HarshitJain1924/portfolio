import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import personImage from '/images/pfp.jpg';
import resumePDF from '/resume.pdf';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import TitleHeader from "../components/TitleHeader";

const AboutMe = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".about-image",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
    );
  });

  useEffect(() => {
    gsap.to(".image-background", {
      rotation: 360,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }, []);

  return (
    <section id="about" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-10 px-5 flex flex-col items-center">
        <TitleHeader
          title="About Me"
          sub="👋 A little bit about myself"
        />
      <div className="w-full h-full md:px-20 px-5">
        
        <div className="about-layout mt-10 flex flex-col md:flex-row gap-10 items-center">
          {/* Left Part: Image */}
          <div className="about-image flex-1 flex justify-center items-center relative">
            <div className="image-background absolute w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl"></div>
            <div className="rounded-full border-4 border-green-500 p-2 relative">
              <img src={personImage} alt="About Me" className="rounded-full w-70 h-70 object-cover" />
            </div>
          </div>

          {/* Right Part: Content */}
          <div className="about-text flex-1 text-center md:text-left">
            <h2 className="text-green-500 text-3xl font-bold">Hello, I'm Harshit Jain</h2>
            <h3 className="text-white text-xl mt-2">Software Developer</h3>
            <p className="text-white-50 md:text-lg mt-4">
              I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
            </p>
            <p className="text-white-50 md:text-lg mt-2">
              When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
            </p>

            {/* Resume and Social Links */}
            <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://github.com/HarshitJain1924" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-white hover:text-green-500 transition duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/harshitjain1924/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-white hover:text-green-500 transition duration-300" />
                </a>
                <a href="https://leetcode.com/u/HarshitJain1924/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="text-2xl text-white hover:text-green-500 transition duration-300" />
                </a>
                <a href="https://www.geeksforgeeks.org/user/harshitjain1924/" target="_blank" rel="noopener noreferrer">
                  <SiGeeksforgeeks className="text-2xl text-white hover:text-green-500 transition duration-300" />
                </a>
              </div>
              <div className="mt-4 md:mt-0">
                <a href={resumePDF} download className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                  Download Resume
                </a>
                <a href="https://drive.google.com/drive/folders/12CRko1KNxTLPOZ-x3d15wzaM7TBpkcjR?usp=sharing" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View My Certificates
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;