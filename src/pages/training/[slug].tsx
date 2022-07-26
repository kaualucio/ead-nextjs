import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { LayoutDashboard } from '../../components/LayoutDashboard'
import ReactPlayer from 'react-player/youtube'
import { Classes, Topics, useTraining } from '../../context/TrainingsContext'
import ToggleClasses from '../../components/DashboadComponents/ToggleClasses'
import { trainingsAvailable } from '../../utils/trainings'
import { GetServerSideProps } from 'next'
import { topics } from '../../utils/topics'
import ButtonToggleClassResources from '../../components/ButtonToggleClassResources'
import ClassResource from '../../components/ClassResource'
import { parseCookies, setCookie } from 'nookies'
import { getTrainingBySlug } from '../../lib/trainings/get-by-slug'
import { getTopicsByTrainingId } from '../../lib/topics/get-topics-by-training-slug'
import { useAuth } from '../../context/AuthContext'
import { getClassesVideosByTrainingId } from '../../lib/classesVideos/get-by-training-id'

type TrainingProps = {
  topics: Topics[],
  classesVideos: Classes[]
}

const Training = ({ topics, classesVideos }: TrainingProps) => {
  const { handleShowTopics, handleCurrentVideo, urlVideo, handleChangeVideo, currentVideoOnScreen, markVideoAsCompleted} = useTraining()
  const playerRef = useRef<ReactPlayer>(null);
  const [isLoading, setIsLoading] = useState(true)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [currentResourceOnScreen, setCurrentResourceOnScreen] = useState<any>()
  
  useEffect(() => {
    handleShowTopics(topics[0].id)
    if(urlVideo === '') {
    setTimeout(() => {
     
        const currentVideoUser = classesVideos.filter((video) => video.watched !== true)[0]
        console.log(currentVideoUser)
        handleCurrentVideo(currentVideoUser)
        // setCurrentResourceOnScreen({
        //   type: 'descrição',
        //   resource: classesVideos[0]?.description
        // })
        handleChangeVideo(currentVideoUser)
      }, 1000)
      setIsLoading(false)
    }
  }, [urlVideo])

  // useEffect(() => {
  //   if(videoCompleted) {
  //     let indexLastTrainingSeen = classesVideos.findIndex(item => item.id === currentVideoOnScreen.id)
  //     setCookie(null, 'lastTrainingSeen', JSON.stringify({
  //       classId: classesVideos[indexLastTrainingSeen++].id,
  //       topicId: classesVideos[indexLastTrainingSeen++].topicId,
  //       trainingId: classesVideos[indexLastTrainingSeen++].trainingId,
  //     }), {
  //       maxAge: 1 * 60 * 60 * 24, // 1 dia
  //     })
  //     markVideoAsCompleted(currentVideoOnScreen.id)
  //   }
  // }, [videoCompleted])

  

  function handleChangeResource(currentResource: string) {
    switch(currentResource) {
      case 'links': 
        setCurrentResourceOnScreen({
          type: currentResource,
          resource: currentVideoOnScreen?.resources.links
        })
      break;
      case 'downloads': 
        setCurrentResourceOnScreen({
          type: currentResource,
          resource: currentVideoOnScreen?.resources.downloads
        })
      break;
      default: 
        setCurrentResourceOnScreen({
          type: 'descrição',
          resource: currentVideoOnScreen?.description
        })
      break;
    }
  }
  
  if(isLoading) return <h1>Carregando</h1>




  return (
    <section className="mx-auto px-5 py-10 max-w-screen-xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 h-[450px]">
            <ReactPlayer 
              ref={playerRef}
              url={urlVideo} 
              controls
              width="100%"
              height="100%"
              onSeek={e => console.log('onSeek', e)}
              onProgress={(e) => e.played >= 0.90 && setVideoCompleted(true)}
            />
          </div>
          <div className="lg:col-span-1 p-1 bg-secondary90 h-[450px] rounded-lg overflow-y-auto scrollbar">
          {
            topics?.map((topic) => (
                <ToggleClasses 
                  key={topic.id} 
                  topic={topic} 
                  classesVideos={classesVideos.filter((classSingle) => classSingle.topicId === topic.id)}
                />
            ))
          }
          </div>
        </div>
        {/* <div className="my-7 h-80">
          <h2 className="text-text-color font-bold text-3xl mb-7">{currentVideoOnScreen?.title}</h2>
          <div className="flex items-center gap-5 text-secondary50 mb-7 font-bold border-b border-secondary50">
            <ButtonToggleClassResources label="Descrição" type="descrição" currentResourceOnScreen={currentResourceOnScreen} handleChangeResource={handleChangeResource} />
            <ButtonToggleClassResources label="Downloads" type="downloads" currentResourceOnScreen={currentResourceOnScreen} handleChangeResource={handleChangeResource} />
            <ButtonToggleClassResources label="Links" type="links" currentResourceOnScreen={currentResourceOnScreen} handleChangeResource={handleChangeResource} />
          </div>
          <ClassResource data={currentResourceOnScreen} />
        </div> */}
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.query.slug as string
  
  const { ['access_token']: access_token } = parseCookies(ctx)

  if (!access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  
  const currentTraining = await getTrainingBySlug(slug)
  if(!currentTraining) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: true,
      }
    }
  }
  let topicsCurrentTraining = await getTopicsByTrainingId(currentTraining.id)
  let classesCurrentTraining = await getClassesVideosByTrainingId(currentTraining.id)

  return {
    props: {
      topics: topicsCurrentTraining.map((topic) => ({
        ...topic,
        created_at: topic.updated_at.toISOString(),
        updated_at: topic.updated_at.toISOString(),
    })),
      classesVideos: classesCurrentTraining.map((classeSingle) => ({
        ...classeSingle,
        created_at: classeSingle.updated_at.toISOString(),
        updated_at: classeSingle.updated_at.toISOString(),
    })),
    }
  }
}

Training.getLayout = function getLeyout(page: ReactElement) {
  return ( 
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}

export default Training

/*
  if(lastTrainingSeen && JSON.parse(lastTrainingSeen).trainingId === topics[0].trainingId) {
      
      const currentTopicUser = topics.find((topic) => topic.id === JSON.parse(lastTrainingSeen).topicId)
      currentTopicUser && handleShowTopics(currentTopicUser.id)

      const currentVideoUser = classesVideos.find((classSingle) => classSingle.id === JSON.parse(lastTrainingSeen).classId)
      currentVideoUser && handleCurrentVideo(currentVideoUser)
      setCurrentResourceOnScreen({
        type: 'descrição',
        resource: currentVideoUser?.description
      })
      setTimeout(() => {
        if(currentVideoUser) {
          handleChangeVideo(currentVideoUser)
        }
        setIsLoading(false)
      }, 1000)
    }else {
      handleShowTopics(topics[0].id)
      handleCurrentVideo(classesVideos[0])
      setCurrentResourceOnScreen({
        type: 'descrição',
        resource: classesVideos[0].description
      })
      setTimeout(() => {
        handleChangeVideo(classesVideos[0])
        setIsLoading(false)
      }, 1000)
    }
*/