import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai'
import { LinkIcon } from '../HomePageComponents/LinkIcon';
// import { ScrollToTopButton } from '../ScrollToTopButton';


export const Footer = () => {
  return (
    <div className="relative border-t border-t-highlight">
      <div className="container mx-auto px-16 py-20 h-full grid lg:grid-cols-5 grid-cols-1 lg:gap-0 gap-10">
        <div className="grid-cols-1 lg:col-span-2">
          <div className="mb-7">
            <Link href="/">
              <a className="text-4xl font-bold text-white">Logo</a>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon url="/" icon={AiFillInstagram} />
            <LinkIcon url="/" icon={AiFillInstagram} />
            <LinkIcon url="/" icon={AiFillInstagram} />
            <LinkIcon url="/" icon={AiFillInstagram} />
            <LinkIcon url="/" icon={AiFillInstagram} />
          </div>
          <div className="mt-5 text-text-color text-sm" >
            <p>(Nome da plataforma) 202*</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className=" font-bold text-text-color mb-5">Nossos treinamentos</h2>
          <div className="flex flex-col gap-5">
            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">Treinamento 1</a>
            </Link>

            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">Treinamento 2</a>
            </Link>

            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">Treinamento 3</a>
            </Link>

            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">Blog</a>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className=" font-bold text-text-color mb-5">Sobre</h2>
          <div className="flex flex-col gap-5">
            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">(Nome da plataforma)</a>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className=" font-bold text-text-color mb-5">Dúvidas</h2>
          <div className="flex flex-col gap-5">
            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">Suporte</a>
            </Link>
            <Link href="">
              <a className="text-highlight transition duration-200 hover:text-primary">Comunidade</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <ScrollToTopButton /> */}
    </div>
  )
}

