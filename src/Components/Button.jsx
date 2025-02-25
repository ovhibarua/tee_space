import { motion } from "motion/react";
function Button(pass) {
  const { btnText, btnBg, submit } = pass;
  return (
    <motion.button
      id={btnBg}
      whileHover={{ scale: 1 }}
      whileTap={{ y: 4 }}
      className="px-5.5 py-2.5 rounded-xl cursor-pointer"
      type={submit}
    >
      {btnText}
    </motion.button>
  );
}

export default Button;
