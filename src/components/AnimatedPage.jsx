import { motion } from "framer-motion";

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}  // Start from right
      animate={{ opacity: 1, x: 0 }}   // Fade in to position
      exit={{ opacity: 0, x: -50 }}    // Exit to left
      transition={{ duration: 0.5, ease: "easeInOut" }} 
    >
      {children}
    </motion.div>
  );
};