import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import LazyImage from "../../components/LazyImage";
import { PLANOS } from "../../config/planos";

const PlanosComponent = () => {
    const [qtd, setQtd] = useState<number>(1);
    const [starter, setStarter ] = useState<number>(1);

  const setValorStart = (valor:number)=>{
     return valor*qtd
  }

    useEffect(()=>{

    },[])

    return (
        <article className="flex flex-col items-center justify-start">
            <div className="flex items-center justify-between w-[200px] h-[50px] p-[5px] rounded-full  bg-gradient-to-t from-[#180A1F] via-[#10011A] to-[#180A1F]">
                <Button onClick={() => qtd == 1 ? setQtd(qtd) : setQtd(qtd - 1)} className="rounded-full w-[40px] h-[40px] text-[20px] text-gray-800 font-bold bg-gradient-to-r from-gray-50 to-[#A46FF3] flex items-center justify-center p-0">-</Button>
                <span className="text-[20px] text-gray-50 font-semibold">{qtd}</span>
                <Button onClick={() => setQtd(qtd + 1)} className="p-0 rounded-full w-[40px] h-[40px]  text-[20px] text-gray-100 font-bold flex items-center justify-center bg-gradient-to-r from-[#6127BC] to-[#A46FF3]">+</Button>

            </div>
            <p className="text-gray-600 text-[14px] text-center">Número adicional: R$ 97,00</p>
            <div>
                <div className="pt-10">
                    <div className="w-[380px] p-8 bg-[#1B1026] rounded-lg border border-[#21132E]">

                        <div className="flex items-center justify-start gap-4">
                            <LazyImage src={PLANOS[0].icon} alt="background" imageSize="100%" className=" w-[40px] h-[40px]  bg-contain bg-no-repeat bg-left" />
                            <span className="text-[40px] font-semibold text-gray-50">STARTER</span>
                        </div>
                        <p className="text-left text-[14px] text-gray-600">Perfeito para quem esta iniciando</p>
                        <div className="flex items-center justify-start gap-4 pt-16 pb-2">
                            <p className="text-[18px] text-gray-50">De</p>
                            <p className="line-through text-[18px] text-red-700 font-semibold">R$ 147,00</p>
                            <p className="text-[18px] text-gray-50"> por:</p>
                        </div>
                        <div className="flex items-end justify-start gap-4">
                            <span className="text-[30px] text-gray-50">R$
                                <span className="text-[60px] text-gray-50 font-bold p-0 mx-2">{setValorStart(97.00)}</span>
                                <span className=" text-[16px] text-gray-500"> /Primeiro Mês</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
}

export default PlanosComponent;