import ProjectLayout from "./ProjectLayout";
import MainPage from "../assets/webchat/ebill.jpg";
import { 
  Zap, 
  Users, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Shield 
} from "lucide-react";

const EBillPage = () => {
  const features = [
    {
      title: "Automated Billing",
      description: "Intelligent calculation of electricity bills based on meter readings, taxes, and government cess.",
      icon: Zap
    },
    {
      title: "Customer Management",
      description: "Centralized database for managing customer profiles, meter details, and connection histories.",
      icon: Users
    },
    {
      title: "Bill Generation",
      description: "Instant generation of printable bills with detailed cost breakdowns and usage statistics.",
      icon: FileText
    },
    {
      title: "Payment Integration",
      description: "Secure payment processing and status tracking for seamless revenue collection.",
      icon: CreditCard
    },
    {
      title: "Reporting Dashboard",
      description: "Comprehensive monthly, quarterly, and annual reports on consumption and revenue.",
      icon: TrendingUp
    },
    {
      title: "Role-Based Security",
      description: "Secure authentication system ensuring data access control for admins and employees.",
      icon: Shield
    }
  ];

  const technologies = [
    "Java", "MySQL", "JDBC", "Swing/AWT", "HTML", "CSS"
  ];

  return (
    <ProjectLayout
      title="Electricity Billing System"
      category="Desktop Application / System Design"
      duration="Jan 2022 - Mar 2022"
      teamSize="3 Members"
      overview="A robust billing automation system designed to streamline the operations of utility providers. It handles everything from meter reading input to bill generation and payment tracking, ensuring accuracy and operational efficiency."
      features={features}
      technologies={technologies}
      images={[MainPage]}
      links={{}}
    />
  );
};

export default EBillPage;
