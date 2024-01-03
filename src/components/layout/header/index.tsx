import { Button } from "../../ui/button";
import { CONSTANTS } from "../../../config/constants";
import LazyImage from "../../LazyImage";
import Nav from "./Nav";
import Logo from "./Logo";


const Header = () => {
  return (
    <header className="fixed z-[999] left-[75px] right-[75px] top-[20px] h-[80px]  backdrop-blur-lg bg-[#20003B] bg-opacity-15 border border-[#352740] rounded-lg flex items-center justify-between px-10">
      <Logo />
      <Nav />
      <div>
        <Button className="px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]">LOGIN</Button>
      </div>

    </header>
  );
}

export default Header;