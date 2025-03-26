import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedPage } from "../components/AnimatedPage";
import { LeftNav } from "../components/LeftNav.jsx";
import { Analytics } from "../components/Analytics.jsx";
import { News } from "../components/News.jsx";
import { Reports } from "../components/Reports.jsx";
import { Settings } from "../components/Settings.jsx";

import "../styles/Usage.css";

export const Usage = () => {
  const location = useLocation();

  return (
    <div className="usage-page">
      {/* ✅ LeftNav stays fixed */}
      <LeftNav />

      {/* ✅ Only right-section content changes */}
      <div className="right-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<AnimatedPage><Analytics /></AnimatedPage>} />
              <Route path="/news" element={<AnimatedPage><News /></AnimatedPage>} />
              <Route path="/reports" element={<AnimatedPage><Reports /></AnimatedPage>} />
              <Route path="/settings" element={<AnimatedPage><Settings /></AnimatedPage>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
