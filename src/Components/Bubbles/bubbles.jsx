import React from "react";

function BubblesBackground() {
  return (
    <div className="bubbles-container fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="bubble" />
      ))}
    </div>
  );
}

export default BubblesBackground; 
