import { useState } from 'react';
import { Menu } from '../../../components/ui/menu';
import { Button } from '../../../components/ui/button';



interface NavProps {
    className:string;
    open: boolean;

}

const Nav = ({className, open }:NavProps) => {

    const [screen, setScreen] = useState<"lg" | "sm" | "md" | undefined>("sm")

    return (
        <Menu.Root open={open}>
            <Menu.Lista >
                <Menu.Link  label="Home"/>
            </Menu.Lista>
            <Menu.Lista>
                <Menu.Link  label="Sobre"/>
            </Menu.Lista>
            <Menu.Lista>
                <Menu.Link  label="Planos"/>
            </Menu.Lista>
            <Menu.Lista>
                <Menu.Link  label="Dúvidas"/>
            </Menu.Lista>
        </Menu.Root>
    );
}

export default Nav;