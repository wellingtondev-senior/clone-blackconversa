import LazyImage from "../../LazyImage";
import bk from '../../../assets/img/back.webp'
import { Button } from "../../../components/ui/button";
import { CONSTANTS } from "../../../config/constants";

interface HomeProps {
    id:string
}


const Home = ({id}:HomeProps) => {
    return (
        <section id={id} className="w-full min-h-screen  h-auto">
            <LazyImage  src={CONSTANTS.background} alt="background" imageSize="139%" className="pt-[100px] flex flex-col items-center justify-center w-full h-[130vh]  bg-cover bg-no-repeat bg-top">
                <div className="flex flex-col items-center gap-4 justify-center w-[80%] max-md:w-[95%]  max-md:pt-[300px] pt-[200px]">
                    <Button className="px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]" >BlackConversa 2.0</Button>
                    <h1 className="font-bold text-[45px] text-gray-100  text-center max-md:px-4 px-16">A Ferramenta Mais Fácil Para Criar Chatbots Sem Código Do Brasil</h1>
                    <p className="text-gray-500 text-[15px] px-16  max-md:px-4">A única empresa que empresta seu tempo de especialistas para te ajudar a deixar seu negócio no piloto automático sem te cobrar nada mais por isso!</p>
                    <LazyImage src={CONSTANTS.app} alt={""} imageSize="100%" className="mt-10 w-full h-[400px] bg-cover bg-no-repeat bg-top rounded-lg" />
                </div>

            </LazyImage>
            <article className="bg-[#F1F5FF] w-full min-h-screen">
                <div></div>
                <div></div>
            </article>
        </section>


    );
}

export default Home;