export type LastTrainingSeen = {
  trainingSlug: string,
  topicSlug: string,
  classSlug: string,
}

type MyData = {
  id: number,
  name: string,
  lastTrainingSeen: null | LastTrainingSeen
}

export let myData: MyData = {
  id: 1,
  name: 'Kauã Lúcio',
  lastTrainingSeen: null
}


// {
//   trainingSlug: 'front-end', 
//   topicSlug: 'introducao-conceitos',
//   classSlug: 'apresentacao-do-curso'
// }
