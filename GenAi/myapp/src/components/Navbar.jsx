// import React, { useState, useRef, useLayoutEffect } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [activeIndex, setActiveIndex] = useState(0); // Track clicked item
//   const highlightRef = useRef(null); // Reference to the highlight element
//   const navItemsRef = useRef([]); // Reference to the nav items

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/team", label: "Team" },
//     { path: "/projects", label: "Projects" },
//     { path: "/about", label: "About" },
//   ];

//   // FLIP Animation Effect
//   useLayoutEffect(() => {
//     const highlight = highlightRef.current;
//     const activeItem = navItemsRef.current[activeIndex];

//     if (highlight && activeItem) {
//       // Step 1: Get initial position (First)
//       const firstRect = highlight.getBoundingClientRect();
//       const lastRect = activeItem.getBoundingClientRect();

//       // Step 2: Calculate the position difference (Invert)
//       const deltaX = firstRect.left - lastRect.left;

//       // Step 3: Apply inversion using a transform
//       highlight.style.transform = `translateX(${deltaX}px)`;

//       // Trigger reflow to apply the transition
//       requestAnimationFrame(() => {
//         // Step 4: Play the animation
//         highlight.style.transition = "transform 0.3s ease";
//         highlight.style.transform = `translateX(0)`;
//       });
//     }
//   }, [activeIndex]);

//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navchild_0">
//         <h2>Logo</h2>
//       </div>
//       <ul className="navbar_list">
//         {/* Moving Highlight Element */}
//         <div ref={highlightRef} className="active_highlight"></div>

//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             ref={(el) => (navItemsRef.current[index] = el)}
//             className={index === activeIndex ? "active" : ""}
//             onClick={() => handleClick(index)}
//           >
//             <Link to={item.path}>{item.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null); // Track clicked navbar item

  const handleClick = (index) => {
    setActiveIndex(index); // Set active item index on click
  };

  const isActive = (path) => location.pathname === path; // Check if the path matches the current location

  return (
    <nav className="navbar">
      <div className="navchild_0">
        <h2>Logo</h2>
      </div>
      <ul className="navbar_list">
        <li
          className={isActive("/") ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          <Link to="/">Home</Link>
          <div className="left_square"></div>
          <div className="left_circle"></div>
          <div className="right_square"></div>
          <div className="right_circle"></div>
        </li>
        <li
          className={isActive("/projects") ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <Link to="/projects">Projects</Link>
          <div className="left_square"></div>
          <div className="left_circle"></div>
          <div className="right_square"></div>
          <div className="right_circle"></div>
        </li>
        <li
          className={isActive("/aboutus") ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          <Link to="/aboutus">About us</Link>
          <div className="left_square"></div>
          <div className="left_circle"></div>
          <div className="right_square"></div>
          <div className="right_circle"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
