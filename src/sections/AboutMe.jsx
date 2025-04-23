import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import personImage from '/images/pfp.jpg';
import resumePDF from '/resume.pdf';
import { FaGithub } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
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
    <section id="about" className="relative flex flex-col items-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="relative z-10 w-full h-full px-5 flex flex-col items-center md:items-start md:flex-row gap-10">
        <div className="about-image flex-1 flex justify-center items-center relative">
          <div className="image-background absolute w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl"></div>
          <div className="rounded-full border-4 border-green-500 p-2 relative">
            <img src={personImage} alt="About Me" className="rounded-full w-32 h-32 md:w-70 md:h-70 object-cover" />
          </div>
        </div>

        <div className="about-text flex-1 text-center md:text-left">
          <h2 className="text-green-500 text-2xl md:text-3xl font-bold">Hello, I'm Harshit Jain</h2>
          <h3 className="text-white text-lg md:text-xl mt-2">Software Developer</h3>
          <p className="text-white-50 text-sm md:text-lg mt-4">
            I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
          </p>
          <p className="text-white-50 text-sm md:text-lg mt-2">
            When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com/HarshitJain1924" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl md:text-2xl text-white hover:text-green-500 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/harshitjain1924/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl md:text-2xl text-white hover:text-green-500 transition duration-300" />
              </a>
              <a href="https://leetcode.com/u/HarshitJain1924/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="text-xl md:text-2xl text-white hover:text-green-500 transition duration-300" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/harshitjain1924/" target="_blank" rel="noopener noreferrer">
                <SiGeeksforgeeks className="text-xl md:text-2xl text-white hover:text-green-500 transition duration-300" />
              </a>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4">
  <a 
  href={resumePDF} 
  download 
  className="bg-green-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-green-600 transition duration-300"
  target="_blank" rel="noopener noreferrer">
    <TbFileCv className="inline-block mr-1"/>
    Download Resume
  </a>
  <a 
  href="https://drive.google.com/drive/folders/12CRko1KNxTLPOZ-x3d15wzaM7TBpkcjR?usp=sharing" 
  className="bg-blue-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
  target="_blank" rel="noopener noreferrer">
    <GrCertificate className="inline-block mr-1"/>
    View My Certificates
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;