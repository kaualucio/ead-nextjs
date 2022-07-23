import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { LayoutDashboard } from '../../src/components/LayoutDashboard'
import ReactPlayer from 'react-player/youtube'
import { Topics, useTraining } from '../../src/context/TrainingsContext'
import ToggleClasses from '../../src/components/DashboadComponents/ToggleClasses'
import { trainingsAvailable } from '../../src/utils/trainings'
import { GetServerSideProps } from 'next'
import { topics } from '../../src/utils/topics'
import ButtonToggleClassResources from '../../src/components/ButtonToggleClassResources'
import ClassResource from '../../src/components/ClassResource'

type TrainingProps = {
  topics: Topics[]
}

const Training = ({ topics }: TrainingProps) => {
  const { handleShowTopics, handleCurrentVideo, currentVideoOnScreen, lastTrainingSeen, markVideoAsCompleted } = useTraining()
  const playerRef = useRef<ReactPlayer>(null);
  const [urlVideo, setUrlVideo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [currentResourceOnScreen, setCurrentResourceOnScreen] = useState<any>()
  useEffect(() => {

    if(lastTrainingSeen) {
      const currentTopicUser = topics.find((topic) => topic.slug === lastTrainingSeen?.topicSlug)
      currentTopicUser && handleShowTopics(currentTopicUser.id)
      const currentVideoUser = currentTopicUser?.classes.find((classSingle) => classSingle.slug === lastTrainingSeen?.classSlug)
      currentVideoUser && handleCurrentVideo(currentVideoUser)
      setCurrentResourceOnScreen({
        type: 'descrição',
        resource: currentVideoUser?.description
      })
      setTimeout(() => {
        if(currentVideoUser) {
          setUrlVideo(currentVideoUser.urlVideo)
        }
        setIsLoading(false)
      }, 1000)
    }else {
      handleShowTopics(topics[0].id)
      handleCurrentVideo(topics[0].classes[0])
      setCurrentResourceOnScreen({
        type: 'descrição',
        resource: topics[0].classes[0].description
      })
      setTimeout(() => {
          setUrlVideo(topics[0].classes[0].urlVideo)
        setIsLoading(false)
      }, 1000)
    }

  }, [topics, lastTrainingSeen])

  useEffect(() => {
    if(videoCompleted) {
      markVideoAsCompleted(currentVideoOnScreen.id)
    }
  }, [videoCompleted])

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
              onProgress={(e) => {
               if(e.played >= 0.90) {
                console.log('video em 90%')
                setVideoCompleted(true)
               }
              }
              }
            />
          </div>
          <div className="lg:col-span-1 p-1 bg-secondary90 h-[450px] rounded-lg overflow-y-auto scrollbar">
          {
            topics?.map((topic) => (
                <ToggleClasses 
                  key={topic.id} 
                  topic={topic} 
                />
            ))
          }
          </div>
        </div>
        <div className="my-7 h-80">
          <h2 className="text-text-color font-bold text-3xl mb-7">{currentVideoOnScreen?.title}</h2>
          <div className="flex items-center gap-5 text-secondary50 mb-7 font-bold border-b border-secondary50">
            <ButtonToggleClassResources label="Descrição" type="descrição" currentResourceOnScreen={currentResourceOnScreen} handleChangeResource={handleChangeResource} />
            <ButtonToggleClassResources label="Downloads" type="downloads" currentResourceOnScreen={currentResourceOnScreen} handleChangeResource={handleChangeResource} />
            <ButtonToggleClassResources label="Links" type="links" currentResourceOnScreen={currentResourceOnScreen} handleChangeResource={handleChangeResource} />
          </div>
          <ClassResource data={currentResourceOnScreen} />
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  const currentTraining = trainingsAvailable.find(training => training.slug === slug)
  let topicsCurrentTraining = topics.filter(topic => topic.idTraining === currentTraining?.id)

  return {
    props: {
      topics: topicsCurrentTraining
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