import Image from "../Image";
import { motion } from "motion/react";

function CustomCard(pass) {
  const { cusImg, cusTitle, cusSubTitle } = pass;
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="px-6 sm:px-8 py-7 sm:py-9 rounded-xl shadow-sm shadow-slate-200 bg-white"
    >
      <div className="w-14 h-14 mb-7">
        <Image addImg={cusImg} />
      </div>
      <h6 className="mb-5">{cusTitle}</h6>
      <p className="text-[16px]">{cusSubTitle}</p>
    </motion.div>
  );
}

export default CustomCard;
