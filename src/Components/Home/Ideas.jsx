import Image from "../Image";
import bnnr24 from "../../assets/img/banner-24.png.png";
import bnnr25 from "../../assets/img/banner-25.png.png";
import Content from "../Content";
import Button from "../Button";
import CenterContent from "../CenterContent";
import { motion } from "motion/react";
const arrBox = [
  {
    boxTitle: "Premium quality custom t-shirts",
    boxPara:
      "Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet",
  },
  {
    boxTitle: "Easy to create & customize",
    boxPara:
      "Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet",
  },
  {
    boxTitle: "Thousands of free templates",
    boxPara:
      "Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet",
  },
  {
    boxTitle: "Free standard shipping",
    boxPara:
      "Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet",
  },
];

function Ideas() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="container mx-auto px-5 lg:px-0 py-12 lg:py-24">
        <div className="flex gap-10 md:gap-20 justify-start md:justify-center items-center mb-28">
          <div className="w-[50%] hidden sm:block">
            <Image addImg={bnnr24} />
          </div>
          <div className="max-w-[400px]">
            <Content
              addClass={"mb-8"}
              title={`Free and easy way to bring your ideas to life`}
              subTitle={`Lorem ipsum det, cowec tetur duis necgi det, consec teturlagix adipiscing eliet, cowec tetopak`}
            />
            <Button btnText={`Get Started`} />
          </div>
        </div>
        <CenterContent
          centerTitle={`T-shirt printing made easy.`}
          centerSubTitle={`Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec tetopak`}
        />
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="flex flex-col gap-4">
            {arrBox.map((item, id) => (
              <>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 40 }}
                  transition={{ duration: 0.4 }}
                  key={id}
                  className="hover:bg-white text-center md:text-start p-6 hover:rounded-xl hover:shadow-gray-200 hover:shadow-lg"
                >
                  <h6 className="mb-2 w-[350px]">{item.boxTitle}</h6>
                  <p className="text-sm w-[350px]">{item.boxPara}</p>
                </motion.div>
              </>
            ))}
          </div>
          <div className="w-full md:w-[50%]">
            <Image addImg={bnnr25} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ideas;
