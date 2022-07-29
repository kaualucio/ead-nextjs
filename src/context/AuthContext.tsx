import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

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
  SignIn: ({email, password}: SignInProps) => void | any
  handleLoggout: () => void
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
      axios.post('/api/user/me', {
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

      const { data } = await axios.post('/api/auth/login', {
        email,
        password
      })
      setUser(data.user)
      setCookie(null, 'access_token', data.access_token, {
        maxAge: 60 * 5
      })
      setLoading(false)
      navigation.push('/dashboard')
    } catch (error) {
      console.log(error)
      setLoading(false)
      return {
        type: 'error',
        message: error.response.data.message
      }
    }
  }

  async function handleLoggout() {
    try {
      destroyCookie(null, 'access_token');
      navigation.push('/')
    } catch (error) {
      return {
        message: 'Houve um erro ao sair, tente novamente.'
      }
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      SignIn,
      loading,
      handleLoggout
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