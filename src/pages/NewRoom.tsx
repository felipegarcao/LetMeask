// import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext';

import illustrationImg from '../assets/images/illustration.svg'
import  logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
 

// WebPack (snowpack,vite,....)
import '../styles/auth.scss';


export function NewRoom() {
  const { user } = useAuth()
  return (    
   <div id="page-auth">
     <aside>
        <img src={illustrationImg} alt="Ilustração Simbolizando Perguntas e Respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo Real</p>
     </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeask"/>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
            type="text"
            placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
   </div>
  )  
}