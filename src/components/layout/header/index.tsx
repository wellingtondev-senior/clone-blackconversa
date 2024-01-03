import { Button } from "../../ui/button";
import { CONSTANTS } from "../../../config/constants";
import LazyImage from "../../LazyImage";
import Nav from "./Nav";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="fixed z-[999] left-[75px] right-[75px] top-[20px] h-[80px] max-md:left-[20px] max-md:right-[20px] backdrop-blur-lg bg-[#20003B] bg-opacity-15 border border-[#352740] rounded-lg flex items-center justify-between px-10">
      <Logo />
      <Nav className={""} />
      <div className=" max-md:hidden">
        <Button className="px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]">LOGIN</Button>
      </div>
      <div className=" md:hidden ">
        <Button className="max-md:px-4 px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]"><FaBars/></Button>
      </div>

    </header>
  );
}

export default Header;