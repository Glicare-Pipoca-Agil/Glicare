"use client";
import React from "react";

import Image from "next/image";
import ArrowNext from "@/app/components/ui/arrow-next";
import ArrowPrev from "@/app/components/ui/arrow-prev";
import IconLinkedin from "@/public/svg/icon-linkedin";
import IconWeb from "@/public/svg/icon-web";
import Slider from "react-slick";

export default function WhoAre() {
  const collaborators = [
    {
      id: 1,
      name: "Carla Rovis",
      function: "Product Owner",
      linkedin: "https://www.linkedin.com/in/carla-rovis",
      web: "portfólio",
      image: "/image/collaborators/Carla-Rovis.jpeg",
    },
    {
      id: 2,
      name: "Laelson Rodrigues",
      function: "Product Owner",
      linkedin: "https://www.linkedin.com/in/laelson-rodrigues-qa",
      web: "portfólio",
      image: "/image/collaborators/Laelson-Rodrigues.jpeg",
    },
    {
      id: 3,
      name: "Breno Neves",
      function: "UX/UI Designer",
      linkedin: "https://www.linkedin.com/in/brenneves",
      web: "https://brenoneves.com",
      image: "/image/collaborators/Breno-Neves.jpeg",
    },
    {
      id: 4,
      name: "Beatriz Souza",
      function: "Desenvolvedor Front-end",
      linkedin: "https://www.linkedin.com/in/beatriz-souza-603379194",
      web: "https://portfolio-beatriz-ssantos.vercel.app",
      image: "/image/collaborators/Beatriz-Souza.jpeg",
    },
    {
      id: 5,
      name: "Daniel Santos",
      function: "Desenvolvedor Front-end",
      linkedin: "https://www.linkedin.com/in/daniel-san8",
      web: "https://github.com/Daniel-san8",
      image: "/image/collaborators/Daniel-Santos.jpeg",
    },
    {
      id: 6,
      name: "Davi Dias",
      function: "Desenvolvedor Front-end",
      linkedin: "https://www.linkedin.com/in/davifernandodias",
      web: "web",
      image: "/image/collaborators/Davi-Dias.jpeg",
    },
    {
      id: 7,
      name: "Gabriel Souza",
      function: "Desenvolvedor Front-end",
      linkedin:
        "https://www.linkedin.com/in/gabriel-souza-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-48b741139",
      web: "https://github.com/GSOUZA11",
      image: "/image/collaborators/Gabriel-Souza.jpeg",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
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
    <section className="bg-primary-gray max-w-full pb-20 lg:px-20 overflow-x-hidden">
      <div className="px-6">
        <h2 className="text-gray-dark text-2xl lg:text-28 font-medium">
          Quem somos
        </h2>
        <p className="text-secondary-gray text-xl font-normal max-w-269 lg:max-w-624 mt-6">
          Nós somos o Time Laranja, uma equipe de voluntários do projeto Pipoca
          Ágil, que projetamos e desenvolvemos o Glicare.
        </p>
      </div>

      <div className="w-full mt-8 lg:mt-16 lg:mb-20 lg:px-20">
        <Slider {...settings}>
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="mt-6">
              <div className="flex items-center justify-center">
                <div className="relative w-148 h-148">
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-gray-dark text-center text-2xl font-medium leading-normal mt-6">
                {collaborator.name}
              </h3>
              <p className="text-secondary-gray text-center text-base font-medium leading-normal mt-3">
                {collaborator.function}
              </p>
              <div className="flex items-center justify-center space-x-3 mt-35 mb-8">
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
                  <IconWeb />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
