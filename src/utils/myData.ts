export type LastTrainingSeen = {
  trainingSlug: string,
  topicSlug: string,
  classSlug: string,
}

export type MyData = {
  id: string,
  name: string,
  email: string,
  urlImage: string,
  hasTrainingAccess: string,
  lastTrainingSeen: null | LastTrainingSeen
}

export let myData: MyData = {
  id: '1',
  name: 'Kauã Lúcio',
  email: 'email@teste.com',
  urlImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  hasTrainingAccess: 'BÁSICO',
  lastTrainingSeen: null
}
