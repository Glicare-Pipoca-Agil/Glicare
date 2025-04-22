"use client";
import React from "react";

import Image from "next/image";
import ArrowNext from "@/app/components/ui/arrow-next";
import ArrowPrev from "@/app/components/ui/arrow-prev";
import IconLinkedin from "@/public/svg/icon-linkedin";
import Slider from "react-slick";
import IconGithub from "@/public/svg/icon-github";
import IconWeb from "@/public/svg/icon-web";
import ICollaborators from "@/app/models/collaborators.interface";

const collaborators: ICollaborators[] = [
  {
    id: 1,
    name: "Carla Rovis",
    function: "Product Owner",
    linkedin: "https://www.linkedin.com/in/carla-rovis",
    web: "portfólio",
    image: "/image/collaborators/Carla-Rovis.jpeg",
    development: false,
  },
  {
    id: 2,
    name: "Laelson Rodrigues",
    function: "Product Owner",
    linkedin: "https://www.linkedin.com/in/laelson-rodrigues-qa",
    web: "portfólio",
    image: "/image/collaborators/Laelson-Rodrigues.jpeg",
    development: false,
  },
  {
    id: 3,
    name: "Breno Neves",
    function: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/brenneves",
    web: "https://brenoneves.com",
    image: "/image/collaborators/Breno-Neves.jpeg",
    development: false,
  },
  {
    id: 4,
    name: "Johnatan Gomes",
    function: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/johnatan-amaral-gomes/",
    web: "portfolio",
    image: "/image/collaborators/Johnatan-Gomes.jpeg",
    development: false,
  },
  {
    id: 5,
    name: "Beatriz Souza",
    function: "Desenvolvedor Front-end",
    linkedin: "https://www.linkedin.com/in/beatriz-souza-603379194",
    web: "https://portfolio-beatriz-ssantos.vercel.app",
    image: "/image/collaborators/Beatriz-Souza.jpeg",
    development: true,
  },
  {
    id: 6,
    name: "Daniel Santos",
    function: "Desenvolvedor Front-end",
    linkedin: "https://www.linkedin.com/in/daniel-san8",
    web: "https://github.com/Daniel-san8",
    image: "/image/collaborators/Daniel-Santos.jpeg",
    development: true,
  },
  {
    id: 7,
    name: "Davi Dias",
    function: "Desenvolvedor Front-end",
    linkedin: "https://www.linkedin.com/in/davifernandodias",
    web: "https://github.com/davifernandodias",
    image: "/image/collaborators/Davi-Dias.jpeg",
    development: true,
  },
  {
    id: 8,
    name: "Gabriel Souza",
    function: "Desenvolvedor Front-end",
    linkedin:
      "https://www.linkedin.com/in/gabriel-souza-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-48b741139",
    web: "https://github.com/GSOUZA11",
    image: "/image/collaborators/Gabriel-Souza.jpeg",
    development: true,
  },
  {
    id: 9,
    name: "Kelvin Bonsin",
    function: "Quality Assurance",
    linkedin: "https://www.linkedin.com/in/kelvin-bobsin/",
    web: "https://github.com/Kelvinbobsin",
    image: "/image/collaborators/Kelvin-Bonsin.jpeg",
    development: true,
  },
  {
    id: 10,
    name: "Thiago Ariça",
    function: "Quality Assurance",
    linkedin: " https://www.linkedin.com/in/thiago-ari%C3%A7a/",
    web: "",
    image: "/image/collaborators/Thiago-Ariça.jpg",
    development: false,
  },
  {
    id: 11,
    name: "Thomaz Victor",
    function: "Quality Assurance",
    linkedin: "https://www.linkedin.com/in/thomazvictorr/",
    web: "https://github.com/thomazvictorr",
    image: "/image/collaborators/Thomaz-Victor.jpg",
    development: true,
  },
];

export default function WhoAre() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: undefined,
          prevArrow: undefined,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: undefined,
          prevArrow: undefined,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <section id="quem-somos" className="bg-primary-gray max-w-full pb-20 lg:px-16 overflow-x-hidden">
      <div className="px-6">
        <h2 className="text-gray-dark text-2xl md:text-28 lg:text-28 font-medium">
          Quem somos
        </h2>
        <p className="text-secondary-gray text-xl font-normal max-w-269 md:max-w-534 lg:max-w-624 mt-6">
          Nós somos o Time Laranja, uma equipe de voluntários do projeto Pipoca
          Ágil, que projetamos e desenvolvemos o Glicare.
        </p>
      </div>

      <div className="w-full mt-8 lg:mt-16 lg:px-20">
        <Slider {...settings}>
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="mt-6">
              <div className="flex items-center justify-center">
                <div className="relative w-148 h-148">
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    fill={true}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-gray-dark text-center text-2xl font-medium leading-normal mt-6">
                <span className="inline-block md:hidden">
                  {collaborator.name.split(" ")[0]}
                </span>
                <br className="md:hidden" />
                <span className="inline-block md:hidden">
                  {collaborator.name.split(" ").slice(1).join(" ")}
                </span>

                <span className="hidden md:inline-block">
                  {collaborator.name}
                </span>
              </h3>
              <p className="text-secondary-gray text-center text-base font-medium leading-normal mt-3">
                <span className="inline-block md:hidden">
                  {collaborator.function.split(" ")[0]}
                </span>
                <br className="md:hidden" />
                <span className="inline-block md:hidden">
                  {collaborator.function.split(" ").slice(1).join(" ")}
                </span>
                <span className="hidden md:inline-block">
                  {collaborator.function}
                </span>
              </p>
              <div className="flex items-center justify-center space-x-3 mb-8 mt-35">
                <a
                  href={collaborator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin />
                </a>
                <a
                  href={collaborator.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {collaborator.development ? <IconGithub /> : <IconWeb />}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
