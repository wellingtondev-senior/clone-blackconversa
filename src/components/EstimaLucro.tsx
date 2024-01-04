import * as Slider from '@radix-ui/react-slider';

export const EstimaLucro = ({ }) => {
    return (
        <div className="px-10 max-md:px-6">
            <div className="bg-[#1B1026] rounded-lg p-16 mt-10 max-md:p-4">
                <p className="text-white text-[25px] text-center pb-10">Calculadora de Lucro mensal com a Black Conversa</p>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500 text-center">Quantas vendas você faz por dia?</p>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5 "
                        defaultValue={[50]}
                        max={100}
                        step={1}>
                        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-[#5E24B7] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-[#5E24B7] shadow-[0_4px_16px] shadow-[#5f24b77a] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#5E24B7]"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <p className="text-gray-500 text-center">50</p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-10">
                    <p className="text-gray-500 text-center">Qual o valor médio de venda dos seus produtos?</p>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5 "
                        defaultValue={[50]}
                        max={100}
                        step={1}>
                        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-[#5E24B7] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-[#5E24B7] shadow-[0_4px_16px] shadow-[#5f24b77a] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#5E24B7]"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <p className="text-gray-500 text-center">50</p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-10">
                    <p className="text-gray-500 text-center">Quantos funcionários você tem na empresa?</p>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5 "
                        defaultValue={[50]}
                        max={100}
                        step={1}>
                        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-[#5E24B7] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-[#5E24B7] shadow-[0_4px_16px] shadow-[#5f24b77a] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#5E24B7]"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <p className="text-gray-500 text-center">50</p>
                </div>
                <div className='flex flex-col items-center gap-2 mt-10'>
                    <p className="text-gray-500 text-center">Sua empresa deixa de lucrar todos os meses em média:</p>
                    <div className="w-full rounded-full border border-gray-700 bg-[#5E24B7] text-center py-6 text-white text-[40px] font-semibold">R$ 11.727,21</div>
                </div>
                
            </div>

        </div>
    );
}

