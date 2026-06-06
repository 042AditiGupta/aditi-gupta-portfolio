import React from "react";

function Card({ title, image, githubLink, liveLink, tech }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0f172a] w-full h-[230px] sm:h-[250px] shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-500">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h2 className="text-white text-xl font-bold">{title}</h2>

        <p className="text-cyan-300 text-xs mt-1 mb-3">{tech}</p>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          {/* GitHub Button */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium"
          >
            GitHub
          </a>

          {/* Live Demo Button */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;