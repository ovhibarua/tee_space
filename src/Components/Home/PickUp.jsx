import Card from "../Card";
import CenterContent from "../CenterContent";
import cardJs from "../../Data/Card.json";
import PickUpBnnr from "./PickUpBnnr";
import { motion } from "motion/react";

function PickUp() {
  return (
    <section className="container mx-auto px-5 lg:px-0 py-12 lg:py-24">
      <CenterContent
        centerTitle={`Our picks for you`}
        centerSubTitle={`Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec tetopak`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8 mb-12 lg:mb-24">
        {cardJs.map((item, id) => (
          <Card
            key={id}
            img={item.img}
            name={item.product_name}
            price={item.price}
            brand={item.brand}
            meterial={item.material}
          />
        ))}
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full xl:w-[50%]"
        >
          <PickUpBnnr
            addId={`pickBnnr`}
            pickTit={`Thousands of free templates`}
            pickSub={`Free and easy way to bring your ideas to life`}
            pickbtn={`Explore More`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-full xl:w-[50%]"
        >
          <PickUpBnnr
            addId={`pickBnnr2`}
            pickTit={`Create your unique style`}
            pickSub={`Free and easy way to make your creative to life`}
            pickbtn={`Shop Now`}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default PickUp;
