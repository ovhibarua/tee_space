import Button from "./Button";
import Image from "./Image";
import { motion } from "motion/react";

function Card(pass) {
  const { img, name, brand, price, unic, meterial } = pass;
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      key={unic}
      id="cardHover"
      className="cursor-pointer rounded-xl overflow-hidden"
    >
      <div className="mb-2 h-74 lg:h-fit overflow-hidden">
        <Image addImg={img} />
      </div>
      <div className="px-4 py-2">
        <div className="flex flex-col lg:flex-row gap-2 md:gap-0 justify-between items-start lg:items-center mb-4">
          <h6 className="text-stone-900 text-[16px]">{name}</h6>
          <h6 className=" font-extrabold">{`$ ${price}`}</h6>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-zinc-400">{`Brand: ${brand}`}</span>
            <span className="text-zinc-400">{`Meterial: ${meterial}`}</span>
          </div>
          <div>
            <Button classAdd={`text-xs p-0.5`} btnText={`Add`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
