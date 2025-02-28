import Button from "../Button";
import Content from "../Content";
import { motion } from "motion/react";
const cusBnnrContent = [
  {
    title: "Create your own custom products online!",
    sub: "Free and easy way to bring your ideas to life",
  },
];

function CustomBnnr() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      id="pickBnnr3"
      className="w-full overflow-hidden rounded-xl px-14 py-10"
    >
      {cusBnnrContent.map((item, id) => (
        <Content
          addClass={`max-w-[400px] mb-8`}
          key={id}
          title={item.title}
          subTitle={item.sub}
        />
      ))}
      <Button btnText={`Order Custom Shirts`} />
    </motion.div>
  );
}

export default CustomBnnr;
