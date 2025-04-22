import { useState, useEffect } from "react";
import { hackathonData } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Hackathons = () => {
  const [imageIndices, setImageIndices] = useState(
    hackathonData.map(() => 0) // Initialize an array of indices for each hackathon
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map((currentIndex, hackathonIndex) => {
          const nextIndex = (currentIndex + 1) % hackathonData[hackathonIndex].images.length;
          return nextIndex;
        })
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hackathons" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Hackathons" sub="🏆 My Hackathon Achievements" />
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          {hackathonData.map((hackathon, hackathonIndex) => (
            <div key={hackathonIndex} className="hackathon-card">
              <div className="image-slider">
                <img
                  src={hackathon.images[imageIndices[hackathonIndex]]}
                  alt={`${hackathon.title} - Image ${imageIndices[hackathonIndex] + 1}`}
                  className="w-full h-100 object-cover rounded-lg"
                />
              </div>
              <h2 className="font-semibold text-2xl mt-5">{hackathon.title}</h2>
              <p className="text-white-50 mt-2">🗓️ {hackathon.date}</p>
              <p className="text-[#839CB5] mt-3">{hackathon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;