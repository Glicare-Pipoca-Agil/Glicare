import StoreButtonsDark from "./ui/store-buttons";

export default function StoresDownload() {
    return <section className="my-6 md:mb-16 bg-white">
        <div className="flex flex-col items-center px-9 text-center">
            <p className="font-inter text-xl font-medium text-primary pb-8 md:w-265 lg:w-full">Baixe o Glicare agora e transforme sua saúde!</p>
        </div>
        <div className="flex justify-center px-6 pb-6 gap-4 lg:pb-9">
        <StoreButtonsDark className="justify-center px-6 pb-6 lg:pb-9" />
        </div>
    </section>
}