import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaHackerrank, 
  FaInstagram 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbLetterS } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import ReactLogo from "./assets/skills/react.svg";
import JavaLogo from "./assets/skills/java-svg.svg";
import PostgreSQLLogo from "./assets/skills/mysql.svg";
import AWSLogo from "./assets/skills/awsblack.svg";
import TailWindLogo from "./assets/skills/tailwind.svg";
import PostmanLogo from "./assets/skills/postman.svg";

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = useCallback(() => {
    setIsActive(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const socialLinks = useMemo(() => [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/praveenkumar2k33/", color: "hover:text-tan-dark", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/PraveenKumara2k33", color: "hover:text-stone-600", label: "GitHub" },
    { icon: FaHackerrank, href: "https://www.hackerrank.com/profile/apraveenkumar720", color: "hover:text-green-600", label: "HackerRank" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/apraveenkumar/", color: "hover:text-orange-500", label: "LeetCode" },
    { icon: TbLetterS, href: "https://www.skillrack.com/faces/resume.xhtml?id=320627", color: "hover:text-blue-500", label: "SkillRack" },
    { icon: FaInstagram, href: "https://www.instagram.com/pravxxn_verse/", color: "hover:text-pink-600", label: "Instagram" },
  ], []);

  const orbits = useMemo(() => [
    { logo: ReactLogo, radius: 180, duration: 20, size: 45, label: "React" },
    { logo: JavaLogo, radius: 240, duration: 25, size: 40, label: "Java" },
    { logo: PostgreSQLLogo, radius: 300, duration: 30, size: 35, label: "SQL" },
    { logo: AWSLogo, radius: 360, duration: 35, size: 40, label: "AWS" },
    { logo: TailWindLogo, radius: 420, duration: 40, size: 30, label: "Tailwind" },
    { logo: PostmanLogo, radius: 480, duration: 45, size: 35, label: "Postman" },
  ], []);

  return (
    <section className="relative min-h-screen flex items-center bg-cream pt-20 overflow-hidden">
      {/* Geometric Decorations */}
      <motion.div 
        animate={{ 
          scale: isActive ? 1.05 : 1,
          opacity: isActive ? 0.15 : 0.1
        }}
        className="absolute top-0 right-0 w-1/3 h-full bg-tan -z-10" 
      />
      <motion.div 
        animate={{ 
          x: isActive ? 20 : 0,
          y: isActive ? -20 : 0
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full border border-stone-200/50 -z-10" 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Text */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px w-12 bg-stone-900" />
                 <span className="text-stone-500 font-sans tracking-[0.2em] text-sm uppercase font-semibold">About Me</span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-stone-900 mb-6 uppercase tracking-tighter">
                Praveen <br />
                <span className="italic text-tan">Kumar</span> <br />
                <span className="italic text-tan">A</span>
              </h1>
              
              <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-8">
                I'm <span className="font-bold text-stone-900">PraveenKumar A</span>. A Full Stack Developer and Software Engineer dedicated to architecting scalable, high-performance web applications and desktop solutions that bridge the gap between complex logic and seamless user experience.
              </p>

              {/* Stats - Clean Row */}
              <div className="flex gap-12 border-t border-stone-200 pt-8 mb-8">
                <div>
                  <div className="font-display text-3xl font-bold text-stone-900">01+</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider mt-1">Years</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-stone-900">5+</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider mt-1">Projects</div>
                </div>
              </div>

              {/* Buttons & Socials */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <motion.a
                  href="../img/Praveenkumar_A_Resume.pdf"
                  download="Praveenkumar_A_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-sm shadow-xl hover:bg-stone-800 transition-all duration-300 flex items-center gap-2 group"
                >
                  <HiDownload size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </motion.a>
                
                 <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`w-10 h-10 flex items-center justify-center text-stone-400 transition-colors ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Arched Image With Atomic Orbits */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              {/* Atomic Orbits Container */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {orbits.map((orbit, idx) => (
                  <div
                    key={idx}
                    className="absolute rounded-full border border-stone-200/30"
                    style={{
                      width: orbit.radius * 2,
                      height: orbit.radius * 2,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: orbit.duration,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: orbit.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-xl shadow-soft border border-stone-100 flex items-center justify-center group pointer-events-auto cursor-help"
                        style={{ width: orbit.size, height: orbit.size }}
                      >
                        <img 
                          src={orbit.logo} 
                          alt={orbit.label} 
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" 
                        />
                        {/* Tooltip */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap z-30">
                          {orbit.label}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Main Arch Image */}
              <div className="relative z-20 rounded-t-full rounded-b-[2rem] overflow-hidden border-8 border-white shadow-soft-xl w-full max-w-[320px] mx-auto aspect-[3/4] bg-white">
                <img 
                  src="../img/Praveenkumar_2.jpeg" 
                  alt="PraveenKumar" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>

              {/* Decorative Circle Behind */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-tan rounded-full mix-blend-multiply opacity-20 z-0 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply opacity-50 z-0 blur-2xl" />

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 -left-12 bg-white p-5 rounded-2xl shadow-xl z-30 hidden sm:block min-w-[150px] border border-stone-50"
              >
                <p className="font-display text-base font-bold text-stone-900 leading-tight">
                  Open for <br />
                  <span className="text-tan-dark">SDE Roles</span>
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;