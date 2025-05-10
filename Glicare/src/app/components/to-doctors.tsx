import DropDown from "@/app/components/ui/dropdown"
import Image from "next/image"
import IQuestions from "@/app/models/questions.interface"

const questionsToDoctor: IQuestions[] = [
    {
        question: "Acompanhe a rotina e saúde do seu paciente",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 1
    },
    {
        question: "Questionário para a descoberta do perfil do paciente",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 2
    },
    {
        question: "Defina alertas de aviso para seu paciente",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 3
    },
    {
        question: "Exporte os dados do paciente em PDF para consultas",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 4
    },
    {
        question: "Botão de emergência",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 5
    },
]


export default function ToDoctors() {
    return <section className="px-6 pt-6 lg:px-20 md:pt-32 lg:pt-16">

        <div className="bg-white rounded-3xl relative md:grid md:grid-cols-2">
            <span className="md:col-start-1"></span>
            <span className="hidden md:block md:absolute md:-top-8 md:left-16 md:mt-16 lg:mt-0">
                <Image src={"/image/smartphone-left.png"} width={365} height={692} alt="smartphone" />
            </span>

            <div className="lg:pr-4">
                <div className="pt-6 pl-6 pb-9 pr-14">
                    <h2 className="font-medium text-2xl text-primary pb-4">Para profissionais da saúde</h2>
                    <p className="text-secondary-gray pr-8 md:pr-4">Médicos e nutricionistas podem acompanhar de perto o dia-a-dia do paciente e ter rápido acesso ao prontuário e rotina do usuário.
                    </p>
                </div>
                <div className="flex flex-col gap-4 px-6 pb-10">
                    {questionsToDoctor.map(({ question, response, id }) => {
                        return <DropDown key={id} title={question} description={response} background="primary-gray" />
                    })}
                </div>
            </div>

        </div>

    </section>
}