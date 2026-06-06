
import React from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import { HiCodeBracket, HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import { TbRocket } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";

function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".line1", {
      y: 80,
      duration: 0.6,
      opacity: 0,
    });

    tl.from(".line2", {
      y: 80,
      duration: 0.6,
      opacity: 0,
    });

    tl.from(".line3", {
      y: 80,
      duration: 0.6,
      opacity: 0,
    });

    tl.from(".description", {
      y: 40,
      duration: 0.5,
      opacity: 0,
    });

    tl.from(".stats", {
      y: 30,
      duration: 0.5,
      opacity: 0,
    });

    tl.from(".buttons", {
      y: 30,
      duration: 0.5,
      opacity: 0,
    });
  }, []);

  return (
    <div
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-20"
    >
      <div className="max-w-6xl w-full text-white">
        <div className="text-[2vmax]">

          {/* Intro */}
          <div className="line1 text-[0.8em]">
            I'm
          </div>

          {/* Name */}
          <div className="line2 text-[2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Aditi Gupta
          </div>

          {/* Typing Animation */}
          <div className="line3 text-white">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Software Developer",
                1500,
                "MERN Stack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="description mt-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-5xl">
            Aspiring Software Engineer with hands-on experience in full-stack
            web development and strong problem-solving skills. Skilled in
            React.js, Node.js, Express.js, MongoDB, Java, SQL, and REST API
            integration. Experienced in building responsive web applications
            and collaborating in team environments through internships and
            projects while exploring Data Analytics and Machine Learning.
          </p>

          {/* Stats Section */}
          <div className="stats flex flex-wrap gap-8 mt-8 text-lg md:text-2xl">

            <div className="flex items-center gap-3 hover:text-[#7ad7ea] transition-all duration-300">
              <HiCodeBracket className="text-[#7ad7ea] text-3xl" />
              <span>350+ DSA</span>
            </div>

            <div className="flex items-center gap-3 hover:text-[#7ad7ea] transition-all duration-300">
              <TbRocket className="text-[#7ad7ea] text-3xl" />
              <span>4 Projects</span>
            </div>

            <div className="flex items-center gap-3 hover:text-[#7ad7ea] transition-all duration-300">
              <HiBriefcase className="text-[#7ad7ea] text-3xl" />
              <span>4 Internships</span>
            </div>

            <div className="flex items-center gap-3 hover:text-[#7ad7ea] transition-all duration-300">
              <HiAcademicCap className="text-[#7ad7ea] text-3xl" />
              <span>9.10 CGPA</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="buttons flex flex-wrap gap-5 mt-12">

            <a
              href="https://drive.google.com/file/d/1gOMJ7h3-talX844kXCbpFd-xGoyyXW47/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#7ad7ea] text-black font-semibold border border-[#7ad7ea] hover:bg-transparent hover:text-[#7ad7ea] transition-all duration-300"
            >
              <FaFileAlt />
              View Resume
            </a>

            <Link to="/internships">
              <button className="px-6 py-3 rounded-lg bg-[#7ad7ea] text-black font-semibold border border-[#7ad7ea] hover:bg-transparent hover:text-[#7ad7ea] transition-all duration-300 cursor-pointer">
                View Internship Experience
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

