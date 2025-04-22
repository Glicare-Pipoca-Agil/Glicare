"use client";

import { useState } from "react";
import Button from "@/app/components/ui/button"
import NavigationMenu from "@/public/svg/navigation-menu"
import LogoGlicare from "@/public/svg/icon-glicare-dark"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-primary-gray h-24 flex justify-between items-center p-4 lg:h-28 lg:p-10">
        <div className="flex gap-4 items-center text-black">
          <LogoGlicare />
          <p className="font-roboto font-semibold text-4xl">Glicare</p>
        </div>
        <Button
          classAttributes="lg:hidden bg-transparent"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <NavigationMenu />
        </Button>
        <ul className="hidden lg:flex justify-around text-gray gap-12 2xl:gap-24 font-inter font-medium text-base list-none">
          <li>
            <a href="#app">Nosso aplicativo</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#sobre">Sobre diabetes</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
          <li>
            <a href="#quem-somos">Quem somos</a>
          </li>
        </ul>
        <div className="hidden lg:flex gap-4">
          <Button classAttributes="w-40 h-12 bg-primary text-white font-inter rounded-lg">
            Baixe o Glicare
          </Button>
        </div>

        <div
          aria-hidden={!menuOpen}
          className={`absolute top-24 left-0 w-full bg-white shadow-md py-6 px-4 z-50 
              flex flex-col gap-6 text-black font-inter text-lg items-center text-center 
              lg:hidden transition-all duration-300 ease-in-out 
              ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
  
                <a href="#app" onClick={() => setMenuOpen(false)}>Nosso aplicativo</a>
                <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre diabetes</a>
                <a href="#contatos" onClick={() => setMenuOpen(false)}>Contatos</a>
                <a href="#quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</a>
          </div>

        </nav>
    </header>
  );
}
