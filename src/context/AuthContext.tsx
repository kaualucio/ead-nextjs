import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";


import { api } from "../services/api";

enum Role {
  USER = 'USER',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN',
}

type AuthContextProviderProps = {
  children: ReactNode
}

enum Training {
  BASIC = 'BASIC',
  TREINAMENTO1 = 'TREINAMENTO1',
  TREINAMENTO2 = 'TREINAMENTO2',
  TREINAMENTO3 = 'TREINAMENTO3',
}

type SignInProps = {
  email: string,
  password: string,
}

type DecodedToken = {
  sub: string
}

type User = {
  id: string,
  name: string,
  email: string,
  role: Role[],
  hasTrainingAccess: Training[]
}

type AuthContextProps = {
  user: User | null,
  loading: boolean,
  SignIn: ({email, password}: SignInProps) => void
}

const AuthContext = createContext({} as AuthContextProps)

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();

  useEffect(() => {
    const { 'access_token': access_token } = parseCookies()
    if (access_token) {
      const token: DecodedToken = jwt_decode(access_token)
      console.log(token)
      api.post('/auth/me', {
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

      setCookie(null, 'access_token', data.access_token)
      setCookie(null, 'refresh_token', data.refresh_token)

      navigation.push('/dashboard')
      setLoading(false)
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