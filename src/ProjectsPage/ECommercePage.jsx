import ProjectLayout from "./ProjectLayout";
import MainPage from "../assets/Ecommerce/e-commercemain.jpg";
import LogPage from "../assets/Ecommerce/login-out.jpg";
import BuyPage from "../assets/Ecommerce/Buy.png";
import CheckoutPage from "../assets/Ecommerce/Checkout.png";
import ComparePage from "../assets/Ecommerce/Compare.png";
import HomePage from "../assets/Ecommerce/Home.png";
import ReviewPage from "../assets/Ecommerce/Review.png";
import SimilarPage from "../assets/Ecommerce/Similar.png";
import ViewPage from "../assets/Ecommerce/View.png";
import { 
  ShoppingCart, 
  MessageCircle, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  BarChart 
} from "lucide-react";

const ECommercePage = () => {
  const features = [
    {
      title: "Real-Time Interactions",
      description: "Integrated Socket.IO for instant notifications on order updates and live customer chat support.",
      icon: MessageCircle
    },
    {
      title: "Product Ecosystem",
      description: "Complete shopping experience including product comparison, similar product recommendations, and customer reviews.",
      icon: ShoppingCart
    },
    {
      title: "Secure Authentication",
      description: "Robust user management with secure registration, login, logout, and password hashing.",
      icon: ShieldCheck
    },
    {
      title: "Backend Architecture",
      description: "Node.js RESTful API handling data requests with efficient JSON-based storage for products and users.",
      icon: Server
    },
    {
      title: "Interactive UI",
      description: "Responsive React frontend with Tailwind CSS styling, featuring product filtering, sorting, and search.",
      icon: Smartphone
    },
    {
      title: "Checkout Flow",
      description: "Streamlined purchase process from cart management to shipping inputs and order confirmation.",
      icon: BarChart
    }
  ];

  const technologies = [
    "React.js", "Node.js", "Socket.IO", "Tailwind CSS", "Bootstrap", "JavaScript", "REST API"
  ];

  const images = [
    MainPage,
    HomePage,
    ViewPage,
    SimilarPage,
    ComparePage,
    BuyPage,
    CheckoutPage,
    ReviewPage,
    LogPage
  ];

  return (
    <ProjectLayout
      title="Real-Time E-Commerce Platform"
      category="Full Stack Web Application"
      duration="May 2024 - Jun 2024"
      teamSize="Individual Project"
      overview="A dynamic e-commerce solution focused on user engagement through real-time features. It combines a modern, responsive shopping interface with a securely managed backend, enabling seamless interactions from product discovery to checkout."
      features={features}
      technologies={technologies}
      images={images}
      links={{
        github: "https://github.com/PraveenKumara2k33/E-Commerce.git"
      }}
    />
  );
};

export default ECommercePage;
