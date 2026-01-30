import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Zap,
  ArrowUpRight,
  Github,
  ExternalLink
} from "lucide-react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

const ImageWithSkeleton = ({ src, alt, className, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!isLoaded && <div className="absolute inset-0 skeleton" />}
      <motion.img
        src={src}
        alt={alt}
        style={style}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

ImageWithSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.hover-target')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
    >
      <div className={`w-8 h-8 rounded-full border-2 ${isHovering ? "border-tan bg-tan/10" : "border-stone-400"} transition-colors duration-300`} />
    </motion.div>
  );
};

// Custom Cursor removed for simplicity or I can keep it if user likes. 
// Actually I'll keep it as it adds mystery/premium feel. 
// But I'll fix the unused FeatureCard.

const ProjectLayout = ({ 
  title, 
  category, 
  duration, 
  teamSize,
  overview,
  features = [],
  technologies = [],
  images = [],
  links = {},
}) => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  // Parallax transform for the featured image
  const parallaxY = useTransform(scrollYProgress, [0.1, 0.4], [0, -50]);

  // Ensure page starts at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  // Project navigation logic
  const projectList = [
    { title: "Restaurant Management System", link: "/Restaurant" },
    { title: "Web-Based Chat Application", link: "/ChatApplication" },
    { title: "WordPress AI Integration", link: "/WordPress" },
    { title: "E-Commerce Platform", link: "/ECommerce" },
    { title: "Electricity Billing System", link: "/EBill" }
  ];
  const currentIndex = projectList.findIndex(p => p.title === title);
  const nextProject = projectList[(currentIndex + 1) % projectList.length];

  return (
    <div className="min-h-screen bg-cream text-stone-900 selection:bg-tan/30 overflow-x-hidden">
      <CustomCursor />
      
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50 px-0 py-0" />

      {/* Internal Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-tan z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-tan/10 border border-tan/20 mb-8 text-[10px] font-bold uppercase tracking-[0.5em] text-tan-dark">
              {category}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] mb-12 text-stone-900 tracking-tighter">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "italic text-tan-dark" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Project Links */}
            <div className="flex justify-center gap-4 mb-16">
              {links.github && (
                <a 
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-200 text-sm font-bold text-stone-600 hover:text-stone-900 transition-colors group"
                >
                  <Github size={18} className="group-hover:rotate-12 transition-transform" />
                  Code
                </a>
              )}
              {links.live && (
                <a 
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white text-sm font-bold hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200"
                >
                  Live
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
               <div className="flex flex-col items-center gap-2">
                 <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Duration</span>
                 <span className="text-sm font-display font-bold text-stone-900">{duration}</span>
               </div>
               <div className="w-px h-10 bg-stone-200 hidden md:block" />
               <div className="flex flex-col items-center gap-2">
                 <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Team</span>
                 <span className="text-sm font-display font-bold text-stone-900">{teamSize}</span>
               </div>
               <div className="w-px h-10 bg-stone-200 hidden md:block" />
               <div className="flex flex-col items-center gap-2">
                 <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Status</span>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-sm font-display font-bold text-stone-900">Completed</span>
                 </div>
               </div>
            </div>

            {/* Horizontal Tech Highlights */}
            <div className="max-w-4xl mx-auto overflow-x-auto no-scrollbar pb-4">
              <div className="flex justify-center gap-3 min-w-max px-8">
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="px-5 py-2 rounded-full bg-white border border-stone-200 text-[11px] font-bold text-stone-500 uppercase tracking-widest hover:border-tan/30 hover:text-tan-dark transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ambient Blurred Shapes */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-tan rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-stone-200 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-stone-200 flex justify-center pt-2">
            <div className="w-1 h-2 bg-stone-400 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Narrative Section */}
      <section className="relative z-10 py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-stone-900 uppercase tracking-tighter">The Vision</h2>
            <p className="text-2xl text-stone-500 leading-relaxed font-sans mb-12 italic">
              &ldquo;{overview}&rdquo;
            </p>
            <div className="grid grid-cols-2 gap-8">
              {features.slice(0, 4).map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-50 flex items-center justify-center text-tan-dark group-hover:bg-tan group-hover:text-white transition-colors duration-300">
                    <f.icon size={20} />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 uppercase tracking-widest">{f.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
            <motion.div 
              style={{ y: parallaxY }}
              className="rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 relative bg-stone-100"
            >
              <ImageWithSkeleton 
                src={images[0]} 
                alt="Featured" 
                className="w-full h-full object-cover scale-110"
                style={{ scale: useTransform(scrollYProgress, [0.1, 0.4], [1.1, 1]) }}
              />
            </motion.div>
        </div>
      </section>

      {/* Continuous Tech Stack Scroll */}
      <section className="py-24 bg-stone-900 overflow-hidden relative border-y border-stone-800">
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-stone-900 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-stone-900 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold text-white uppercase tracking-[0.4em] flex items-center gap-6"
          >
            <div className="w-12 h-px bg-tan" />
            Technical Foundation
          </motion.h2>
        </div>

        <div className="flex gap-12 py-8 animate-infinite-scroll hover:[animation-play-state:paused] cursor-default">
          {/* Duplicate for seamless looping */}
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0"
            >
              <div className="flex flex-col items-start gap-4 px-12 py-10 rounded-[2.5rem] bg-stone-800/30 border border-stone-700/50 backdrop-blur-xl min-w-[280px] hover:bg-stone-800/60 hover:border-tan/30 transition-all duration-500 group">
                <div className="flex items-center gap-4">
                  <span className="text-tan-dark text-xs font-bold font-mono">/{(i % technologies.length) + 1}</span>
                  <div className="w-8 h-px bg-stone-700 group-hover:w-16 transition-all duration-500" />
                </div>
                <span className="text-white text-4xl lg:text-5xl font-display font-bold tracking-tighter opacity-80 group-hover:opacity-100 group-hover:text-tan transition-all">{tech}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      {images.length > 1 && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold mb-16 text-stone-900"
            >
              Surface <span className="italic text-tan">Exploration</span>
            </motion.h2>
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {images.slice(1).map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden border border-stone-100 shadow-soft-lg group cursor-zoom-in relative bg-stone-50"
                >
                  <ImageWithSkeleton 
                    src={img} 
                    alt={`Detail ${i}`} 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Navigation */}
      <Link 
        to={nextProject.link}
        className="relative h-[80vh] flex items-center justify-center bg-stone-50 group cursor-pointer overflow-hidden border-t border-stone-100"
      >
        <motion.div 
           initial={{ scale: 1.2, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.2 }}
           className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-30 transition-opacity duration-700" />
          <div className="absolute top-[30%] left-[20%] w-64 h-64 bg-tan rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-[30%] right-[20%] w-64 h-64 bg-stone-200 rounded-full blur-[100px] opacity-20" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.6em] text-stone-400 font-bold mb-6 block"
          >
            Next Experience
          </motion.span>
          <h3 className="text-5xl md:text-8xl font-display font-bold text-stone-900 flex flex-col md:flex-row items-center gap-6 justify-center">
            <motion.span
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
            >
              {nextProject.title}
            </motion.span>
            <motion.span
               initial={{ scale: 0, rotate: -45 }}
               whileInView={{ scale: 1, rotate: 0 }}
               transition={{ delay: 0.4, type: "spring" }}
            >
              <ArrowUpRight size={80} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 text-tan-dark" />
            </motion.span>
          </h3>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-tan origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </Link>

      {/* Footer Branding */}
      <footer className="py-20 text-center border-t border-stone-100">
        <div className="flex flex-col items-center gap-6">
          <div className="text-[8px] font-bold uppercase tracking-[1em] text-stone-300">Curating Digital Futures</div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all group"
          >
            <Zap size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
};

ProjectLayout.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  duration: PropTypes.string,
  teamSize: PropTypes.string,
  overview: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType
  })),
  technologies: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.object
};

export default ProjectLayout;
