import React from "react";
import Card from "../Card/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import book from "../../assets/book.jpg";
import studyNotion from "../../assets/studyNotion.png";
import chatApp from "../../assets/chatApp.png";
import Text_Sql from "../../assets/Text_Sql.png";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from(".projects-heading", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".project-card", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#Projects",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section
      id="Projects"
      className="w-full flex flex-col items-center justify-center gap-12 px-4 py-20 bg-black overflow-hidden"
    >
      {/* Heading */}
      <h1 className="projects-heading text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="w-full max-w-7xl overflow-x-auto no-scrollbar">
        <div className="flex gap-8 px-4 pb-6">

          {/* Chat App */}
          <div className="project-card min-w-[280px] sm:min-w-[340px]">
            <Card
              title="Real-Time Chat Application"
              tech="React • Node.js • Express • MongoDB • Socket.io"
              image={chatApp}
              githubLink="https://github.com/042AditiGupta/real_time_chat_app"
              liveLink="https://real-time-frontend-app.onrender.com/"
            />
          </div>

          {/* Text-to-SQL */}
          <div className="project-card min-w-[280px] sm:min-w-[340px]">
            <Card
              title="Text-to-SQL Converter"
              tech="Python • React • SQL • Machine Learning"
              image={Text_Sql}
              githubLink="https://github.com/042AditiGupta/Text-to-sql-converter"
              liveLink="https://github.com/042AditiGupta/Text-to-sql-converter"
            />
          </div>

          {/* EduConnect */}
          <div className="project-card min-w-[280px] sm:min-w-[340px]">
            <Card
              title="StudyNotion_Edtech Platform"
              tech="React • Node.js • Express • MongoDB"
              image={studyNotion}
              githubLink="https://github.com/042AditiGupta/Studynotion"
              liveLink="https://studynotion-frontend-updated.vercel.app/"
            />
          </div>

          {/* Book Store */}
          <div className="project-card min-w-[280px] sm:min-w-[340px]">
            <Card
              title="Online Book Store"
              tech="React • Hooks • JavaScript • CSS"
              image={book}
              githubLink="https://github.com/042AditiGupta/BookStore"
              liveLink="https://aditibookstorewebsite.netlify.app/"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;