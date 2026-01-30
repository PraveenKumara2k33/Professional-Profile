import { motion, useScroll, useTransform } from "framer-motion";
import { Code, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useRef, useMemo, useState } from "react";
import RestaurantImg from "../assets/Restaurant/Main.png";
import EcommerceImg from "../assets/Ecommerce/e-commercemain.jpg";
import ChatImg from "../assets/webchat/chat.jpg";
import WordPressImg from "../assets/webchat/wordpressweb.jpg";
import EBillImg from "../assets/webchat/ebill.jpg";
import PortfolioImg from "../assets/webchat/chat.jpg"; // Placeholder if needed, or use a better one if found 
// Re-using chat.jpg as placeholder for portfolio if no specific one exists, or I can use an external screenshot if I had one. 
// Actually I'll use ChatImg for now or just the icon if it looks better.

const cardData = [
  {
    title: "Restaurant Management System",
    category: "Full Stack Development",
    features: [
      "Real-time stock monitoring & inventory",
      "Streamlined scheduling & workforce",
      "Comprehensive cost & profit analysis",
    ],
    tech: ["React.js", "PHP", "MySQL", "Bootstrap"],
    accent: "bg-tan",
    link: "/Restaurant",
    image: RestaurantImg
  },
  {
    title: "Web-Based Chat Application",
    category: "Java Development",
    features: [
      "Real-time messaging with AJAX",
      "Secure user authentication",
      "Persistent chat history storage",
    ],
    tech: ["Java", "Servlets", "JSP", "MySQL"],
    accent: "bg-stone-500",
    link: "/ChatApplication",
    image: ChatImg
  },
  {
    title: "WordPress AI Integration",
    category: "WordPress Development",
    features: [
      "AI Chatbot user engagement",
      "Dynamic paginated gallery",
      "Custom brand-aligned styling",
    ],
    tech: ["WordPress", "PHP", "AI", "SEO"],
    accent: "bg-tan-dark",
    link: "/WordPress",
    image: WordPressImg
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    features: [
      "Real-time order notifications",
      "Advanced product comparison",
      "Secure payment checkout flow",
    ],
    tech: ["React.js", "Node.js", "Socket.IO", "Tailwind"],
    accent: "bg-orange-300",
    link: "/ECommerce",
    image: EcommerceImg
  },
  {
    title: "Electricity Billing System",
    category: "Java Desktop Application",
    features: [
      "Automated bill generation",
      "Customer usage statistics",
      "Secure revenue collection",
    ],
    tech: ["Java Swing", "Core Java", "MySQL", "JDBC"],
    accent: "bg-stone-600",
    link: "/EBill",
    image: EBillImg
  },
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    features: [
      "Kinetic typography & animations",
      "Atomic tech orbit experience",
      "Performance optimized baseline",
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    accent: "bg-tan",
    link: "/",
    image: PortfolioImg
  },
];

const ProjectCard = ({ project, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale,
          top: `calc(-10% + ${index * 25}px)`
        }}
        className="relative h-[550px] w-full max-w-[1100px] bg-white rounded-[3rem] p-8 md:p-10 border border-stone-100 shadow-soft-2xl flex flex-col lg:flex-row gap-10 overflow-hidden"
      >
        {/* Soft Background Accent */}
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.07] -translate-y-1/2 translate-x-1/2 pointer-events-none ${project.accent}`} />

        {/* Content Section */}
        <div className="flex-1 flex flex-col relative z-10 h-full">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-bold text-stone-600 tracking-widest uppercase">
                <Code size={12} className="text-tan-dark" />
                {project.category}
              </span>
              <span className="text-4xl font-display text-stone-100 font-bold">0{index + 1}</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-[1.1] tracking-tight group-hover:text-tan-dark transition-colors">
              {project.title}
            </h3>

            <div className="space-y-4 mb-8">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-stone-500 font-medium">
                  <CheckCircle2 size={16} className="text-tan-dark" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-[10px] rounded-md bg-stone-50 text-stone-400 font-bold border border-stone-100 uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to={project.link}
              className="w-full sm:w-fit px-10 py-4 rounded-2xl bg-stone-900 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:bg-stone-800 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Explore Experience
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Visual Preview Section */}
        <Link 
          to={project.link}
          className="lg:w-[45%] h-full relative group/img overflow-hidden rounded-[2.5rem] border border-stone-100 bg-stone-50 shadow-inner cursor-pointer"
        >
          {project.image ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 skeleton" />
              )}
              <motion.img 
                src={project.image}
                alt={project.title}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} group-hover/img:scale-110`}
              />
            </>
          ) : (
             <div className="w-full h-full flex items-center justify-center text-stone-200">
               <Code size={80} />
             </div>
          )}
          
          {/* Glassmorphic Overlay on Hover */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-stone-900/10 backdrop-blur-[2px] flex items-center justify-center transition-opacity"
          >
            <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-white/20">
              <span className="text-stone-900 font-bold text-xs uppercase tracking-widest">View Project Details</span>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
};

const Project = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const projects = useMemo(() => cardData, []);

  return (
    <section id="projects" ref={container} className="relative bg-stone-50">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-tan/10 text-tan-dark text-xs font-bold mb-6 uppercase tracking-[0.3em] border border-tan/20">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-stone-900">
            Digital <span className="italic text-tan">Excellence</span>
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            A deep dive into my professional projects, showcasing innovative solutions and technical precision.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return (
            <ProjectCard 
              key={`p_${index}`} 
              index={index} 
              project={project} 
              progress={scrollYProgress} 
              range={[index * .25, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="h-[20vh] bg-stone-50" />
    </section>
  );
};

export default Project;
