import CenterContent from "../CenterContent";
import Image from "../Image";
import customImg from "../../../src/assets/img/Main.png";
import customImg2 from "../../../src/assets/img/Main2.png";
import customImg3 from "../../../src/assets/img/Main3.png";
import Content from "../Content";
import { motion } from "motion/react";

function Custom() {
  return (
    <section className="container mx-auto py-24">
      <CenterContent
        centerTitle={`How to create custom shirts`}
        centerSubTitle={`Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,cowec tetopak ec tetur duis necgi`}
      />
      <div className="flex gap-16 justify-center items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image addImg={customImg} />
        </motion.div>
        <p className="p-2 font-extrabold w-14 h-14 rounded-full shadow-lg flex justify-center items-center">
          1
        </p>
        <Content
          title={`Add your shirt design`}
          subTitle={`Lorem ipsum det, cowec tetur duis nec fringi det, consec t eturlagix adipiscing eliet, cowec tetopak nec fringi det adipiscing`}
        />
      </div>
      <div className="flex gap-16 justify-center items-center mb-20">
        <Content
          title={`Custom artwork &review`}
          subTitle={`Lorem ipsum det, cowec tetur duis nec fringi det, consec t eturlagix adipiscing eliet, cowec tetopak nec fringi det adipiscing`}
        />
        <p className="p-2 font-extrabold w-14 h-14 rounded-full shadow-lg flex justify-center items-center">
          2
        </p>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image addImg={customImg2} />
        </motion.div>
      </div>
      <div className="flex gap-16 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image addImg={customImg3} />
        </motion.div>
        <p className="p-2 font-extrabold w-14 h-14 rounded-full shadow-lg flex justify-center items-center">
          3
        </p>
        <Content
          title={`Enjoy your product`}
          subTitle={`Lorem ipsum det, cowec tetur duis nec fringi det, consec t eturlagix adipiscing eliet, cowec tetopak nec fringi det adipiscing`}
        />
      </div>
    </section>
  );
}

export default Custom;
