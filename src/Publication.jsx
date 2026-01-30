import { motion } from "framer-motion";
import { ExternalLink, Download, Award, BookOpen, Calendar } from "lucide-react";
import BlackBoxLogo from "./assets/skills/BlackBox.jpg";

const Publication = () => {
  const highlights = [
    { icon: Award, label: "IEEE Publication", value: "2023" },
    { icon: BookOpen, label: "Research Paper", value: "IoT Based" },
    { icon: Calendar, label: "Published", value: "April 2023" },
  ];

  const keyPoints = [
    "Growing need for protection and safety due to frequent vehicle accidents",
    "Enhanced surveillance and tracking features using IoT technology",
    "Black box concept records data on vehicle movement",
    "Crash detection notifies police/rescue teams automatically",
    "IoT integration for vehicle security against theft",
    "Remote engine control via mobile app with 24/7 tracking",
    "GSM network for keyless entry system management",
    "Graphical interface for backup data analysis",
    "Improved incident detection and severity determination",
    "Keywords: IoT, sensors, black box, GPS tracking, GSM",
  ];

  return (
    <section id="publication" className="relative min-h-screen bg-stone-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tan/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-tan/10 text-tan-dark text-sm font-semibold mb-6 uppercase tracking-widest border border-tan/20">
            Research & Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-stone-900 mb-6">
            Publications
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-sans leading-relaxed">
            Academic contributions to the field of IoT and vehicle safety systems, focused on practical applications and enhanced security.
          </p>
        </motion.div>

        {/* Main Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Card Container */}
          <div className="relative bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500 group-hover:-translate-y-1">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden bg-stone-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={BlackBoxLogo}
                    alt="Black Box Research"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-3">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="px-4 py-2 bg-white/90 backdrop-blur-md border border-stone-200 rounded-full flex items-center gap-2 shadow-sm"
                      >
                        <Icon size={14} className="text-tan-dark" />
                        <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">{item.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-display text-stone-900 mb-6 leading-tight">
                    Black Box Testing Design for Vehicle Surveillance and Tracking
                  </h3>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {highlights.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={idx} 
                          className="text-center p-4 bg-stone-50 rounded-2xl border border-stone-100"
                        >
                          <Icon size={20} className="text-tan mx-auto mb-3" />
                          <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">{item.label}</div>
                          <div className="text-sm font-bold text-stone-800">{item.value}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Key Points */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">Key Abstract Points</h4>
                    <div className="max-h-60 overflow-y-auto custom-scrollbar pr-2">
                      <ul className="space-y-3">
                        {keyPoints.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tan flex-shrink-0" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-stone-100">
                  <a
                    href="https://ieeexplore.ieee.org/document/10099824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 bg-stone-900 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Publication</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="./assets/Vehicle Surveillance and Tracking - IEEE.doc"
                    download="Vehicle_Surveillance_Tracking_PraveenKumar.doc"
                    className="px-6 py-4 bg-white border border-stone-200 text-stone-900 rounded-xl font-bold text-sm hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download size={16} className="text-stone-500" />
                    <span>Download Paper</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-12 text-center"
        >
          <p className="text-xs text-stone-400 font-mono flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500/50" />
            Published in IEEE Conference Proceedings • April 2023
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publication;
