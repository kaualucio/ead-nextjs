import Head from 'next/head'
import React from 'react'

const Forgot = () => {
  return (
    <>
      <Head>
        <title>Nome da plataforma | Esqueci minha senha</title>
      </Head>
      <section className="h-screen bg-gradient-to-b from-secondary70 to-secondary80 flex items-center justify-center">
        <div className="w-96 p-7 rounded-lg border-2 border-secondary50 text-center">
          <h2 className="text-3xl text-white font-bold mb-7">Esqueceu sua senha:</h2>
          <form>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Digite seu e-mail"
              className="w-full h-12 bg-secondary50 px-2 rounded-md outline-none text-white placeholder:text-white" />

            <button type="submit" className="mt-5 w-full h-12 rounded-md bg-primary text-white font-bold uppercase hover:opacity-80 tracking-widest">
              Recuperar
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Forgot