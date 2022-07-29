import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { LayoutDashboard } from '../../components/LayoutDashboard'
import ReactPlayer from 'react-player/youtube'
import { Classes, Topics, useTraining } from '../../context/TrainingsContext'
import ToggleClasses from '../../components/DashboadComponents/ToggleClasses'
import { GetServerSideProps } from 'next'
import ButtonToggleClassResources from '../../components/ButtonToggleClassResources'
import ClassResource from '../../components/ClassResource'
import { parseCookies } from 'nookies'
import { getTrainingBySlug } from '../../lib/trainings/get-by-slug'
import { getTopicsByTrainingId } from '../../lib/topics/get-topics-by-training-slug'
import { getClassesVideosByTrainingId } from '../../lib/classesVideos/get-by-training-id'
import { getWatchedVideosByUser } from '../../lib/classesVideos/get-watched-video-by-user'
import jwt_decode from "jwt-decode";
import { useAuth } from '../../context/AuthContext'

type TrainingProps = {
  topics: Topics[],
  classesVideos: Classes[],
}

const Training = ({ topics, classesVideos }: TrainingProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const { user } = useAuth()
  const { handleShowTopics, handleCurrentVideo, urlVideo, handleChangeVideo, currentVideoOnScreen, markVideoAsCompleted} = useTraining()
  const [isLoading, setIsLoading] = useState(true)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [currentResourceOnScreen, setCurrentResourceOnScreen] = useState<any>()

  useEffect(() => {
    handleShowTopics(topics[0].id)
    setTimeout(() => {
      const currentVideoUser = classesVideos.filter((video) => {
        if(video.VideoWatched.length > 0) {
          const currentUserAlreaySawThisVideo = video.VideoWatched.find(videoWatched => videoWatched.userId === user.id)

          if(!currentUserAlreaySawThisVideo) return video

        }else {
          return video
        }
      })[0]
      console.log(currentVideoUser)
      if(urlVideo === '') {
        handleCurrentVideo(currentVideoUser)
        handleChangeVideo(currentVideoUser)
        setIsLoading(false)
      }else {
        setIsLoading(false)
      }
      setCurrentResourceOnScreen({
        type: 'descrição',
        resource: currentVideoUser.description
      })
    }, 1000)
   
  }, [urlVideo])

  useEffect(() => {
    if(videoCompleted) {
      markVideoAsCompleted(currentVideoOnScreen)
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
  
  if(isLoading) return <div className="flex items-center justify-center"> <h1 className="text-center text-4xl text-primary">Carregando...</h1> </div>




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
  const slug = ctx.query.slug as string
  
  const { access_token } = parseCookies(ctx)
  const token: any = jwt_decode(access_token)
  
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
  let videosWatchedByUser = await getWatchedVideosByUser(token.sub)

  return {
    props: {
      topics: JSON.parse(JSON.stringify(topicsCurrentTraining)),
      classesVideos: JSON.parse(JSON.stringify(classesCurrentTraining)),
      videosWatchedByUser: JSON.parse(JSON.stringify(videosWatchedByUser)),
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