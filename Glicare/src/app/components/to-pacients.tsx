import DropDown from "@/app/components/ui/dropdown"
import Image from "next/image"
import IQuestions from "@/app/models/questions.interface"

const questionsToPacients: IQuestions[] = [
    {
        question: "Registre a medida da sua glicemia",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 1
    },
    {
        question: "Adicione lembretes para facilitar a rotina",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 2
    },
    {
        question: "Gráficos personalizados com suas medições",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 3
    },
    {
        question: "Widgets personalizados com níveis de glicemia",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 4
    },
    {
        question: "Botão de emergência",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 5
    },
]


export default function ToPacients() {
    return <section className="px-6 pt-16 md:pb-6 lg:pb-0 lg:px-20">

        <h1 className="font-medium text-2xl text-gray-dark pb-4">Nosso aplicativo</h1>
        <p className="text-secondary-gray text-lg pr-20 md:text-xl md:w-624 lg:w-720">O Glicare é um aplicativo feito para pacientes de diabetes tipo 2 e profissionais que desejam mais simplicidade no dia-a-dia.
        </p>

        <div className="mt-14 bg-white rounded-3xl relative md:grid md:grid-cols-2">

            <div className="lg:pl-4">
                <div className="pt-6 pl-6 pb-9 pr-14 lg:pt-10">
                    <h2 className="font-medium text-2xl text-primary pb-4">Para pacientes</h2>
                    <p className="text-secondary-gray pr-8 md:pr-4">O Glicare oferece funcionalidades e soluções que possibilitam maior controle e praticidade no dia-a-dia do paciente de diabetes.
                    </p>
                </div>
                <div className="flex flex-col gap-4 px-6 pb-10">
                    {questionsToPacients.map(({ question, response, id }) => {
                        return <DropDown key={id} title={question} description={response} background="primary-gray" />
                    })}
                </div>
            </div>

            <span className="hidden md:block md:absolute md:-top-8 md:right-16 md:mt-16 lg:mt-0">
                <Image src={"/image/smartphone-right.png"} width={365} height={692} alt="smartphone" />
            </span>
        </div>

    </section>
}