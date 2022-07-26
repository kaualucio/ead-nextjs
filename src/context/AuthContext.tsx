import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { api } from "../services/api";
import { MyData } from "../utils/myData";

type AuthContextProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string,
  password: string,
}


type DecodedToken = {
  sub: string
}


type User = {
  id: string;
  name: string;
  email: string;
  urlImage: string;
  hasTrainingAccess: string;
  lastTrainingSeen: any;

}

type AuthContextProps = {
  user: User | null,
  loading: boolean,
  SignIn: ({email, password}: SignInProps) => void
}

const AuthContext = createContext({} as AuthContextProps)

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();

  useEffect(() => {
    const { 'access_token': access_token } = parseCookies()
    if (access_token) {
      const token: DecodedToken = jwt_decode(access_token)
      api.post('/user/me', {
        userId: token.sub
      }).then(({data}) => {
        setUser(data)
      })
    }
  }, [])

  async function SignIn({ email, password }: SignInProps) {
    try {
      setLoading(true)
      if(!email || !password) {
        console.log('Campos vazios não são permitidos')
        return;
      }

      const { data } = await api.post('/auth/login', {
        email,
        password
      })
      console.log(data)
      setUser(data.user)
      setCookie(null, 'access_token', data.access_token, {
        maxAge: 60 * 5
      })

      navigation.push('/dashboard')
    } catch (error) {
      console.log(error)
      setLoading(false)
      return;
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      SignIn,
      loading
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

export { useAuth, AuthContextProvider }