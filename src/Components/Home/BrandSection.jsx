import Image from "../Image";

const brandLogo = [
  "/assets/img/logo-feedly.png",
  "/assets/img/logo-hopin.png",
  "/assets/img/logo-lattice.png",
  "/assets/img/logo-spotify.png",
  "/assets/img/logo-upwork.png",
];
function BrandSection() {
  return (
    <section className="bg-[#F5F5F5] px-5 lg:p-0">
      <div className="container mx-auto flex flex-col items-center py-12 lg:py-24">
        <h5 className="text-center max-w-[657px] mb-8">
          “We've got custom T-shirts in a range of fits and sizes, so everyone
          can wear your brand or message.”
        </h5>
        <div className="flex justify-between items-center">
          {brandLogo.map((item, id) => (
            <div key={id}>
              <Image addImg={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSection;
