import { cn } from "../../../lib/utils";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";




interface MenuListaProps extends VariantProps<typeof menuList> {
    className?: string;
    children: ReactNode;
}

const menuList = tv({
    base: "cursor-pointer text-[#6A7082] hover:text-[#E2E5F1] text-[15px] w-[80px] h-[40px] border-b-[1px] border-transparent flex items-center justify-center",
    variants: {
        open: {
            true: "cursor-pointer text-[#6A7082] hover:text-[#E2E5F1] text-[15px]  max-md:w-full h-[40px]  flex items-center justify-center",
            false: "hidden",
            null:"max-md:hidden"
        },
    },
})

export const MenuLista = ({ className, children, open}: MenuListaProps) => {
    return (
        <li className={cn(menuList({ open }), className)}>
            {children}
        </li>
    );
}

