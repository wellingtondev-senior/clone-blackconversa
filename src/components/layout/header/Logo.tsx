import LazyImage from "../../../components/LazyImage";
import { CONSTANTS } from "../../../config/constants";

const Logo = () => {
    return <LazyImage src={CONSTANTS.logo} alt={""} className="w-[280px] max-md:h-[40px] h-[30px] bg-cover bg-center bg-no-repeat" />

}

export default Logo;