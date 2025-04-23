import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from '../components/TitleHeader';
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 flex flex-col items-center">
        <TitleHeader
          title="My Projects"
          sub="🚀 Explore some of my featured work"
        />
        <div id="work" ref={sectionRef} className="app-showcase">
          <div className="w-full">
            <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper w-full md:w-[600px] mx-auto">
              <img
                src="/images/project1.png"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

                <div className="text-content mt-0">
                  <h2>
                    AI PDF Note Taker - Your AI-Powered PDF Assistant
                  </h2>
                  <p className="text-white-50 md:text-xl">
                    AI PDF Note Taker is a web application that utilizes the power of Gemini model to extract and summarize information from PDF documents. It allows users to upload PDF files, ask questions about the content, and receive accurate answers in real-time.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://ai-pdf-note-taker-ao6e.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                      <VscLiveShare className="inline-block mr-2" />
                      Live Project
                    </a>
                    <a
                      href="https://github.com/HarshitJain1924/AI-PDF-Note-Taker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
                    >
                      <FaGithub className="inline-block mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={libraryRef}>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src="/images/project2.png"
                      alt="Imaginx App Interface"
                    />
                  </div>
                  <h2>ImaginX  –  AI Image Generation Platform</h2>
                  <div className="mt-4 flex gap-4">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                      <VscLiveShare className="inline-block mr-2" />
                      Live Project
                    </a>
                    <a
                      href="https://github.com/HarshitJain1924/Imaginx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
                    >
                      <FaGithub className="inline-block mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="project" ref={ycDirectoryRef}>
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <img src="/images/project3.png" alt="YC Directory App" />
                  </div>
                  <h2>Grilli - A Restaurant Website</h2>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://harshitjain1924.github.io/grilli-restaurant-website/Grilli/index"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                      <VscLiveShare className="inline-block mr-2" />
                      Live Project
                    </a>
                    <a
                      href="https://github.com/HarshitJain1924/grilli-restaurant-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
                    >
                      <FaGithub className="inline-block mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
