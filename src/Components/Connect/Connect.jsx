import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";

function Connect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".connect-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".connect-icons a", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="connect"
      className="w-full min-h-[50vh] flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <h2 className="connect-heading text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-8 select-none">
        Let's Connect
      </h2>
      <div className="p-10 font-medium text-center max-w-xl">
        Ready to collaborate on innovative projects or discuss opportunities? Let's build the future together!
      </div>
      <div className="connect-icons flex items-center justify-center gap-12 text-4xl mt-6">
        {[
          {
            href: "https://www.linkedin.com/in/aditi-gupta-7b3918263",
            label: "LinkedIn",
            icon: <FaLinkedin color="#0A66C2" />,
          },
          {
            href: "https://github.com/042AditiGupta",
            label: "GitHub",
            icon: <FaGithub color="#fff" />,
          },
          {
            href: "https://leetcode.com/u/AditiGupta_002_002/",
            label: "LeetCode",
            icon: <SiLeetcode color="#FFA116" />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-transform duration-300 hover:scale-110 hover:text-opacity-80 flex items-center"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Connect;