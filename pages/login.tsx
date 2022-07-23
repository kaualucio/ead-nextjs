import Head from 'next/head'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { MdEmail, MdLockOutline } from 'react-icons/md' 
import { useAuth } from '../src/context/AuthContext'
const Login = () => {
  const { SignIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    SignIn({email, password});
  }

  return (
    <>
      <Head>
        <title>Nome da plataforma | Login</title>
      </Head>
      <section className="h-screen bg-secondary100 flex items-center">
        <Fade left>
            <div className="w-1/2 text-center ">
              <div className="p-10 w-4/5 mx-auto border-2 border-primary rounded-lg">
                <div className="text-white">
                  <h1 className="text-4xl font-bold mb-10">Logue-se na <br/> plataforma</h1>
                </div>
              <div className="flex items-center justify-center">
                <form onSubmit={(e) => handleSignIn(e)}>
                  <div className="w-full h-14 bg-secondary80 rounded-lg px-5 text-highlight mb-3 flex items-center gap-4">
                    <span className=" text-xl text-primary">
                      <MdEmail />
                    </span>
                    <input 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email" 
                      placeholder="E-mail" 
                      name="email" 
                      className=" outline-none bg-transparent h-full w-full placeholder:text-highlight placeholder:text-sm"
                      />
                  </div>

                  <div className="w-full h-14 bg-secondary80 rounded-lg px-5 text-highlight mb-3 flex items-center gap-4">
                    <span className=" text-xl text-primary">
                      <MdLockOutline />
                    </span>
                    <input 
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password" 
                      placeholder="Senha" 
                      name="password" 
                      className=" outline-none bg-transparent h-full w-full placeholder:text-highlight placeholder:text-sm"
                      />
                  </div>
                  <div className="text-left mt-[-8px] pl-1">
                    <Link href="/forgot">
                      <a className="font-bold text-primary text-sm">Esqueci minha senha</a>  
                    </Link>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className=" w-full h-12 rounded-md bg-primary text-white font-bold uppercase hover:opacity-80 tracking-widest">
                      Login
                    </button>
                    <div className="w-9/12 h-px bg-secondary30 mx-auto my-3"></div>
                    <p className="text-sm text-white font-bold">
                      Aind não possui uma conta? 
                      <Link href="/register">
                        <a className="text-primary"> Registrar-se</a>  
                      </Link> 
                    </p>
                  </div>
                </form>
              </div>
              </div>
            </div>
            <div className="h-screen  w-1/2 flex items-center justify-center rounded-r-[2.5rem]">
              
            </div>
        </Fade>     
      </section>       
    </>
  )
}

export default Login