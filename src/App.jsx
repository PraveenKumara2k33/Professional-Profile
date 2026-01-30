import "./App.css";
import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Qualification from "./QualificationPage/Qualification";
import Skills from "./Skills";
import Project from "./ProjectsPage/Project";
import Publication from "./Publication";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

// Optimized Components
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";
import PageTransition from "./components/PageTransition";

// Lazy Loading Detail Pages
const CognizantPage = lazy(() => import("./QualificationPage/CognizantPage"));
const SencholaPage = lazy(() => import("./QualificationPage/SencholaPage"));
const InternpePage = lazy(() => import("./QualificationPage/InternpePage"));
const VelammalPage = lazy(() => import("./QualificationPage/VelammalPage"));
const AyyanarPage = lazy(() => import("./QualificationPage/AyyanarPage"));
const RestaurantPage = lazy(() => import("./ProjectsPage/RestaurantPage"));
const ChatApplicationPage = lazy(() => import("./ProjectsPage/ChatApplicationPage"));
const WordPressPage = lazy(() => import("./ProjectsPage/WordPressPage"));
const ECommercePage = lazy(() => import("./ProjectsPage/ECommercePage"));
const EBillPage = lazy(() => import("./ProjectsPage/EBillPage"));

function Home() {
  return (
    <PageTransition>
      <section id="about" className="relative">
        <About />
      </section>
      <section id="qualification" className="relative">
        <Qualification />
      </section>
      <section id="skills" className="relative">
        <Skills />
      </section>
      <section id="projects" className="relative">
        <Project />
      </section>
      <section id="publication" className="relative">
        <Publication />
      </section>
    </PageTransition>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cognizant" element={<PageTransition><CognizantPage /></PageTransition>} />
          <Route path="/senchola" element={<PageTransition><SencholaPage /></PageTransition>} />
          <Route path="/internpe" element={<PageTransition><InternpePage /></PageTransition>} />
          <Route path="/velammal" element={<PageTransition><VelammalPage /></PageTransition>} />
          <Route path="/ayyanar" element={<PageTransition><AyyanarPage /></PageTransition>} />
          <Route path="/Restaurant" element={<PageTransition><RestaurantPage /></PageTransition>} />
          <Route path="/ChatApplication" element={<PageTransition><ChatApplicationPage /></PageTransition>} />
          <Route path="/WordPress" element={<PageTransition><WordPressPage /></PageTransition>} />
          <Route path="/ECommerce" element={<PageTransition><ECommercePage /></PageTransition>} />
          <Route path="/EBill" element={<PageTransition><EBillPage /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onFinish={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen bg-cream overflow-x-hidden"
          >
            <AnimatedBackground />
            <ScrollProgress />
            <Header />
            <main className="relative z-10">
              <AnimatedRoutes />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
