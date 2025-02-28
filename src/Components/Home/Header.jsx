import HeaderBnnr from "./HeaderBnnr";
import HeaderContent from "./HeaderContent";
function Header() {
  return (
    <header className="container mx-auto px-5 lg:px-0 py-8 md:py-12 lg:py-20 flex justify-between items-center">
      <HeaderContent />
      <HeaderBnnr />
    </header>
  );
}

export default Header;
