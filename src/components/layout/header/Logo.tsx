import LazyImage from "../../../components/LazyImage";
import { CONSTANTS } from "../../../config/constants";

const Logo = () => {
    return <LazyImage src={CONSTANTS.logo} alt={"Blackconversa"} className="w-[350px] max-md:w-[320px] max-md:h-[35px] h-[30px] bg-contain bg-end bg-no-repeat " />

}

export default Logo;