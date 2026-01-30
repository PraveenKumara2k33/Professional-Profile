import ExperienceLayout from "./ExperienceLayout";
import {  
  Users, 
  TrendingDown, 
  Bot, 
  Image, 
  Palette,
  Code,
  ShoppingCart,
  CalendarCheck
} from "lucide-react";

const SencholaPage = () => {
  const achievements = [
    {
      title: "Frontend Developer (Phase 2)",
      description: "Completed intensive two-month training on HTML, CSS, JavaScript, and React.js. Joined a 4-member team to develop a Restaurant Management System admin panel using React.js, PHP, and MySQL.",
      icon: Code
    },
    {
      title: "Ingredients Management System",
      description: "Developed real-time inventory tracking with automated reorder alerts and usage analysis, contributing to a 20% reduction in food waste across client operations.",
      icon: ShoppingCart
    },
    {
      title: "Labor Management Module",
      description: "Created comprehensive modules for employee scheduling, payroll automation, and record management, boosting operational efficiency by 20%.",
      icon: Users
    },
    {
      title: "Overheads Optimization",
      description: "Designed expense tracking and analysis tools that helped reduce operational overhead costs by 15% through data-driven insights.",
      icon: TrendingDown
    },
    {
      title: "AI Chatbot Integration",
      description: "Integrated intelligent AI chatbot during WordPress phase, enhancing website functionality and boosting customer engagement with real-time query responses.",
      icon: Bot
    },
    {
      title: "Dynamic Image Gallery",
      description: "Developed feature-rich gallery with pagination and lazy loading, resulting in a 30% increase in user engagement and improved page performance.",
      icon: Image
    },
    {
      title: "Team Leadership",
      description: "Managed 20% of project tasks using GitHub version control. Coordinated via Microsoft Teams to maintain consistent progress and troubleshoot issues effectively.",
      icon: CalendarCheck
    },
    {
      title: "UI/UX Customization",
      description: "Applied custom WordPress themes and styles improving visual aesthetics, leading to 20% increase in cross-device readability and user satisfaction.",
      icon: Palette
    }
  ];

  const technologies = [
    "React.js", "PHP", "MySQL", "WordPress", "HTML/CSS", 
    "JavaScript", "Bootstrap", "GitHub", "REST APIs", "AI Integration"
  ];

  return (
    <ExperienceLayout
      companyName="Senchola"
      role="Frontend & WordPress Developer"
      duration="September 2023 - May 2024"
      location="Remote"
      type="work"
      technologies={technologies}
      achievements={achievements}
    />
  );
};

export default SencholaPage;