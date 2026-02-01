import { useMemo } from 'react';
import PropTypes from 'prop-types';

const SolarSystem = ({ skills }) => {
  // Group skills into orbits
  // Orbit 0 (Inner): 4 items
  // Orbit 1: 8 items
  // Orbit 2: 12 items
  // Orbit 3 (Outer): Remaining
  
  const orbits = useMemo(() => {
    const orbitCounts = [5, 8, 12]; // Items per orbit
    let currentIdx = 0;
    const result = [];
    
    // Core orbit (Sun/Nucleus is static center, these are first ring)
    const orbit1 = skills.slice(currentIdx, currentIdx + orbitCounts[0]);
    currentIdx += orbitCounts[0];
    result.push({ items: orbit1, duration: 25, direction: 'normal' });
    
    // Second orbit
    const orbit2 = skills.slice(currentIdx, currentIdx + orbitCounts[1]);
    currentIdx += orbitCounts[1];
    result.push({ items: orbit2, duration: 35, direction: 'reverse' });
    
    // Third orbit
    if (currentIdx < skills.length) {
      const orbit3 = skills.slice(currentIdx);
      result.push({ items: orbit3, duration: 45, direction: 'normal' });
    }
    
    return result;
  }, [skills]);

  return (
    <div className="solar-system-container relative w-full aspect-square max-w-[800px] mx-auto flex items-center justify-center overflow-hidden my-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-radial-gradient from-tan/10 to-transparent opacity-50 blur-2xl z-0" />

      {/* Central Star / Nucleus */}
      <div className="center-sun absolute z-20 w-24 h-24 rounded-full bg-gradient-to-br from-tan to-stone-800 shadow-[0_0_50px_rgba(212,163,115,0.6)] flex items-center justify-center animate-pulse-slow">
         <span className="text-white font-bold text-xl tracking-widest">SKILLS</span>
      </div>

      {/* Orbits */}
      {orbits.map((orbit, orbitIndex) => {
        const radius = (orbitIndex + 1) * 110 + 40; // Base radius + increment
        
        return (
          <div
            key={orbitIndex}
            className="orbit-ring absolute border border-stone-200/20 rounded-full"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              animation: `orbit-rotate ${orbit.duration}s linear infinite ${orbit.direction === 'reverse' ? 'reverse' : 'normal'}`
            }}
          >
            {orbit.items.map((skill, itemIndex) => {
              const angleSpec = (360 / orbit.items.length) * itemIndex;
              // Position calculation happens via transform in CSS or inline
              // To position clearly on the circle, we can use transforms:
              // rotate(angle) translate(radius) rotate(-angle)
              
              return (
                <div
                  key={itemIndex}
                  className="planet absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-stone-100 group cursor-pointer transition-transform hover:scale-125 z-10"
                  style={{
                    transform: `rotate(${angleSpec}deg) translate(${radius}px) rotate(-${angleSpec}deg)`
                  }}
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-7 h-7 object-contain"
                    style={{
                        animation: `counter-rotate ${orbit.duration}s linear infinite ${orbit.direction === 'reverse' ? 'reverse' : 'normal'}`
                    }}
                  />
                  
                  {/* Tooltip on Hover */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {skill.name}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

SolarSystem.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SolarSystem;
