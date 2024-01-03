import { Button } from "../../ui/button";
import { CONSTANTS } from "../../../config/constants";
import LazyImage from "../../LazyImage";


const Header = () => {
    return (
        <header className="fixed z-[999] left-[75px] right-[75px] top-[20px] h-[80px]  backdrop-blur-lg bg-[#20003B] bg-opacity-15 border border-[#352740] rounded-lg flex items-center justify-between px-10">
                <LazyImage src={CONSTANTS.logo} alt={""} className="w-[180px] h-[30px] bg-cover bg-center bg-no-repeat"/>
                    <nav className="w-full">
                      <ul className="flex items-center justify-end">
                        <li className="text-[#6A7082 hover:text-[#E2E5F1] text-[13px]">Home</li>
                        <li>Sobre</li>
                        <li>Planos</li>
                        <li>Dúvidas</li>
                      </ul>
                    </nav>
                <div>
                    <Button className="px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]">LOGIN</Button>
                </div>
            
        </header>
    );
}

export default Header;