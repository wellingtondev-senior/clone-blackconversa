import { CONSTANTS } from "../../../config/constants";
import LazyImage from "../../../components/LazyImage";
import { Button } from "../../../components/ui/button";


interface SobreProps {
    id: string
}

const Sobre = ({ id }: SobreProps) => {
    return (
        <section id={id} className="w-full min-h-screen bg-[#0F0019] flex items-center justify-between px-20 pt-[100px] pb-[100px]">
            <LazyImage src={CONSTANTS.group} alt="background" imageSize="100%" className="w-[50%] max-md:w-[370px] max-md:mt-10 max-md:h-[400px] h-[600px] px-6 bg-cover bg-no-repeat bg-top" />
            <div className="flex flex-col items-start justify-start w-[55%] gap-4 pl-10">
            <Button className="cursor-default px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]" >Sobre nós</Button>
                <h4 className="text-white text-[45px]">O que é um chatbot e porque estou perdendo de 30% a 60% de faturamento amais todos os meses</h4>
                <p className="text-[15px] text-gray-500 leading-loose">O chatbot é uma ferramenta essencial para os negócios de hoje, capaz de fazer com que seus clientes sejam atendidos com agilidade e eficiência sem que você precise estar o tempo todo no celular.
                    Através da nossa ferramenta que simula o atendimento humano quase que perfeitamente nossa ferramenta é capaz de manter uma conversa pelo Whatsapp e guiar o seu cliente até a venda, isso a qualquer hora do dia, 24 horas por dia 7 dias por semana!</p>
            <p className="font-bold text-[15px] text-gray-500 leading-loose">
            Nossa ferramenta sozinha pode facilmente substituir 6 funcionários, gerando uma economia de R$7290 reais, não fica doente, não te cobra décimo terceiro e trabalha 24 horas pelo bem do seu negócio!
            </p>
            </div>
        </section>
    );
}

export default Sobre;