// import { useEffect } from "react";
// import "./CognizantPage.css";

// const InternpePage = () => {
//   useEffect(() => {
//     const links = document.querySelectorAll(
//       ".cognizant-page nav > .hover-this"
//     );
//     const cursor = document.querySelector(".cognizant-page .cursor");

//     const animateit = function (e) {
//       const span = this.querySelector("span");
//       const { offsetX: x, offsetY: y } = e;
//       const { offsetWidth: width, offsetHeight: height } = this;

//       const move = 25;
//       const xMove = (x / width) * (move * 2) - move;
//       const yMove = (y / height) * (move * 2) - move;

//       span.style.transform = `translate(${xMove}px, ${yMove}px)`;

//       if (e.type === "mouseleave") span.style.transform = "";
//     };

//     const editCursor = (e) => {
//       const { clientX: x, clientY: y } = e;
//       cursor.style.left = `${x}px`;
//       cursor.style.top = `${y}px`;
//     };

//     links.forEach((b) => b.addEventListener("mousemove", animateit));
//     links.forEach((b) => b.addEventListener("mouseleave", animateit));
//     window.addEventListener("mousemove", editCursor);

//     return () => {
//       links.forEach((b) => b.removeEventListener("mousemove", animateit));
//       links.forEach((b) => b.removeEventListener("mouseleave", animateit));
//       window.removeEventListener("mousemove", editCursor);
//     };
//   }, []);

//   return (
//     <div className="cognizant-page nav-wrapper">
//       <div className="navid">
//         <div className="lg:w-1/2 content-center">
//           <h1 className="hover-this lg:text-4xl text-2xl">Internpe</h1>
//           <h3 className="hover-this lg:text-2xl text-xl">
//             Web Development Intern
//           </h3>
//           <p className="hover-this ">Duration: Aug 2023 - Sep 2023 | Remote</p>
//         </div>
//         <div>
//           <div className="text-start">
//             <p className="hover-this py-2">
//               <span className="spanh1">Skill Enhancement</span> <br />
//               <span className="spanh2">
//                 Led a focused effort to improve proficiency in HTML, CSS, and
//                 JavaScript by 25% through hands-on project development.
//               </span>
//             </p>
//             <p className="hover-this py-2">
//               <span className="spanh1">Strategic Collaboration</span>
//               <br />
//               <span className="spanh2">
//                 Worked directly with industry experts on web projects, applying
//                 analytical skills and clear communication to achieve a 40%
//                 impact on project outcomes.
//               </span>
//             </p>
//             <p className="hover-this py-2">
//               <span className="spanh1">Independent Project Development</span>
//               <br />
//               <span className="spanh2">
//                 Independently created four mini-projects: a ToDo list,
//                 calculator, e-commerce website, and Connect Four points game,
//                 enhancing both design and functionality.
//               </span>
//             </p>
//             <p className="hover-this py-2">
//               <span className="spanh1">Analytics & Communication</span>
//               <br />
//               <span className="spanh2">
//                 Applied strong communication and analytical techniques to drive
//                 measurable improvements in project performance, contributing to
//                 overall web development growth.
//               </span>
//             </p>
//             <div className="cursor"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternpePage;
import ExperienceLayout from "./ExperienceLayout";
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  BarChart3,
  Code,
  Smartphone
} from "lucide-react";

const InternpePage = () => {
  const achievements = [
    {
      title: "Skill Enhancement",
      description: "Led focused effort to improve proficiency in HTML, CSS, and JavaScript by 25% through intensive hands-on project development and peer code reviews.",
      icon: Rocket
    },
    {
      title: "Strategic Collaboration",
      description: "Worked directly with industry experts on live web projects, applying analytical skills and clear communication to drive 40% improvement in project delivery timelines.",
      icon: Target
    },
    {
      title: "Independent Project Development",
      description: "Built four production-ready mini-projects: Interactive ToDo List with local storage, Functional Calculator, Responsive E-commerce landing page, and Connect Four game with AI opponent.",
      icon: Code
    },
    {
      title: "Responsive Design Mastery",
      description: "Implemented mobile-first design principles across all projects, ensuring seamless user experience across device sizes from mobile to desktop.",
      icon: Smartphone
    },
    {
      title: "Analytics & Communication",
      description: "Applied data-driven decision making and stakeholder communication to identify bottlenecks, resulting in measurable performance improvements in web applications.",
      icon: BarChart3
    },
    {
      title: "Problem Solving",
      description: "Developed strong debugging skills and algorithmic thinking through daily coding challenges and real-world problem scenarios.",
      icon: Lightbulb
    }
  ];

  const technologies = [
    "HTML5", "CSS3", "JavaScript", "LocalStorage", 
    "DOM Manipulation", "Responsive Design", "Git", "Bootstrap"
  ];

  return (
    <ExperienceLayout
      companyName="Internpe"
      role="Web Development Intern"
      duration="August 2023 - September 2023"
      location="Remote"
      type="work"
      technologies={technologies}
      achievements={achievements}
    />
  );
};

export default InternpePage;