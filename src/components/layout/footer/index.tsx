import LazyImage from "../../../components/LazyImage";
import { CONSTANTS } from "../../../config/constants";

const Footer = () => {
    return (
        <section className="w-full bg-[#0E0016] h-auto py-[100px] px-20">
            <article className="border-t border-gray-700 w-full ">
                <LazyImage src={CONSTANTS.logo} alt="background" className="absolute mt-[-35px] bg-[#0E0016] w-[350px] h-[80px]  bg-contain bg-no-repeat bg-top" />

            </article>

        </section>
    );
}

export default Footer;