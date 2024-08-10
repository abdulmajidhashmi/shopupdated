import { motion } from "framer-motion";
import "./Main.css";

const Animations = (Component) => {
  return () => (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: true ? "0%" : "100%" }}
      transition={{ duration: 0.5 ,ease:"easeOut"}}
      className="slidein"
    >
      <Component />
    </motion.div>
  );
};

export default Animations;
