import Button from "../Button";
import CenterContent from "../CenterContent";
import { motion } from "motion/react";
import Image from "../Image";
import bnnr from "../../assets/img/Link.png";
import bnnr2 from "../../assets/img/Link2.png";
import bnnr3 from "../../assets/img/Link3.png";
import bnnr4 from "../../assets/img/Link4.png";
import bnnr5 from "../../assets/img/Link5.png";
import bnnr6 from "../../assets/img/Link6.png";

function Contact() {
  return (
    <section className="bg-[#F4EBF9] relative overflow-hidden">
      <div className="py-12 lg:py-40 px-5 lg:px-0">
        <CenterContent
          addClass
          centerTitle={`Enjoy up your vacations in the best T-shirts`}
          centerSubTitle={`T-shirts that keep you moving.`}
        />
        <div className="flex items-center gap-5 justify-center relative z-40">
          <Button btnText={`Shop Now`} />
          <Button classAdd={`bg-white text-black`} btnText={`Contact Us`} />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-60 hidden lg:block"
      >
        <Image addImg={bnnr} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-10 w-38 lg:w-fit h-38 lg:h-fit"
      >
        <Image addImg={bnnr2} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true }}
        className="absolute right-50 top-0 hidden lg:block"
      >
        <Image addImg={bnnr3} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        viewport={{ once: true }}
        className="absolute left-60 xl:left-70 bottom-0 hidden lg:block"
      >
        <Image addImg={bnnr4} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
        className="absolute left-0 bottom-0 w-38 h-38 lg:w-fit lg:h-fit"
      >
        <Image addImg={bnnr5} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 hidden lg:block"
      >
        <Image addImg={bnnr6} />
      </motion.div>
    </section>
  );
}

export default Contact;
