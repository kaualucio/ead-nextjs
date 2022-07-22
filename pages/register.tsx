import Head from 'next/head'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { MdEmail, MdPerson, MdLockOutline } from 'react-icons/md' 
import { api } from '../src/services/api'
import { useRouter } from 'next/router'
import { Alert } from '../src/components/Alert'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigation = useRouter()

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    if(!name || !email || !password || !confirmPassword) {
      setShow(true)
      setMessage('Campos vazios não são permitidos')
      return;
    }

    if(password !== confirmPassword) {
      setShow(true)
      setMessage('As senhas precisam ser iguais!')
      return;
    }

    if(password.length < 8) {
      setShow(true)
      setMessage('Sua senha precisa de no mínimo 8 caracteres')
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.post('/auth/register', {
        name, 
        email, 
        password, 
        confirm_password:confirmPassword
      })
      if(data.type === 'success') {
        setShow(true)
        setLoading(false);
        setMessage('Seu cadastro foi realizado com sucesso')
        navigation.push('/confirm-account')
      }
    } catch (error) {
      setShow(true)
      setLoading(false);
      setMessage('Houve um erro ao realizar seu cadastro, tente novamente!')
    }
    
  }

  const toggleAlert = (show: boolean) => {
    setShow(!show)
  }

  return (
    <>
      <Head>
        <title>Nome da plataforma | Login</title>
      </Head>
      <section className="h-screen bg-secondary100  flex items-center">
      {
        show && <Alert type="warning" message={message} toggleAlert={toggleAlert} show={show}  />
      }
        <Fade left>
          <div className="w-1/2 text-center ">
            <div className="p-10 w-4/5 mx-auto border-2 border-primary rounded-lg">
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-3">Faça seu cadastro na <br/> plataforma</h1>
                <p className="text-md text-highlight mb-7">E venha fazer parte da nossa comunidade!</p>
              </div>
            <div className="flex items-center justify-center">
              <form onSubmit={e => handleSignUp(e)} className="w-4/5">
                <div className="w-full h-14 bg-secondary80 rounded-lg px-5 text-[#fff] mb-3 flex items-center gap-4">
                  <span className=" text-xl text-primary">
                    <MdPerson />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Digite seu nome" 
                    name="name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="focus:border-2-secondary70 text-sm outline-none bg-transparent h-full w-full placeholder:text-highlight"
                    />
                </div>

                <div className="w-full h-14 bg-secondary80 rounded-lg px-5 text-highlight mb-3 flex items-center gap-4">
                  <span className=" text-xl text-primary">
                    <MdEmail />
                  </span>
                  <input 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    name="email" value={email}
                    onChange={e => setEmail(e.target.value)}

                    className=" outline-none text-sm bg-transparent h-full w-full placeholder:text-highlight"
                    />
                </div>

                <div className="w-full h-14 bg-secondary80 rounded-lg px-5 text-highlight mb-3 flex items-center gap-4">
                  <span className=" text-xl text-primary">
                    <MdLockOutline />
                  </span>
                  <input 
                    type="password" 
                    placeholder="Digite sua senha" 
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className=" outline-none text-sm bg-transparent h-full w-full placeholder:text-highlight"
                    />
                </div>

                <div className="w-full h-14 bg-secondary80 rounded-lg px-5 text-highlight flex items-center gap-4">
                  <span className=" text-xl text-primary">
                    <MdLockOutline />
                  </span>
                  <input 
                    type="password" 
                    placeholder="Confirme sua senha" 
                    name="password" 
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className=" outline-none text-sm bg-transparent h-full w-full placeholder:text-highlight"
                    />
                </div>
                <div className="mt-3">
                  <button 
                    type="submit" 
                    className="disabled:opacity-70 w-full h-12 rounded-md bg-primary text-white font-bold uppercase hover:opacity-80 tracking-widest"
                    disabled={loading}  
                  >
                    Registrar-se
                  </button>
                  <div className="w-9/12 h-px bg-secondary30 mx-auto my-3"></div>
                  <p className="text-sm text-white font-bold">
                    Já possui uma conta? 
                    <Link href="/login">
                      <a className="text-primary"> Login</a>  
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

export default Register