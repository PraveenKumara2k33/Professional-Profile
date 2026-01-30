

import { motion, AnimatePresence } from "framer-motion";
import { useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import { 
  Briefcase, 
  GraduationCap, 
  GitCommit, 
  GitBranch,
  MapPin,
  ExternalLink,
  Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialState = { filter: 'all' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { filter: action.payload };
    default:
      return state;
  }
}

const educationData = [
  {
    id: 1,
    type: "education",
    date: "2019 — 2023",
    title: "B.Tech Information Technology",
    subtitle: "Velammal Institute of Technology",
    description: "CGPA: 8.56/10",
    details: ["Data Structures", "Web Technologies", "Cloud Computing", "DBMS"],
    path: "/velammal"
  },
  {
    id: 2,
    type: "education", 
    date: "2018 — 2019",
    title: "Higher Secondary (HSC)",
    subtitle: "Ayyanar Matric Higher Secondary School",
    description: "Percentage: 74.5%",
    details: ["Computer Science", "Mathematics"],
    path: "/ayyanar"
  },
  {
    id: 3,
    type: "education",
    date: "2017 — 2018", 
    title: "Secondary School (SSLC)",
    subtitle: "Ayyanar Matric Higher Secondary School",
    description: "Percentage: 87.2%",
    details: ["State Board"],
    path: "/ayyanar"
  }
];

const workData = [
  {
    id: 1,
    type: "work",
    date: "Jun 2024 — Jul 2024",
    org: "cognizant-technology-solutions",
    title: "Java Full Stack Trainee",
    subtitle: "Cognizant Technology Solutions",
    description: "Intensive training in Java, Spring Boot, Microservices, and React.js",
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    status: "completed",
    path: "/cognizant"
  },
  {
    id: 2,
    type: "work",
    date: "Dec 2023 — May 2024",
    org: "senchola-frontend",
    title: "Frontend Developer Intern", 
    subtitle: "Senchola Technology Solutions",
    description: "Developed Restaurant Management System admin panel using React.js and PHP",
    tech: ["React.js", "PHP", "MySQL", "Bootstrap"],
    status: "completed",
    path: "/senchola"
  },
  {
    id: 3,
    type: "work",
    date: "Sep 2023 — Dec 2023",
    org: "senchola-wordpress",
    title: "WordPress Developer Intern",
    subtitle: "Senchola Technology Solutions", 
    description: "Built custom themes, AI chatbot integration, dynamic galleries",
    tech: ["WordPress", "PHP", "AI Integration", "SEO"],
    status: "completed",
    path: "/senchola"
  },
  {
    id: 4,
    type: "work",
    date: "Aug 2023 — Sep 2023",
    org: "internpe",
    title: "Web Developer Intern",
    subtitle: "Internpe",
    description: "Frontend internship focusing on HTML, CSS, JavaScript fundamentals",
    tech: ["HTML5", "CSS3", "JavaScript", "Git"],
    status: "completed",
    path: "/internpe"
  }
];

const TimelineItem = ({ item, isLast }) => {
  const navigate = useNavigate();
  const isWork = item.type === "work";
  
  return (
    <div className="relative flex group">
      {/* Left Timeline Line */}
      <div className="flex flex-col items-center mr-6">
        {/* Top Vertical Line */}
        <div className="w-px h-6 bg-stone-200 group-first:h-0" />
        
        {/* Node */}
        <div 
          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
            isWork 
              ? "border-tan bg-cream text-tan-dark" 
              : "border-stone-300 bg-cream text-stone-500"
          } transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_4px_rgba(212,185,150,0.2)]`}
        >
          {isWork ? <GitCommit size={14} /> : <GitBranch size={14} />}
        </div>
        
        {/* Bottom Vertical Line (if not last) */}
        {!isLast && <div className="w-px flex-1 bg-stone-200" />}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-stone-100 bg-white p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer group/card"
          onClick={() => navigate(item.path)}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-stone-900 group-hover/card:text-tan-dark transition-colors">
                {item.title}
              </span>
              <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full border ${
                item.status === "completed" 
                  ? "border-stone-200 bg-stone-50 text-stone-500" 
                  : "border-tan/30 bg-tan/10 text-tan-dark"
              }`}>
                {item.status || "completed"}
              </span>
            </div>
            <span className="text-xs font-medium text-stone-400 font-mono bg-stone-50 px-2 py-1 rounded-md self-start sm:self-auto">
              {item.date}
            </span>
          </div>

          {/* Subtitle & Location */}
          <div className="flex items-center gap-3 text-sm text-stone-500 mb-4">
            <span className="flex items-center gap-1.5 font-medium">
              {isWork ? <Briefcase size={14} className="text-tan" /> : <GraduationCap size={14} className="text-stone-400" />}
              {item.subtitle}
            </span>
            <span className="text-stone-300">•</span>
            <span className="flex items-center gap-1.5 text-xs text-stone-400">
              <MapPin size={12} />
              Remote
            </span>
          </div>

          <p className="text-stone-600 text-sm mb-5 leading-relaxed">
            {item.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {(item.tech || item.details || []).map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 text-xs rounded-md bg-stone-50 text-stone-600 border border-stone-100 font-medium group-hover/card:border-tan/20 group-hover/card:bg-tan/5 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* External Link Indicator */}
          <div className="absolute top-6 right-6 opacity-0 -translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
            <ExternalLink size={16} className="text-tan-dark" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string, // Changed to optional to match educationData which doesn't have it on all items if I'm not careful, though it seems it's there.
    path: PropTypes.string.isRequired,
    status: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isLast: PropTypes.bool.isRequired,
};

