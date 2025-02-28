import Button from "../Button";
import Content from "../Content";
import CustomBnnr from "./CustomBnnr";
import CustomCard from "./CustomCard";
const customData = [
  {
    title: "NO Die & plate charges",
    subTitle:
      "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con",
    img: "/assets/img/Vector.png",
  },
  {
    title: "High quality offset printing",
    subTitle:
      "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con",
    img: "/assets/img/Vector2.png",
  },
  {
    title: "Secure payment",
    subTitle:
      "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con",
    img: "/assets/img/Vector3.png",
  },
  {
    title: "Custom size & style",
    subTitle:
      "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con",
    img: "/assets/img/Vector4.png",
  },
  {
    title: "Fast & free delivery",
    subTitle:
      "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con",
    img: "/assets/img/Vector5.png",
  },
  {
    title: "Low minimum order quantity",
    subTitle:
      "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con",
    img: "/assets/img/Vector6.png",
  },
];

function Customize() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="py-12 lg:py-24 px-5 lg:px-0 container mx-auto flex flex-col xl:flex-row gap-14 xl:gap-28">
        <div className="w-full xl:w-[30%] mt-0 xl:mt-14">
          <Content
            addClass={`mb-10`}
            title={`Why customize products with TeeSpace?`}
            subTitle={`Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet duis necgi det, con`}
          />
          <Button btnText={`View All Features`} />
        </div>
        <div className="w-full xl:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {customData.map((item, id) => (
            <CustomCard
              key={id}
              cusImg={item.img}
              cusTitle={item.title}
              cusSubTitle={item.subTitle}
            />
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <CustomBnnr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customize;
