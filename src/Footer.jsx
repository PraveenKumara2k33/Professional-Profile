import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { Mail, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Projects", to: "/#projects" },
    { name: "Experience", to: "/#qualification" },
    { name: "Skills", to: "/#skills" },
  ];

  return (
    <footer id="contact" className="bg-stone-900 border-t border-stone-800 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tan to-tan-dark flex items-center justify-center">
                <span className="text-stone-900 font-display font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-display font-bold text-white">
                PraveenKumar A
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Crafting digital experiences that merge clean aesthetics with robust functionality. Open for new software engineering challenges and full-stack collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    smooth
                    className="text-stone-400 hover:text-tan transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-tan group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/praveenkumar2k33/", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/PraveenKumara2k33", label: "GitHub" },
                { Icon: Instagram, href: "https://www.instagram.com/pravxxn_verse/", label: "Instagram" },
                { Icon: Mail, href: "mailto:apraveenkumar720@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-tan hover:text-stone-900 transition-all hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a 
              href="mailto:apraveenkumar720@gmail.com"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-tan transition-colors group"
            >
              <Mail size={16} className="group-hover:rotate-12 transition-transform" />
              <span>apraveenkumar720@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {year} PraveenKumar A. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">
            Designed with PraveenKumar A
          </p>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-tan hover:bg-tan-dark text-stone-900 shadow-xl flex items-center justify-center transition-all z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
