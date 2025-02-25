import HeaderBnnr from "./HeaderBnnr";
import HeaderContent from "./HeaderContent";
function Header() {
  return (
    <header className="container mx-auto py-20 flex justify-between items-center">
      <HeaderContent />
      <HeaderBnnr />
    </header>
  );
}

export default Header;
