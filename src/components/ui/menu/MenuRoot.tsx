import { cn } from "../../../lib/utils";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface MenuRootProps extends VariantProps<typeof menu> {
    className?:string;
    children:ReactNode;
}

const menu = tv({
    base: "flex  w-full max-md:hidden items-center justify-center",
    variants: {
        open: {
            true: "left-0",
            false: "left-[-50px]"
        },
    },
    

});


export const MenuRoot = ({ className, children, open=true}:MenuRootProps) => {
    return (
        <nav className="w-full max-md:hidden">
            <ul className={cn(menu({open}), className)}>
               {children}
            </ul>
        </nav>
    );
}

