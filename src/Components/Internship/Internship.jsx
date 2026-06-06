import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Internship() {
  const internships = [
    {
      role: "Web Developer Intern",
      company: "Vlenzor Technologies Pvt. Ltd.",
      duration: "June 2025 – September 2025",
      points: [
        "Worked on a live production website by developing responsive and user-friendly frontend interfaces.",
        "Integrated REST APIs with frontend modules and improved frontend-backend communication.",
        "Debugged UI issues, enhanced application performance, and ensured cross-device compatibility.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Dyizan",
      duration: "March 2025 – June 2025",
      points: [
        "Built reusable React.js components and improved application routing flow.",
        "Fixed UI-related bugs and improved responsiveness across different screen sizes.",
        "Supported testing and iterative improvements to enhance overall user experience.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "EY Global Delivery Services & AICTE",
      duration: "December 2024 – January 2025",
      points: [
        "Built full-stack web application modules using MERN stack concepts.",
        "Developed and tested REST APIs while improving understanding of frontend-backend integration.",
        "Worked on project workflows, debugging, and collaborative development practices.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Bharat Intern",
      duration: "March 2024 – April 2024",
      points: [
        "Designed responsive web pages using HTML, CSS, and JavaScript.",
        "Built a personal portfolio and Netflix homepage clone with modern UI design.",
        "Improved cross-browser compatibility and frontend layout consistency.",
      ],
    },
  ];

  return (
    <section
      id="internship"
      className="w-full min-h-screen px-4 md:px-6 py-16 flex flex-col items-center bg-black text-white"
    >
      {/* Clean, high-contrast section title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-12 text-center border-b-4 border-emerald-500 pb-3">
        Internship Experience
      </h2>

      {/* Grid/Flex Container layout to show everything seamlessly */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0b1120] p-5 md:p-6 rounded-xl border border-emerald-500/20 shadow-md hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {item.role}
                </h3>
                {/* Changed pink to an energetic red accent for bold contrast */}
                <p className="text-red-500 font-bold text-sm md:text-base mt-0.5">
                  {item.company}
                </p>
              </div>

              <p className="flex items-center text-xs md:text-sm text-gray-400 whitespace-nowrap bg-gray-900/60 px-3 py-1 rounded-full border border-gray-800 self-start sm:self-auto">
                <FaCalendarAlt className="mr-2 text-emerald-400" />
                {item.duration}
              </p>
            </div>

            {/* Slightly reduced top margin and spacing to keep the cards perfectly compact */}
            <ul className="list-disc pl-5 mt-4 text-gray-300 space-y-1.5 text-xs md:text-sm leading-relaxed">
              {item.points.map((point, idx) => (
                <li
                  key={idx}
                  className="hover:text-emerald-400 transition duration-150 pl-1"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Internship;