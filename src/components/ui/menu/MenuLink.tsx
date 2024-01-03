import { cn } from '../../../lib/utils';
import { Link, animateScroll as scroll } from 'react-scroll';
import { VariantProps, tv } from 'tailwind-variants';


interface MenuLinkProps extends VariantProps<typeof menuLink>  {
    label: string
    className?:string
}


const menuLink = tv({
    variants:{
        screen:{
            sm:"border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]",
            md:"border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]",
            lg:"border-b-[1px]  border-[#540FB1] w-[80px] h-[40px] flex items-center justify-center text-[#E2E5F1]"
        }
    },
    defaultVariants:{
        screen:"lg"
    }
})

export const MenuLink = ({ label , className, screen}: MenuLinkProps) => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500, // Tempo da animação em milissegundos
            smooth: 'easeInOutQuart', // Tipo de easing
        });
    };
    function removerAcentos(str:string) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return (
        <Link
            activeClass={cn(menuLink({screen}), className)}
            to={removerAcentos(label.toLowerCase())}
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
        >
            {label}
        </Link>
    );
}

