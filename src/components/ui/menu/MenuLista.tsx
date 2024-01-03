import { cn } from "../../../lib/utils";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";




interface MenuListaProps extends VariantProps<typeof menuList> {
    className?: string;
    children: ReactNode
}

const menuList = tv({
    base: "cursor-pointer",
    variants: {
        screen: {
            lg: "text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center",
            md: "text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center",
            sm: "text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center"
        }
    
    },
    defaultVariants: {
        screen: "lg"
    }
})

export const MenuLista = ({ className, children, screen }: MenuListaProps) => {
    return (
        <li className={cn(menuList({ screen }), className)}>
            {children}
        </li>
    );
}

