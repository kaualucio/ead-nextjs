import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import React, { ReactElement, useState } from 'react'
import MyTraining from '../../components/DashboadComponents/MyTraining';
import { LayoutDashboard } from '../../components/LayoutDashboard';
import { AboutTraining } from '../../components/DashboadComponents/AboutTraining';
import { useAuth } from '../../context/AuthContext';
import { getAllTrainings } from '../../lib/trainings/get-all';
import { Training } from '../../context/TrainingsContext';

type DashboardProps = {
  trainings: Training[]
}

const Dashboard = ({ trainings }: DashboardProps) => { 
  const { user } = useAuth()
  const [selectedTraining, setSelectedTraining] = useState<any>(null)

  function handleSelectTraining(idTraining: string) {
    const training = trainings?.find(item => item.id === idTraining)
    setSelectedTraining(training)
  }

  return (
    <section className="mx-auto p-5 md:p-10 max-w-screen-xl">
      <div className="container mx-auto flex flex-col lg:grid gap-5">
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:h-56">
          <div className="w-full lg:w-1/2 h-full rounded-lg py-10 px-5 bg-secondary90">
            <h2 className="text-3xl text-text-color font-bold">Olá, {user?.name}</h2>
            <p className="mt-5 text-md text-secondary40">Seja bem-vindo de volta à nossa plataforma, pronto para voltar ao estudos?</p>
          </div>
          <div className="w-full lg:w-1/2 h-full rounded-lg py-5 px-7 bg-secondary90 flex flex-col md:flex-row justify-between items-start md:items-center md:gap-0 gap-5">
            {
              trainings?.map(training => (
                <MyTraining key={training.id} handleSelectTraining={handleSelectTraining} data={training} />
              ))
            }
          </div>
        </div>
        {/* IMPLEMENTAR SEÇÃO QUE LEVA PARA O ÚLITMA VIDEO AULA ASSISTIDA */}
            {/* <Link href={`/training/id-treinamento?last`}>
              <a className=" hidden p-7 rounded-lg bg-secondary90 flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-start gap-7">
                  <Frame 
                    urlImage="https://cursos.dankicode.com/app/Views/public/images/uploads/cursos/5fe391f1497c8.jpg"
                    alt="Capa do curso de front-end"
                  />
                  <div className="py-3">
                    <h2 className="font-bold text-xl text-primary mb-5">Aula 27 - Estrutura de dados Javascript</h2>
                    <p className="font-semibold text-secondary40">Capítulo 4 - Iniciando com Javascript</p>
                  </div>
                </div>
                <div>
                  <div className="animate-bounce-horizontal uppercase text-xl font-bold text-secondary40 flex items-center gap-3">
                    <p>Continuar</p>
                    <div className="text-4xl text-primary">
                      <CgChevronDoubleRightO />
                    </div>
                  </div>
                </div>
              </a>
            </Link> */}

        <div className="grid gap-5 grid-col-1">
          {
            selectedTraining &&  (
              <div className=" p-7 bg-secondary90 rounded-lg lg:h-96">
                <AboutTraining training={selectedTraining} />
              </div>
            ) 
          }
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['access_token']: access_token } = parseCookies(ctx)

  if (!access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  let trainings = await getAllTrainings()

  return {
    props: {
      trainings: JSON.parse(JSON.stringify(trainings.reverse())),
    }
  }
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}

export default Dashboard