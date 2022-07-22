import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'access_token': access_token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333'
  })

  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  if (access_token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  }

  return api;
}