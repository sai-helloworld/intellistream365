// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Card from "./Card.jsx";
// import Team from "./Team.jsx";
// function Navbar() {
//   const location = useLocation();
//   const [activeIndex, setActiveIndex] = useState(null); // Track clicked navbar item

//   const handleClick = (index) => {
//     setActiveIndex(index); // Set active item index on click
//   };

//   const isActive = (index) => activeIndex === index; // Check if item is active

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navchild_0">
//           <h2>Logo</h2>
//         </div>
//         <ul className="navbar_list">
//           <li
//             className={isActive(0) ? "active" : ""}
//             onClick={() => handleClick(0)}
//           >
//             <Link to="/">Home</Link>
//             <div className="left_square"></div>
//             <div className="left_circle"></div>
//             <div className="right_square"></div>
//             <div className="right_circle"></div>
//           </li>
//           <li
//             className={isActive(1) ? "active" : ""}
//             onClick={() => handleClick(1)}
//           >
//             <Link to="/team">Team</Link>
//             <div className="left_square"></div>
//             <div className="left_circle"></div>
//             <div className="right_square"></div>
//             <div className="right_circle"></div>
//           </li>
//           <li
//             className={isActive(2) ? "active" : ""}
//             onClick={() => handleClick(2)}
//           >
//             <Link to="/projects">Projects</Link>
//             <div className="left_square"></div>
//             <div className="left_circle"></div>
//             <div className="right_square"></div>
//             <div className="right_circle"></div>
//           </li>
//           <li
//             className={isActive(3) ? "active" : ""}
//             onClick={() => handleClick(3)}
//           >
//             <Link to="/about">About</Link>
//             <div className="left_square"></div>
//             <div className="left_circle"></div>
//             <div className="right_square"></div>
//             <div className="right_circle"></div>
//           </li>
//         </ul>
//       </nav>
//       <Team />
//       {/* <Card /> */}
//     </>
//   );
// }

// export default Navbar;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Card from "./components/Card.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Card />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
