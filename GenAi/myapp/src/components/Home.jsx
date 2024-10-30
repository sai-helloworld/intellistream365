// import { useEffect } from "react";
// import courses from "../assets/courses.png";
// import internship from "../assets/internship.png";
// import api from "../assets/api.png";
// import projects from "../assets/projects.png";
// import incubation from "../assets/incubation.png";

// function Home() {
//   useEffect(() => {
//     let cards = document.querySelectorAll(".services");
//     cards.forEach((card) => {
//       card.onmousemove = function (e) {
//         let x = e.pageX - card.offsetLeft;
//         let y = e.pageY - card.offsetTop;
//         card.style.setProperty("--a", x + "px");
//         card.style.setProperty("--b", y + "px");
//       };
//     });
//   }, []);
//   return (
//     <>
//       <div className="servicesContainer">
//         <div className="servicesHeadingGroup">
//           <p className="servicesHeading subHeadings">Our Services</p>
//           <p className="servicesHeading2 subHeadings">
//             We provide the cutting edge servcies to full fill your needs.
//           </p>
//         </div>
//         <div className="services">
//           <div className="servicesCard  ">
//             <img src={courses} alt="service1" />
//             <p className="servicesDesc">Courses</p>
//           </div>
//           <div className="servicesCard   ">
//             <img src={internship} alt="service1" />
//             <p className="servicesDesc">Internships</p>
//           </div>
//           <div className="servicesCard  ">
//             <img src={projects} alt="service1" />
//             <p className="servicesDesc">Projects</p>
//           </div>
//           <div className="servicesCard  ">
//             <img src={incubation} alt="service1" />
//             <p className="servicesDesc">Incubation</p>
//           </div>
//           <div className="servicesCard   ">
//             <img src={api} alt="service1" />
//             <p className="servicesDesc">API's</p>
//           </div>
//         </div>
//       </div>

//       <div className="contactSection">
//         <p className="contactSection_1 servicesHeading subHeadings">
//           We are the Leading Platform of AI's
//         </p>
//         <p className="contactSection_2 servicesHeading2 subHeadings">
//           Want to Enroll in a course?
//         </p>
//         <div className="contactSectionInputContainer">
//           <div>
//             <input
//               type="email"
//               name="useremail"
//               id="userEmail"
//               placeholder="example@gmail.com"
//             />
//             <input
//               type="text"
//               name="emailSubject"
//               id="emailSubject"
//               placeholder="Subject"
//             />
//           </div>
//           <button className="sendEmail">Send Email</button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Home;

import { useEffect } from "react";
import courses from "../assets/courses.png";
import internship from "../assets/internship.png";
import api from "../assets/api.png";
import projects from "../assets/projects.png";
import incubation from "../assets/incubation.png";
import TypingEffect from "./TypingEffect"; // Import TypingEffect component

function Home() {
  useEffect(() => {
    let cards = document.querySelectorAll(".services");
    cards.forEach((card) => {
      card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;
        card.style.setProperty("--a", x + "px");
        card.style.setProperty("--b", y + "px");
      };
    });
  }, []);

  return (
    <>
      <div className="servicesContainer">
        <div className="servicesHeadingGroup">
          <p className="servicesHeading subHeadings">Our Services</p>
          <p className="servicesHeading2 subHeadings">
            We provide the cutting edge services to fulfill your needs.
          </p>
        </div>
        <div className="services">
          <div className="servicesCard">
            <img src={courses} alt="service1" />
            <p className="servicesDesc">Courses</p>
          </div>
          <div className="servicesCard">
            <img src={internship} alt="service1" />
            <p className="servicesDesc">Internships</p>
          </div>
          <div className="servicesCard">
            <img src={projects} alt="service1" />
            <p className="servicesDesc">Projects</p>
          </div>
          <div className="servicesCard">
            <img src={incubation} alt="service1" />
            <p className="servicesDesc">Incubation</p>
          </div>
          <div className="servicesCard">
            <img src={api} alt="service1" />
            <p className="servicesDesc">API's</p>
          </div>
        </div>
      </div>

      <div className="contactSection">
        <p className="contactSection_1 servicesHeading subHeadings">
          We are the Leading Platform of AI's
        </p>
        <TypingEffect /> {/* Use TypingEffect component here */}
        <div className="contactSectionInputContainer">
          <div>
            <input
              type="email"
              name="useremail"
              id="userEmail"
              placeholder="example@gmail.com"
            />
            <input
              type="text"
              name="emailSubject"
              id="emailSubject"
              placeholder="Subject"
            />
          </div>
          <button className="sendEmail">Contact</button>
        </div>
      </div>
    </>
  );
}

export default Home;
