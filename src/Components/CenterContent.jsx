import Image from "./Image";
import heading from "../../src/assets/img/HeadingStyle.png";
import { motion } from "motion/react";

function CenterContent(pass) {
  const { centerTitle, centerSubTitle, addClass } = pass;
  return (
    <div
      className={`flex flex-col items-center relative z-40 ${
        addClass ? "mb-11" : "mb-12 md:mb-24"
      }`}
    >
      <h3 className="mb-5 relative z-40 text-center">
        {centerTitle}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 -z-50 hidden sm:block"
        >
          <Image addImg={heading} />
        </motion.span>
      </h3>
      <p className="max-w-[740px] text-center">{centerSubTitle}</p>
    </div>
  );
}

export default CenterContent;
