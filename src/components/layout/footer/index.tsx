import LazyImage from "../../../components/LazyImage";
import { CONSTANTS } from "../../../config/constants";

const Footer = () => {
    return (
        <section className="w-full bg-[#0E0016] h-auto py-[100px] px-20 max-md:px-6">
            <article className="border-t border-gray-700 w-full ">
                <LazyImage src={CONSTANTS.logo} alt="background" className="absolute max-md:mt-[-25px] mt-[-35px] bg-[#0E0016] w-[350px] max-md:w-[200px] h-[80px]  bg-contain bg-no-repeat bg-top" />
                <div className="flex">
                    <div className="w-[30%]">
                        <span>BlackConversa é o seu construtor de fluxos, criado para você e por você</span>
                    </div>
                    <div className="w-[70%]">

                    </div>
                </div>
            </article>

        </section>
    );
}

export default Footer;