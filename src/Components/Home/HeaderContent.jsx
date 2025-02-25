import Image from "../Image";
import style from "../../assets/img/before_mask-group.png";
import Button from "../Button";
import CountUp from "react-countup";
import { motion } from "motion/react";

function HeaderContent() {
  return (
    <div>
      <span className="text-[#B479D9] py-2 font-bold px-4 rounded-3xl bg-[#F4EBF9] inline-block mb-5">
        Create your own
      </span>
      <h1 className="relative w-fit mb-6">
        Make the most <br /> of printing
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute top-[68px] right-0"
        >
          <Image addImg={style} />
        </motion.span>
      </h1>
      <p className="mb-10 max-w-[720px]">
        What’s more, we do it right! A full administration printing background.
        Print shirts for yourself or your online business
      </p>
      <div className="flex items-center gap-6 mb-14">
        <Button btnText={`Shop Now`} />
        <span className="flex items-center gap-2.5 bg-none text-black text-[16px] font-bold cursor-pointer">
          How We Work
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>
        </span>
      </div>
      <div className="flex items-center">
        <div className="pr-8 border-r-[1px] border-[#CCCCCC]">
          <h2>
            <CountUp
              className=" text-[48px] text-black font-bold leading-12"
              start={0}
              end={4}
              duration={2.75}
            />
            k+
          </h2>
          <p>Collections</p>
        </div>
        <div className="pl-8">
          <h2>
            <CountUp
              className=" text-[48px] text-black font-bold leading-12"
              start={0}
              end={9}
              duration={2.75}
            />
            k+
          </h2>
          <p>items trusted to deliver</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
