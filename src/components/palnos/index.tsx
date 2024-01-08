import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import LazyImage from "../../components/LazyImage";
import { PLANOS } from "../../config/planos";
import { SiVerizon } from "react-icons/si";
import { Plano } from "../../types/produtos";




const swift = {
    mensal:{
        active:"rounded-full w-[50%] h-[40px] text-[16px] text-gray-800 font-bold bg-gradient-to-r from-gray-50 to-[#A46FF3] flex items-center justify-center p-0",
        noactive:"rounded-full w-[50%] h-[40px] text-[16px] text-gray-50 font-bold bg-transparent hover:bg-gray-500 flex items-center justify-center p-0",
    },
    anual:{
        active:"rounded-full w-[50%] h-[40px] text-[16px] text-gray-800 font-bold bg-gradient-to-r from-gray-50 to-[#A46FF3] flex items-center justify-center p-0",
        noactive:"rounded-full w-[50%] h-[40px] text-[16px] text-gray-50 font-bold bg-transparent hover:bg-gray-500 flex items-center justify-center p-0"
    }
}


const PlanosComponent = () => {
    const [qtd, setQtd] = useState<number>(1);
    const [starter, setStarter] = useState<number>(1);
    const [mensal, setMensal] = useState<boolean>(true);

    const setValorStart = (valorDeconto: number, valorSemDesconto: number, valorAno: number) => {
        if (valorDeconto == 0) {
            return valorSemDesconto * qtd
        } else {
            return valorDeconto * qtd
        }
    }

    useEffect(() => {

    }, [])

    return (
        <article className="flex flex-col items-center justify-start">
            <div className="flex items-center justify-between w-[200px] h-[50px] p-[5px] rounded-full  bg-gradient-to-t from-[#180A1F] via-[#10011A] to-[#180A1F]">
                <Button onClick={() => qtd == 1 ? setQtd(qtd) : setQtd(qtd - 1)} className="rounded-full w-[40px] h-[40px] text-[20px] text-gray-800 font-bold bg-gradient-to-r from-gray-50 to-[#A46FF3] flex items-center justify-center p-0">-</Button>
                <span className="text-[20px] text-gray-50 font-semibold">{qtd}</span>
                <Button onClick={() => setQtd(qtd + 1)} className="p-0 rounded-full w-[40px] h-[40px]  text-[20px] text-gray-100 font-bold flex items-center justify-center bg-gradient-to-r from-[#6127BC] to-[#A46FF3]">+</Button>

            </div>
            <p className="text-gray-600 text-[14px] text-center">Número adicional: R$ 97,00</p>
            <div className="pt-10 flex items-center justify-center gap-20">
                {
                    PLANOS.map((plano: Plano, index: number) => {
                        if (index % 2 == 0) {
                            return (<div key={plano.id} className="w-[380px] p-8 bg-[#1c0f29]  rounded-lg boder-1 border-[#2f124d]">
                                <div className="flex items-center justify-start gap-4">
                                    <LazyImage src={plano.icon} alt="background" imageSize="100%" className=" w-[40px] h-[40px]  bg-contain bg-no-repeat bg-left" />
                                    <span className="text-[40px] font-semibold text-gray-50">{plano.titulo}</span>
                                </div>
                                <p className="text-left text-[14px] text-gray-600">{plano.subTitle}</p>
                                {
                                    plano.valorMesComDesconto == 0 ?
                                        <div className="h-[100px]"></div> :
                                        <div className="flex items-center justify-start gap-4 h-[100px] pb-2">
                                            <p className="text-[18px] text-gray-50">De</p>
                                            <p className="line-through text-[18px] text-red-700 font-semibold">R$ 147,00</p>
                                            <p className="text-[18px] text-gray-50"> por:</p>
                                        </div>

                                }
                                <div className="flex items-end justify-start gap-4">
                                    <span className="text-[30px] text-gray-50">R$
                                        <span className="text-[60px] text-gray-50 font-bold p-0 mx-2">{setValorStart(plano.valorMesComDesconto, plano.valorMesSemDesconto, plano.valorAno)}</span>
                                        <span className=" text-[16px] text-gray-500"> /Primeiro Mês</span>
                                    </span>
                                </div>
                                <div className="py-6">
                                    <span className="text-[14px] font-semibold text-gray-50">Incluido no plano {plano.titulo}:</span>
                                </div>

                                {
                                    plano.include.map((inc, i) => (
                                        <div key={i} className="flex items-center justify-start gap-4 py-2">
                                            <SiVerizon className="fill-[#510FAA]" />
                                            <span className="text-[12px] text-gray-600">{inc}</span>
                                        </div>
                                    ))
                                }
                            </div>);
                        } else {
                            return (<div key={plano.id} className="w-[380px] p-8  bg-gradient-to-t from-[#2f124d] via-[#180A1F] to-[#180A1F] rounded-lg border-2 border-[#5f2f8d] shadow-[#2f124d] shadow-lg">
                                <div className="flex items-center justify-start gap-4">
                                    <LazyImage src={plano.icon} alt="background" imageSize="100%" className=" w-[40px] h-[40px]  bg-contain bg-no-repeat bg-left" />
                                    <span className="text-[40px] font-semibold text-gray-50">{plano.titulo}</span>
                                </div>
                                <p className="text-left text-[14px] text-gray-600">{plano.subTitle}</p>
                                {
                                    plano.valorMesComDesconto == 0 ?
                                        <div className="h-[100px]"></div> :
                                        <div className="flex items-center justify-start gap-4 h-[100px] pb-2">
                                            <p className="text-[18px] text-gray-50">De</p>
                                            <p className="line-through text-[18px] text-red-700 font-semibold">R$ 147,00</p>
                                            <p className="text-[18px] text-gray-50"> por:</p>
                                        </div>

                                }
                                <div className="flex items-end justify-start gap-4">
                                    <span className="text-[30px] text-gray-50">R$
                                        <span className="text-[60px] text-gray-50 font-bold p-0 mx-2">{setValorStart(plano.valorMesComDesconto, plano.valorMesSemDesconto, plano.valorAno)}</span>
                                        <span className=" text-[16px] text-gray-500"> /Primeiro Mês</span>
                                    </span>
                                </div>
                                <div className="py-6">
                                    <span className="text-[14px] font-semibold text-gray-50">Incluido no plano {plano.titulo}:</span>
                                </div>

                                {
                                    plano.include.map((inc, i) => (
                                        <div key={i} className="flex items-center justify-start gap-4 py-2">
                                            <SiVerizon className="fill-[#510FAA]" />
                                            <span className="text-[12px] text-gray-600">{inc}</span>
                                        </div>
                                    ))
                                }
                            </div>);
                        }
                    }

                    )
                }

            </div>
            <div className="flex items-center justify-between w-[200px] h-[50px] p-[5px] rounded-full  bg-gradient-to-t from-[#180A1F] via-[#10011A] to-[#180A1F] mt-[80px]">
                <span className="bg-[#510FAA] text-gray-50 rounded-full flex items-center justify-center text-[11px] font-bold absolute h-[25px] w-[100px] mt-[-50px] ml-[100px]">2 Meses Grátis</span>
                <Button onClick={() => setMensal(!mensal)} className={mensal ? swift.mensal.active : swift.mensal.noactive}>Mensal</Button>
                <Button onClick={() => setMensal(!mensal)} className={mensal ? swift.anual.noactive : swift.anual.active}>Anual</Button>
            </div>

        </article>
    );
}

export default PlanosComponent;