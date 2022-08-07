import { motion } from "framer-motion";

const AnimateInView = ({ content, className }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        duration: 1.2,

        stiffness: 50,
      }}
    >
      {content}
    </motion.section>
  );
};

export default AnimateInView;
