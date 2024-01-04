import { useState } from 'react';
import { Menu } from '../../../components/ui/menu';
import { Button } from '../../../components/ui/button';



interface NavProps {
    className: string;
    open: boolean | "null";

}

const Nav = ({ className, open }: NavProps) => {

    const [screen, setScreen] = useState<"lg" | "sm" | "md" | undefined>("sm")

    return (
        <Menu.Root open={open}>

            <Menu.Lista open={open}>
                <Menu.Link label="Home" />
            </Menu.Lista>
            <Menu.Lista open={open}>
                <Menu.Link label="Sobre" />
            </Menu.Lista>
            <Menu.Lista open={open}>
                <Menu.Link label="Planos" />
            </Menu.Lista>
            <Menu.Lista open={open}>
                <Menu.Link label="Dúvidas" />
            </Menu.Lista>
            <div className="md:hidden w-full">
                <Button className="py-[20px] w-full border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]">LOGIN</Button>
            </div>        
        </Menu.Root>
    );
}

export default Nav;