const ContributionGraph = () => {
  // Generate dummy contribution data
  const weeks = 20;
  const days = 7;
  
  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <div className="inline-flex gap-1.5">
        {Array.from({ length: weeks }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1.5">
            {Array.from({ length: days }).map((_, dayIdx) => {
              const intensity = Math.random();
              // Warm theme contribution colors (Stone/Tan scale)
              let bgColor = "#f5f5f4"; // stone-100 (empty)
              if (intensity > 0.8) bgColor = "#B08968"; // tan-dark
              else if (intensity > 0.6) bgColor = "#D4B996"; // tan
              else if (intensity > 0.4) bgColor = "#E6D5C3"; // tan-light
              else if (intensity > 0.2) bgColor = "#e7e5e4"; // stone-200
              
              return (
                <div
                  key={dayIdx}
                  className="w-3 h-3 rounded-[2px]"
                  style={{ backgroundColor: bgColor }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-3 text-stone-400 text-[10px] font-medium uppercase tracking-wider">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-[2px] bg-[#f5f5f4]" />
          <div className="w-3 h-3 rounded-[2px] bg-[#e7e5e4]" />
          <div className="w-3 h-3 rounded-[2px] bg-[#E6D5C3]" />
          <div className="w-3 h-3 rounded-[2px] bg-[#D4B996]" />
          <div className="w-3 h-3 rounded-[2px] bg-[#B08968]" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

function Qualification() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredEducation = useMemo(() => 
    state.filter === 'all' || state.filter === 'education' ? educationData : [], 
    [state.filter]
  );

  const filteredWork = useMemo(() => 
    state.filter === 'all' || state.filter === 'work' ? workData : [], 
    [state.filter]
  );

  const filterTabs = [
    { id: 'all', label: 'All', icon: Calendar },
    { id: 'work', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <section id="qualification" className="min-h-screen bg-stone-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-tan/10 text-tan-dark text-sm font-semibold mb-6 uppercase tracking-widest">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8">
            Experience & <span className="italic text-tan">Education</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => dispatch({ type: 'SET_FILTER', payload: tab.id })}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  state.filter === tab.id
                    ? "bg-stone-900 text-white shadow-lg scale-105"
                    : "bg-white text-stone-500 border border-stone-100 hover:border-tan/30 hover:text-tan-dark"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* GitHub-style Contribution Activity - Adapted to Clean Theme */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-stone-700 mb-4 flex items-center gap-2 uppercase tracking-wide">
              <Calendar size={16} className="text-tan" />
              Activity Overview
            </h3>
            <ContributionGraph />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Work Experience Section */}
          <AnimatePresence mode="popLayout">
            {(state.filter === 'all' || state.filter === 'work') && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-8 flex items-center gap-3 pb-4 border-b border-stone-200">
                  <Briefcase size={18} className="text-tan-dark" />
                  Work Experience
                </h3>
                <div className="space-y-0">
                  {filteredWork.map((item, index) => (
                    <TimelineItem 
                      key={item.id} 
                      item={item} 
                      isLast={index === filteredWork.length - 1} 
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Education Section */}
            {(state.filter === 'all' || state.filter === 'education') && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-8 flex items-center gap-3 pb-4 border-b border-stone-200">
                  <GraduationCap size={18} className="text-stone-500" />
                  Education
                </h3>
                <div className="space-y-0">
                  {filteredEducation.map((item, index) => (
                    <TimelineItem 
                      key={item.id} 
                      item={item} 
                      isLast={index === filteredEducation.length - 1} 
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-sm italic">
            Click on any card to view detailed project contributions and achievements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Qualification;