const Nav = () => {
    return (
        <nav className="w-full">
            <ul className="flex items-center justify-center">
                <li onClick={()=>alert("ok")} className="text-[#6A7082] hover:text-[#E2E5F1] text-[15px] border-b-[1px] px-4 py-2 border-[#540FB1]">Home</li>
                <li className="text-[#6A7082] hover:text-[#E2E5F1] text-[15px] border-b-[1px] px-4 py-2 border-[#540FB1]">Sobre</li>
                <li className="text-[#6A7082] hover:text-[#E2E5F1] text-[15px] border-b-[1px] px-4 py-2 border-[#540FB1]">Planos</li>
                <li className="text-[#6A7082] hover:text-[#E2E5F1] text-[15px] border-b-[1px] px-4 py-2 border-[#540FB1]">Dúvidas</li>
            </ul>
        </nav>
    );
}

export default Nav;