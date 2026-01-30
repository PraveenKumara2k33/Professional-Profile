import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion"; 
import Logo from "./assets/Praveenkumar2_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["about", "qualification", "skills", "projects", "publication"];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/#about" },
    { name: "Experience", to: "/#qualification" },
    { name: "Skills", to: "/#skills" },
    { name: "Projects", to: "/#projects" },
    { name: "Publications", to: "/#publication" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-cream/80 backdrop-blur-lg shadow-soft border-b border-stone-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Minimalist Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-stone-900 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold font-display text-stone-900 hidden sm:block">
              PraveenKumar A
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={link.to}
                  smooth
                  className={`relative px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full group ${
                    activeSection === link.to.replace("/#", "") || (link.to === "/" && activeSection === "home")
                      ? "text-stone-900"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {(activeSection === link.to.replace("/#", "") || (link.to === "/" && activeSection === "home")) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-tan/20 rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-tan group-hover:w-1/2 transition-all duration-300 -mb-1 opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/#contact"
              smooth
              className="ml-6 px-7 py-3 bg-stone-900 text-white rounded-full text-sm font-bold shadow-soft hover:bg-stone-800 transition-all duration-300 flex items-center gap-2 group border border-transparent hover:border-stone-900 hover:bg-transparent hover:text-stone-900"
            >
              <FaCode className="text-tan group-hover:rotate-12 transition-transform duration-300" />
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-full bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors shadow-sm"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm lg:hidden z-40"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-cream backdrop-blur-xl border-l border-stone-200 shadow-2xl lg:hidden z-50 flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-xl">P</span>
                    </div>
                    <span className="text-xl font-bold font-display text-stone-900">Menu</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors shadow-sm"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                <div className="space-y-4 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        smooth
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${
                          activeSection === link.to.replace("/#", "")
                            ? "bg-tan/10 text-stone-900"
                            : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            activeSection === link.to.replace("/#", "") 
                              ? "bg-tan scale-150" 
                              : "bg-stone-300 group-hover:bg-tan"
                          }`} />
                          {link.name}
                        </div>
                        <motion.div
                          animate={{ x: activeSection === link.to.replace("/#", "") ? 0 : -10, opacity: activeSection === link.to.replace("/#", "") ? 1 : 0 }}
                          className="text-tan"
                        >
                          →
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-stone-200"
                >
                  <p className="text-xs text-stone-400 uppercase tracking-[0.2em] font-bold mb-6">Let&apos;s Connect</p>
                  <a
                    href="mailto:apraveenkumar720@gmail.com"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-stone-900 text-white rounded-2xl font-bold shadow-xl hover:bg-stone-800 transition-all duration-300 group"
                  >
                    <FaCode className="text-tan group-hover:rotate-12 transition-transform" />
                    Send a Message
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;