import IconGlicare from "@/public/svg/icon-glicare-light";
import StoreButtonsDark from "./ui/store-buttons";

export default function Footer() {
    return <footer className="bg-primary text-primary-gray pl-6 md:grid md:grid-cols-2 md:grid-rows-[100px 50px 100px] md:pl-16">
        <div className="flex items-center gap-x-5 pt-9 pb-14 md:pb-0 md:pt-0 md:col-span-1 md:max-h-14 md:self-center">
            <IconGlicare />
            <p className="font-roboto font-semibold text-4xl md:text-5xl">Glicare</p>
        </div>

        <ul className="flex flex-col gap-y-5 pb-16 font-medium max-w-40 md:col-span-1 md:row-span-2 md:justify-self-center md:pt-40">
            <li><a href="">Nosso aplicativo</a></li>
            <li><a href="">Depoimentos</a></li>
            <li><a href="">Sobre diabetes</a></li>
            <li><a href="">Contatos</a></li>
            <li><a href="">Quem somos</a></li>
        </ul>

        <p className="pr-6 pb-10 md:w-430 lg:w-700 md:col-span-1 md:pb-0 md:pr-20 md:row-span-1">
            O Glicare é um aplicativo dedicado à pacientes de diabetes do tipo 2 e médicos, nutricionistas e demais profissionais da saúde que desejam maior simplicidade, praticidade e facilidade no acompanhamento, controle e evolução da doença e sintomas.
        </p>
        <StoreButtonsDark className="pb-10" />
        <p className="pb-24 md:col-span-2 md:pb-11">2025 © Glicare</p>
    </footer>
}
