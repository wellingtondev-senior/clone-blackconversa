import { Button } from "../../../components/ui/button";

interface PlanosProps {
    id: string
}

const Planos = ({ id }: PlanosProps) => {
    return (
        <section id={id} className="w-full min-h-screen bg-[#0E0016] ">
            <article className="px-[100px] flex flex-col items-center justify-start pt-[100px]">
                <Button className="px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]" >
                    Planos
                </Button>
                <h1 className="font-bold text-[45px] text-gray-100  text-center max-md:px-4 px-16">
                    Conheça nossos planos
                </h1>
                <p className="text-gray-500 text-[15px] px-16  max-md:px-4">
                    Quantos números de Whatsapp você precisa conectar?
                </p>
            </article>

        </section>
    );
}

export default Planos;