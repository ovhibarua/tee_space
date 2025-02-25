import Image from "../Image";

const brandLogo = [
  "/src/assets/img/logo-feedly.png",
  "/src/assets/img/logo-hopin.png",
  "/src/assets/img/logo-lattice.png",
  "/src/assets/img/logo-spotify.png",
  "/src/assets/img/logo-upwork.png",
];
function BrandSection() {
  return (
    <section className="flex flex-col items-center px-10 py-16 bg-[#F5F5F5]">
      <h5 className="text-center max-w-[657px] mb-8">
        “We've got custom T-shirts in a range of fits and sizes, so everyone can
        wear your brand or message.”
      </h5>
      <div className="flex justify-between items-center">
        {brandLogo.map((item, id) => (
          <div key={id}>
            <Image addImg={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandSection;
