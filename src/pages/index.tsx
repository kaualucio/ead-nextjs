import type { ReactElement } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import Fade from 'react-reveal/Fade'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'

import type { NextPageWithLayout } from './_app'

import MotiveSingle from '../components/HomePageComponents/MotiveSingle'
import {TrainingContainer} from '../components/HomePageComponents/TrainingContainer'
import {TrainingInformation} from '../components/HomePageComponents/TrainingInformation'
import { LinkButton } from '../components/HomePageComponents/LinkButton'
import { training } from '../utils/training'
import { Layout } from '../components/Layout'

const Home: NextPageWithLayout = () => {
  const trainingsInfo = training
  const [activeTrainingInformation, setActiveTrainingInformation] = useState(trainingsInfo[0].id)

  return (
    <>
      <Head>
        <title>Nome da plataforma</title>
      </Head>
      <section className="">
        <div className="container mx-auto p-10 ">
          <Fade top >
            <section className="text-center py-20 lg:w-3/5 mx-auto flex flex-col justify-center items-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">Venha aprender com a gente e dê um <span className="text-primary">UP</span> na sua <span className="text-primary">carreira</span>!</h2>
              <p className="text-highlight text-md my-3">Faça parte da nossa plataforma e estude os assuntos que vieram para revolucionar o futuro. Faça parte da nossa comunidade e comece a criar uma networking, tire todas as suas dúvidas em nosso suporte 24 horas.</p>
              <div className="mt-7">
                <LinkButton label="Quero me matricular!" icon={FaRegArrowAltCircleUp} url="/register" cta={true} />
              </div>
            </section>
          </Fade>
  
          <Fade left>
            <section className="py-20 flex gap-10 lg:gap-3 flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 px-2 lg:px-5 mt-16">
                <h2 className="text-text-color text-4xl font-bold mb-4">Como funciona as <span className="text-primary">aulas</span>?</h2>
                <p className="text-highlight leading-6">Aqui na (nome da plataforma), buscamos dar a liberdade para o aluno aprender no tempo dele. As aulas são gravadas e constantemente novas aulas são gravadas e conteúdos antigos atualizados. Buscamos fazer de você um verdadeiro profissional no assunto que você escolher.</p>
                <div className="mt-7">
                  <LinkButton label="Leia mais sobre nós" cta={true} url="/about" />
                </div>
              </div>
              <div className="w-full lg:w-3/5 p-5">
                <div className="w-full rounded-lg h-96">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S9uPNppGsGo"  title="Video de apresentação da plataforma" frameBorder="0" allowFullScreen={false} className="m-0 p-0 rounded-lg shadow-md"></iframe>
                </div>
              </div>
            </section>
          </Fade>
  
          <Fade bottom>
            <section className="py-20 ">
              <h2 className="text-text-color text-center text-4xl font-bold mb-4">Por que escolher a  <span className="text-primary">(nome da plataforma)</span>?</h2>
              <Fade bottom>
                <div className="mt-16 w-4/5 mx-auto grid lg:grid-cols-3 md:-grid-cols-2 grid-cols-1 gap-3">
                  <MotiveSingle title="Motive 1" legend="Professores mais que qualificados para te ensinar tudo que você precisa saber." />
                  <MotiveSingle title="Motive 2" legend="Suporte 24h para sanar todas as sua dúvidas além da nossa comunidade." />
                  <MotiveSingle title="Motive 3" legend="Conecte-se com outros alunos em nossa comunidade do (…)  (melhorar esse motivo)" />
                  <MotiveSingle title="Motive 4" legend="Você não precisará de nenhum conhecimento prévio para iniciar, você irá aprender do absoluto zero até o avançado" />
                  <MotiveSingle title="Motive 5" legend="Mentorias semanais com os educadores da plataforma." />
                </div>
              </Fade>
            </section>
          </Fade>
           
          <Fade right>
            <section id="trainings" className="py-20 ">
              <h2 className="text-text-color text-4xl font-bold mb-4">Treinamentos que vão te fazer <br /> <span className="text-primary">evoluir</span> na carreira</h2>
              <div className="mt-16 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {
                    trainingsInfo.map((training) => (
                      <TrainingContainer key={training.id} id={training.id} title={training.title} index={0} active={activeTrainingInformation} setActiveTrainingInformation={setActiveTrainingInformation} />
                    ))
                  }
                </div>
                <TrainingInformation active={activeTrainingInformation}  />
              </div>
            </section>
          </Fade>
  
          <Fade top>
            <section className="py-40 ">
              <h2 className=" text-center text-text-color text-5xl font-bold mb-4">Tá esperando o que? <br /> Assine agora e de um <span className="text-primary">UP na sua carreira!</span></h2>
              <div className="flex justify-center mt-10">
                <LinkButton label="Quero fazer parte" url="/register" cta={true} />
              </div>
            </section> 
          </Fade>
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
