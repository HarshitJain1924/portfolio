import React from 'react';
import TitleHeader from '../components/TitleHeader';

const Resume = () => {
  return (
    <section id="resume" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 flex flex-col items-center">
        <TitleHeader
          title="My Resume"
          sub="📄 Check out my professional background"
        />
        <div className="mt-16 w-full max-w-4xl">
          <img
            src="/resume-1.png"
            alt="My Resume"
            className="w-full h-auto shadow-xl rounded-lg"
          />
        </div>
        <div className="mt-10 flex gap-5">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Download PDF
        </a>
      </div>
      </div>

    </section>
  );
};

export default Resume;
