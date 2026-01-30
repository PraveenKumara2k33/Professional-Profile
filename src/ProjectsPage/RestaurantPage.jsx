import ProjectLayout from "./ProjectLayout";
import MainPage from "../assets/Restaurant/Main.png";
import SalesPage from "../assets/Restaurant/sales.png";
import LabourPage from "../assets/Restaurant/Labor.png";
import IngredientPage from "../assets/Restaurant/Ingredients.png";
import CostingPage from "../assets/Restaurant/costing.png";
import BuilderPage from "../assets/Restaurant/Builder.png";
import OverheadsPage from "../assets/Restaurant/Overheads.png";
import FaqPage from "../assets/Restaurant/Faq.png";
import { 
  BarChart3, 
  Workflow, 
  ChefHat, 
  Users, 
  Calculator, 
  TrendingUp, 
} from "lucide-react";

const RestaurantPage = () => {
  const features = [
    {
      title: "Sales Analytics",
      description: "Real-time sales dashboard with daily, weekly, and monthly reports visualizations using Chart.js.",
      icon: BarChart3
    },
    {
      title: "Process Workflow Builder",
      description: "Customizable workflow designer allowing administrators to define and optimize restaurant operations.",
      icon: Workflow
    },
    {
      title: "Inventory Management",
      description: "Comprehensive tracking of ingredients, stock levels, and automated reordering triggers to prevent shortages.",
      icon: ChefHat
    },
    {
      title: "Workforce Management",
      description: "Employee scheduling, payroll automation, and leave tracking for efficient HR operations.",
      icon: Users
    },
    {
      title: "Cost & Profit Analysis",
      description: "Detailed breakdown of ingredient costs, labor, and overheads to calculate real-time profitability.",
      icon: Calculator
    },
    {
      title: "Performance Impact",
      description: "Reduced food waste by 20% and increased operational efficiency by 20% through automated tracking.",
      icon: TrendingUp
    }
  ];

  const technologies = [
    "React.js", "PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js", "HTML5", "CSS3"
  ];

  const images = [
    MainPage,
    SalesPage,
    BuilderPage,
    IngredientPage,
    LabourPage,
    OverheadsPage,
    CostingPage,
    FaqPage
  ];

  return (
    <ProjectLayout
      title="Restaurant Management System"
      category="Full Stack & UI/UX"
      duration="Mar 2024 - May 2024"
      teamSize="4 Members"
      overview="A comprehensive admin panel designed to optimize restaurant operations. The system integrates inventory, labor, and financial management into a single cohesive platform, driving efficiency and profitability through data-driven insights."
      features={features}
      technologies={technologies}
      images={images}
      links={{
        live: "https://www.figma.com/design/CxFVodhuc1d6jLo8FifD6b/MARIE-ERP?node-id=3443-634&t=1zr338Tf0JyYKAKo-0"
      }}
    />
  );
};

export default RestaurantPage;
