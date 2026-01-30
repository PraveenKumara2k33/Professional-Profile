import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Briefcase,
  CheckCircle2
} from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";

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

const AchievementCard = ({ title, description, delay, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group hover-target"
  >
    <div className="relative overflow-hidden rounded-2xl bg-white border border-stone-200 p-6 shadow-sm hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-24 h-24 bg-tan/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
      
      <div className="relative z-10 flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center border border-stone-100 group-hover:bg-tan/20 group-hover:border-tan/30 transition-colors">
          {Icon ? <Icon className="w-6 h-6 text-stone-600 group-hover:text-tan-dark" /> : <CheckCircle2 className="w-6 h-6 text-stone-600 group-hover:text-tan-dark" />}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-stone-900 mb-2 font-display group-hover:text-tan-dark transition-colors">
            {title}
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TechBadge = ({ tech, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="hover-target inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-stone-50 border border-stone-200 text-stone-600 hover:bg-tan/10 hover:border-tan/30 hover:text-tan-dark transition-all duration-300"
  >
    {tech}
  </motion.span>
);

const ExperienceLayout = ({ 
  companyName, 
  role, 
  duration, 
  location, 
  type = "work",
  achievements, 
  technologies, 
  icon: Icon = Briefcase,
  children
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Ensure page starts at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [companyName]);

  return (
    <div className="min-h-screen bg-cream text-stone-900 overflow-x-hidden selection:bg-tan/30">
      <CustomCursor />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tan/10 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ scale }}
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Type Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tan/10 border border-tan/20 mb-6 hover-target"
            >
              <Icon className="w-4 h-4 text-tan-dark" />
              <span className="text-xs font-bold uppercase tracking-widest text-tan-dark">{type === 'work' ? 'Professional Experience' : 'Education'}</span>
            </motion.div>

            {/* Company Name */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display tracking-tight text-stone-900 hover-target">
              {companyName}
            </h1>

            {/* Role */}
            <p className="text-xl md:text-2xl text-stone-500 font-light mb-8 font-sans">
              {role}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-500 font-mono">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm">
                <Calendar className="w-4 h-4 text-tan" />
                {duration}
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm">
                <MapPin className="w-4 h-4 text-tan" />
                {location}
              </span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          {technologies && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 font-sans">Technologies & Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {technologies.map((tech, index) => (
                  <TechBadge key={index} tech={tech} delay={index * 0.05} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Divider */}
          <div className="w-24 h-px bg-stone-200 mx-auto mb-16" />

          {/* Achievements Grid */}
          {achievements && (
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <AchievementCard 
                  key={index}
                  title={achievement.title}
                  description={achievement.description}
                  delay={index * 0.1}
                  icon={achievement.icon}
                />
              ))}
            </div>
          )}

          {/* Custom Children Content (Charts etc) */}
          {children && (
            <div className="animate-fade-in-up">
              {children}
            </div>
          )}

          {/* Footer CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <Link 
              to="/#qualification"
              className="hover-target inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white shadow-lg hover:bg-stone-800 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span>View Full Path</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

ExperienceLayout.propTypes = {
  companyName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['work', 'education']),
  achievements: PropTypes.arrayOf(PropTypes.object),
  technologies: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  icon: PropTypes.elementType,
  children: PropTypes.node
};

AchievementCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
  icon: PropTypes.elementType,
};

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default ExperienceLayout;