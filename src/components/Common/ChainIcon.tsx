import React from "react";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const ChainIcon = () => {
  return (
    <div className="flex items-center gap-2">
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-12 h-12 bg-primary rounded-full cursor-pointer"
    >
      <FaLink className="text-white text-xl" />
    </motion.div>
    <span className="text-ms text-primary">{8}</span>
    </div>
  );
};

export default ChainIcon;