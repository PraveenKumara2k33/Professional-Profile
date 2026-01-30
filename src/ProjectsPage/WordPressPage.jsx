import ProjectLayout from "./ProjectLayout";
import WordpressPage from "../assets/webchat/wordpressweb.jpg";
import { 
  Bot, 
  Image, 
  Palette, 
  Zap, 
  MousePointer2, 
  Layout 
} from "lucide-react";

const WordPressPage = () => {
  const features = [
    {
      title: "AI Chatbot Integration",
      description: "Integrated a real-time AI chatbot to provide instant user support, enhancing engagement and satisfaction.",
      icon: Bot
    },
    {
      title: "Dynamic Image Gallery",
      description: "Interactive gallery with pagination and filtering, improving content organization and browsing experience.",
      icon: Image
    },
    {
      title: "Performance Optimization",
      description: "Achieved 20% faster load times and better responsiveness through custom style optimizations.",
      icon: Zap
    },
    {
      title: "Engagement Metrics",
      description: "Increased user engagement by 30% through improved navigation and interactive elements.",
      icon: MousePointer2
    },
    {
      title: "Custom Theme Styling",
      description: "Tailored WordPress styling using custom CSS/JS to create a unique brand identity.",
      icon: Palette
    },
    {
      title: "Responsive Layout",
      description: "Mobile-first approach ensuring seamless experience across all device sizes.",
      icon: Layout
    }
  ];

  const technologies = [
    "WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "AI Integration"
  ];

  return (
    <ProjectLayout
      title="WordPress Optimization & AI"
      category="CMS & Web Design"
      duration="Nov 2023 - Dec 2023"
      teamSize="Individual Project"
      overview="A focused project on enhancing a WordPress site through modern integrations. By adding AI-driven support and a custom-designed gallery key metrics like user engagement and site performance were significantly improved."
      features={features}
      technologies={technologies}
      images={[WordpressPage]}
      links={{}}
    />
  );
};

export default WordPressPage;
