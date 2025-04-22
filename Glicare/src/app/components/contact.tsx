import Button from "@/app/components/ui/button";
import IconEmail from "@/public/svg/icon-email";
import IconPhone from "@/public/svg/icon-phone";
import IconWhatsApp from "@/public/svg/icon-whatsapp";

export default function Contact() {
  return (
    <section id="contatos" className="w-full flex-shrink-0 bg-primary-gray lg:px-20">
      <div className="py-12 px-6 text-left">
        <h2 className="w-full pr-14 text-2xl md:text-28 font-medium text-gray-dark">
          Entre em contato com o Glicare
        </h2>
        <p className="w-full sm:w-700 md:w-624 mt-4 md:mt-6 pr-16 text-secondary-gray text-left text-lg md:text-xl font-normal leading-tight">
          Caso ainda tenha dúvidas ou esteja com problema para utilizar o
          Glicare, você pode entrar em contato conosco abaixo:
        </p>

        <div className="hidden md:flex flex-col md:flex-row gap-6 mt-16 lg:justify-center">
          <div className="w-224 lg:w-336 h-310 flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
            <IconPhone className="mx-auto mt-34 bg-white" />
            <h3 className="font-medium text-lg text-gray-dark mt-6 mb-68">
              Nos contate diretamente
            </h3>
            <a
              href="tel:+5512345678901"
              className="text-blue-dark text-center text-lg lg:text-xl font-semibold lg:ml-6"
            >
              +55 12 34567-8901
            </a>
          </div>

          <div className="w-224 lg:w-336 h-310 flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
            <IconWhatsApp className="mx-auto mt-34 bg-white" />
            <h3 className="font-medium text-lg text-gray-dark mt-6 mb-16">
              Nos chame no WhatsApp
            </h3>
            <a
              href="https://wa.me/5512345678901"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 px-6 py-4 rounded-lg"
            >
              <Button classAttributes="md:bg-blue-500 font-semibold text-base">
                <span className="lg:hidden">Chamar</span>
                <span className="lg:block md:hidden">Chamar no WhatsApp</span>
              </Button>
            </a>
          </div>

          <div className="w-224 lg:w-336 h-310 flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
            <IconEmail className="mx-auto mt-34 bg-white" />
            <h3 className="font-medium text-lg text-gray-dark mt-6 mb-68">
              Entre em contato pelo e-mail
            </h3>
            <a
              href="mailto:contato@glicare.com"
              className="text-blue-dark text-lg lg:text-xl font-semibold"
            >
              contato@glicare.com
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-42  md:hidden">
          <div className="flex items-center justify-center w-24 h-74 px-35 py-19 rounded-lg bg-white">
            <IconPhone className="w-36 h-36 mt-2 shrink-0" />
          </div>
          <div className="flex items-center justify-center w-24 h-74 px-33 py-17 rounded-lg bg-white">
            <IconWhatsApp className="shrink-0" />
          </div>
          <div className="flex items-center justify-center w-24 h-74 px-33 py-17 rounded-lg bg-white">
            <IconEmail className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
