import Head from 'next/head'
import React from 'react'

const ConfirmAccount = () => {
  return (
    <>
      <Head>
        <title>Nome da plataforma | Confirmar senha</title>
      </Head>
      <section className="h-screen bg-secondary100 flex justify-center items-center">
          <div className="text-center text-secondary20">
            <h1 className="text-3xl font-bold mb-4">Seu cadastro foi realizado com sucesso! :)</h1>
            <p>
              Um link de <span className="text-primary">ativação</span> da conta foi enviado para seu e-mail. 
            </p>
          </div>
      </section>
    </>
  )
}

export default ConfirmAccount