import { useState } from "react";
import { Button } from "../../components/ui/button";

const PlanosComponent = () => {
    const [qtd, setQtd] = useState<number>(1);

    return (
        <article>
            <div className="flex items-center justify-between w-[200px] h-[50px] p-[5px] rounded-full  bg-gradient-to-t from-[#180A1F] via-[#10011A] to-[#180A1F]">
                <Button onClick={() => qtd == 1 ? setQtd(qtd) : setQtd(qtd - 1)} className="rounded-full w-[40px] h-[40px] text-[20px] text-gray-800 font-bold bg-gradient-to-r from-gray-50 to-[#A46FF3] flex items-center justify-center p-0">-</Button>
                <span className="text-[20px] text-gray-50 font-semibold">{qtd}</span>
                <Button onClick={() => setQtd(qtd + 1)} className="p-0 rounded-full w-[40px] h-[40px]  text-[20px] text-gray-100 font-bold flex items-center justify-center bg-gradient-to-r from-[#6127BC] to-[#A46FF3]">+</Button>

            </div>
            <p className="text-gray-600 text-[14px] text-center">Número adicional: R$ 97,00</p>
            <div>
                <div >

                </div>

            </div>
        </article>
    );
}

export default PlanosComponent;