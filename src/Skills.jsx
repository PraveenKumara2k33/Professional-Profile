import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import HtmlLogo from "./assets/skills/html-5.svg";
import CssLogo from "./assets/skills/css3.svg";
import BootstrapLogo from "./assets/skills/bootstrap.svg";
import TailWindLogo from "./assets/skills/tailwind.svg";
import JavascriptLogo from "./assets/skills/javascript-svg.svg";
import ReactLogo from "./assets/skills/react.svg";
import ReduxLogo from "./assets/skills/redux.svg";
import AngularLogo from "./assets/skills/angular.svg";
import JavaLogo from "./assets/skills/java-svg.svg";
import ServletLogo from "./assets/skills/servlet.svg";
import JspLogo from "./assets/skills/jsp.svg";
import SpringBootLogo from "./assets/skills/spring-boot.svg";
import AWSLogo from "./assets/skills/awsblack.svg";
import SQLLogo from "./assets/skills/mysql.svg";
import NodeLogo from "./assets/skills/nodejs.svg";
import PythonLogo from "./assets/skills/python.svg";
import FastAPILogo from "./assets/skills/fastapi.svg";
import OracleLogo from "./assets/skills/oracle.svg";
import PostgresLogo from "./assets/skills/postgresql.svg";
import VscodeLogo from "./assets/skills/vscode3.svg";
import EclipseLogo from "./assets/skills/eclipse.svg";
import SaasLogo from "./assets/skills/light-sass.svg";
import GitLogo from "./assets/skills/git-merge.svg";
import GitHubLogo from "./assets/skills/github.svg";
import WordpressLogo from "./assets/skills/wordpress.svg";
import DSALogo from "./assets/skills/DSA.svg";
import PostManAPILogo from "./assets/skills/postman.svg";
import "./skills.css";
import SolarSystem from "./components/SolarSystem";

const Skills = () => {
  const [viewMode, setViewMode] = useState('list');
  const skills = useMemo(() => [
    { logo: HtmlLogo, name: "HTML5" },
    { logo: CssLogo, name: "CSS3" },
    { logo: SaasLogo, name: "SCSS" },
    { logo: BootstrapLogo, name: "Bootstrap" },
    { logo: TailWindLogo, name: "Tailwind" },
    { logo: JavascriptLogo, name: "JavaScript" },
    { logo: ReactLogo, name: "React.js" },
    { logo: ReduxLogo, name: "Redux" },
    { logo: AngularLogo, name: "Angular" },
    { logo: NodeLogo, name: "Node.js" },
    { logo: JavaLogo, name: "Java" },
    { logo: ServletLogo, name: "Servlet" },
    { logo: JspLogo, name: "JSP" },
    { logo: SpringBootLogo, name: "Spring Boot" },
    { logo: PythonLogo, name: "Python" },
    { logo: FastAPILogo, name: "FastAPI" },
    { logo: AWSLogo, name: "AWS" },
    { logo: SQLLogo, name: "MySQL" },
    { logo: OracleLogo, name: "Oracle" },
    { logo: PostgresLogo, name: "PostgreSQL" },
    { logo: VscodeLogo, name: "VS Code" },
    { logo: EclipseLogo, name: "Eclipse" },
    { logo: GitLogo, name: "Git" },
    { logo: GitHubLogo, name: "GitHub" },
    { logo: WordpressLogo, name: "WordPress" },
    { logo: DSALogo, name: "Data Structures" },
    { logo: PostManAPILogo, name: "Postman API" },    
  ], []);

  const stats = useMemo(() => [
    { value: "20+", label: "Technologies" },
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Projects Built" },
    { value: "100%", label: "Satisfaction" },
  ], []);

  const SkillItem = ({ skill }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
      <div className="skill-item group/item">
        <div className="flex items-center gap-4 w-full">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative">
            {!isLoaded && <div className="absolute inset-0 skeleton rounded-lg" />}
            <img
              src={skill.logo}
              alt={skill.name}
              onLoad={() => setIsLoaded(true)}
              className={`skill-logo group-hover/item:scale-110 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <span className="group-hover/item:text-tan-dark transition-colors font-semibold text-stone-600">
            {skill.name}
          </span>
        </div>
      </div>
    );
  };
  SkillItem.propTypes = {
    skill: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <section id="skills" className="relative min-h-screen bg-stone-50 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-tan/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-tan/10 border border-tan/20 text-tan-dark text-sm font-semibold mb-4 uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-stone-900 tracking-tighter leading-[1.1]">
            Skills & <span className="italic text-tan">Technologies</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the technologies and tools I master to build scalable solutions.
          </p>
        </motion.div>

{/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full border border-stone-200 shadow-sm inline-flex relative">
             <div 
               className={`absolute top-1 bottom-1 w-1/2 bg-stone-900 rounded-full transition-all duration-300 ease-spring ${viewMode === 'list' ? 'left-1' : 'left-[calc(50%-4px)] translate-x-full'}`}
               style={{ transform: viewMode === 'solar' ? 'translateX(0)' : 'translateX(0)' }} // Correction for simpler logic
             />
             <motion.div 
               className={`absolute top-1 bottom-1 rounded-full bg-stone-900 transition-all duration-300`}
               initial={false}
               animate={{ 
                 x: viewMode === 'list' ? 0 : '100%',
                 width: '50%' 
               }}
             />
             
            <button
              onClick={() => setViewMode('list')}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${viewMode === 'list' ? 'text-white' : 'text-stone-500 hover:text-stone-900'}`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('solar')}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${viewMode === 'solar' ? 'text-white' : 'text-stone-500 hover:text-stone-900'}`}
            >
              Solar View
            </button>
          </div>
        </div>

        {/* Skewed Scrolling Skills Section or Solar System */}
        <div className="min-h-[600px] flex items-center justify-center">
            {viewMode === 'list' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="skills-container px-4 w-full"
                >
                  <div className="skills-skew-wrapper max-w-6xl mx-auto shadow-inner">
                    <div className="skills-scroll no-scrollbar">
                      <div className="skills-grid animate-scroll-vertical">
                        {/* Quadruple the list for a truly seamless long scroll */}
                        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                          <SkillItem key={index} skill={skill} index={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <SolarSystem skills={skills} />
                </motion.div>
            )}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group text-center">
                <div className="text-4xl font-display font-bold text-stone-900 mb-2 leading-none tracking-tighter group-hover:text-tan-dark transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
