import Image from "../Image";
import bnnr from "../../assets/img/ItemSlideshow-21.png";
import { motion } from "motion/react";

function HeaderBnnr() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="w-[800px]"
    >
      <Image addImg={bnnr} />
    </motion.div>
  );
}

export default HeaderBnnr;
