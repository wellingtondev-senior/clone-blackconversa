import { useState } from 'react';
import { Menu } from '../../../components/ui/menu';
import { Button } from '../../../components/ui/button';



interface NavProps {
    className:string 
}

const Nav = ({className }:NavProps) => {

    const [screen, setScreen] = useState<"lg" | "sm" | "md" | undefined>("sm")

    return (
        <Menu.Root>
            <Menu.Lista>
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