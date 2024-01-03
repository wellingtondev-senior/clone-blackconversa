import { Link, animateScroll as scroll } from 'react-scroll';


const Nav = ({ }) => {


    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500, // Tempo da animação em milissegundos
            smooth: 'easeInOutQuart', // Tipo de easing
        });
    };

    return (
        <nav className="w-full">
            <ul className="flex items-center justify-center gap-4">
                <li className="cursor-pointer text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center">
                    <Link
                        activeClass="border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Home
                    </Link>
                </li>
                <li className="cursor-pointer text-[rgb(106,112,130)] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center">
                    <Link
                        activeClass="border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]"
                        to="sobre"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Sobre
                    </Link>
                </li>
                <li className="cursor-pointer text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center">
                    <Link
                        activeClass="border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]"
                        to="planos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Planos
                    </Link>
                </li>
                <li className="cursor-pointer text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center">
                    <Link
                        activeClass="border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]"
                        to="duvidas"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        Dúvidas
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;