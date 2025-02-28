import BrandSection from "./BrandSection";
import Comment from "./Comment";
import Contact from "./Contact";
import Custom from "./Custom";
import Customize from "./Customize";
import Header from "./Header";
import Ideas from "./Ideas";
import PickUp from "./PickUp";

function Home() {
  return (
    <>
      <Header />
      <BrandSection />
      <Custom />
      <Ideas />
      <PickUp />
      <Customize />
      <Comment />
      <Contact />
    </>
  );
}

export default Home;
