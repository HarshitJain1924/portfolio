import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GlowCard from "../components/GlowCard";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons, skillSet } from "../constants";

const TechStackAndSkills = () => {
  const [activeFilter, setActiveFilter] = useState("frontend");

  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  const renderSkills = () => {
    const skills = skillSet[activeFilter];
    return skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center"
      >
        <img
          src={skill.imgPath}
          alt={skill.name}
          className="w-16 h-16 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold text-white">{skill.name}</h2>
      </div>
    ));
  };

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Additional Skills</h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "frontend" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setActiveFilter("frontend")}
            >
              Frontend
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "backend" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setActiveFilter("backend")}
            >
              Backend
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "coding" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setActiveFilter("coding")}
            >
              Coding
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeFilter === "tools" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400"
              }`}
              onClick={() => setActiveFilter("tools")}
            >
              Tools
            </button>
          </div>

          {/* Filtered Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {renderSkills().map((skill, index) => (
              <GlowCard key={index} index={index} card={{ review: skill.props.children[1].props.children }}>
                {skill}
              </GlowCard>
            ))}
          </div>

          {/* Responsive Adjustments */}
          <style jsx>{`
            @media (max-width: 640px) {
              .grid-cols-1 {
                grid-template-columns: repeat(1, minmax(0, 1fr));
              }
            }

            @media (min-width: 641px) and (max-width: 768px) {
              .grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
            }

            @media (min-width: 769px) and (max-width: 1024px) {
              .grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }

            @media (min-width: 1025px) {
              .grid-cols-4 {
                grid-template-columns: repeat(4, minmax(0, 1fr));
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default TechStackAndSkills;
