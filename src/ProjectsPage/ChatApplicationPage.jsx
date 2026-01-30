import ProjectLayout from "./ProjectLayout";
import ChatLogo from "../assets/webchat/chat.jpg";
import { 
  MessageSquare, 
  Shield, 
  Database, 
  Users, 
  Bell, 
  Server,
} from "lucide-react";

const ChatApplicationPage = () => {
  const features = [
    {
      title: "Real-Time Messaging",
      description: "Instant message updates between users using AJAX, ensuring a smooth conversational experience without page reloads.",
      icon: MessageSquare
    },
    {
      title: "Secure Authentication",
      description: "Robust login/registration system with password encryption, session management via Apache Tomcat, and secure logout functionality.",
      icon: Shield
    },
    {
      title: "Database Management",
      description: "Optimized MySQL schema for storing user profiles, credentials, and persistent chat history with timestamp tracking.",
      icon: Database
    },
    {
      title: "User Status Tracking",
      description: "Dynamic online/offline status updates providing real-time visibility of user availability.",
      icon: Users
    },
    {
      title: "Notifications & Alerts",
      description: "Real-time system notifications for new messages and important user events.",
      icon: Bell
    },
    {
      title: "Session Handling",
      description: "Persistent user states across the application using secure server-side session management.",
      icon: Server
    }
  ];

  const technologies = [
    "Java", "JSP", "Servlets", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3", "Bootstrap", "Apache Tomcat"
  ];

  return (
    <ProjectLayout
      title="Web-Based Chat Application"
      category="Full Stack Development"
      duration="Aug 2024 - Sep 2024"
      teamSize="Individual Project"
      overview="Designed and implemented a comprehensive real-time chat solution focusing on low-latency communication and secure user data management. The application bridges the gap between simple messaging and enterprise-grade communication tools by leveraging robust Java technologies."
      features={features}
      technologies={technologies}
      images={[ChatLogo]}
      links={{
        github: "https://github.com/PraveenKumara2k33/Web-Based-Chat-Application.git"
      }}
    />
  );
};

export default ChatApplicationPage;
