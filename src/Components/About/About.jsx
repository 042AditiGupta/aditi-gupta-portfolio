import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const skills = {
    frontend: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "SQL", "REST APIs", "Socket.io"],
    languages: ["Java", "Python","Javascript"],
    dsml: ["Machine Learning", "Artificial Intelligence", "NumPy", "Pandas", "Excel"],
    tools: ["Git", "GitHub", "Postman", "Data Structures & Algorithms"],

  };

  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
}
})
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
}
})
      gsap.from(".aboutdetails h1",{
      y:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
}
})
      gsap.from(".aboutdetails li",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      start:"top 60%",
      end:"top 30%"
}
})
});

  return (
    <div
      id="About"
      className="flex justify-center items-center bg-black min-h-screen px-6 py-20"
    >
      <div className="flex md:gap-10 items-start max-w-6xl">

        {/* Timeline */}
        <div className="circle-line flex flex-col items-center justify-center">
          <div className="circle rounded-full w-[60px] h-[60px] bg-[#7ad7ea] shadow-[4px_4px_20px_#329bbd]"></div>
          <div className="line w-[2px] h-[150px] bg-white"></div>
          <div className="circle rounded-full w-[60px] h-[60px] bg-[#7ad7ea] shadow-[4px_4px_20px_#329bbd]"></div>
          <div className="line w-[2px] h-[150px] bg-white"></div>
          <div className="circle rounded-full w-[60px] h-[60px] bg-[#7ad7ea] shadow-[4px_4px_20px_#329bbd]"></div>
          <div className="line w-[2px] h-[150px] bg-white"></div>
          <div className="circle rounded-full w-[60px] h-[60px] bg-[#7ad7ea] shadow-[4px_4px_20px_#329bbd]"></div>
          <div className="line w-[2px] h-[150px] bg-white"></div>
           <div className="circle rounded-full w-[60px] h-[60px] bg-[#7ad7ea] shadow-[4px_4px_20px_#329bbd]"></div>
        </div>

        <div className="aboutdetails flex flex-col gap-12 text-white pl-6">

          {/* Personal Info */}
          <div className="personalInfo">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold mb-3">
              Personal Info
            </h1>

            <ul className="space-y-2">
              <li><span className="text-[#7ad7ea] font-medium">Name:</span> Aditi Gupta</li>
              <li><span className="text-[#7ad7ea] font-medium">Email:</span> kumari18aditi@gmail.com</li>
              <li><span className="text-[#7ad7ea] font-medium">Languages:</span> English, Hindi</li>
              <li>
                <span className="text-[#7ad7ea] font-medium">GitHub:</span>{" "}
                <a href="https://github.com/042AditiGupta" target="_blank" className="text-blue-400 underline">
                  042AditiGupta
                </a>
              </li>
              <li>
                <span className="text-[#7ad7ea] font-medium">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/aditi-gupta-002ad" target="_blank" className="text-blue-400 underline">
                  Aditi Gupta
                </a>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="Education">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold mb-3">
              Education
            </h1>

            <ul className="space-y-2">
              <li><span className="text-[#7ad7ea] font-medium">Degree:</span> B.Tech</li>
              <li><span className="text-[#7ad7ea] font-medium">Branch:</span> CSE</li>
              <li><span className="text-[#7ad7ea] font-medium">CGPA:</span> 9.10</li>
              <li><span className="text-[#7ad7ea] font-medium">University:</span> Amity University, Ranchi</li>
            </ul>
          </div>

          {/* ✅ UPDATED SKILLS SECTION (CENTERED + GROUPED) */}
          <div className="Skill w-full max-w-[750px]">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold mb-4">
              Technical Skills
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Frontend */}
              <div className="bg-[#101827] p-3 rounded-lg">
                <h2 className="text-cyan-300 mb-2 font-semibold">Frontend</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, i) => (
                    <span key={i} className="skill-tag px-3 py-1 text-sm rounded-full bg-black border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-[#101827] p-3 rounded-lg">
                <h2 className="text-cyan-300 mb-2 font-semibold">Backend</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, i) => (
                    <span key={i} className="skill-tag px-3 py-1 text-sm rounded-full bg-black border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programming */}
              <div className="bg-[#101827] p-3 rounded-lg">
                <h2 className="text-cyan-300 mb-2 font-semibold">Programming</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <span key={i} className="skill-tag px-3 py-1 text-sm rounded-full bg-black border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DS/ML */}
              <div className="bg-[#101827] p-3 rounded-lg">
                <h2 className="text-cyan-300 mb-2 font-semibold">Data Science / ML</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.dsml.map((skill, i) => (
                    <span key={i} className="skill-tag px-3 py-1 text-sm rounded-full bg-black border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-[#101827] p-3 rounded-lg md:col-span-2">
                <h2 className="text-cyan-300 mb-2 font-semibold">Tools & Others</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="skill-tag px-3 py-1 text-sm rounded-full bg-black border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;