import { useRef } from 'react';
import VideoFundo from '/src/assets/PlayerVideoFundo.webm'
import imgButtonSecundary from '/src/assets/meteoro.jpg'
import img3 from '/src/assets/planet1.jpg'
import api from '../../services/api.js'
import { useNavigate } from 'react-router-dom';
import astro1 from "/src/assets/astronauts/astro1.png"
import astro2 from "/src/assets/astronauts/astro2.png"
import astro3 from "/src/assets/astronauts/astro3.png"
import astro4 from "/src/assets/astronauts/astro4.png"
import astro5 from "/src/assets/astronauts/astro5.png"
import astro6 from "/src/assets/astronauts/astro6.jpg"
import astro7 from "/src/assets/astronauts/astro7.png"
import astro8 from "/src/assets/astronauts/astro8.png"
import astro9 from "/src/assets/astronauts/astro9.png"
import astro10 from "/src/assets/astronauts/astro10.png"
import astro11 from "/src/assets/astronauts/astro11.png"
import astro12 from "/src/assets/astronauts/astro12.png"
import { toast } from 'react-toastify';
import imgLogo from "../../assets/planetDestruction.png"
import fallbackImg from "/src/assets/img2.webp"




function App() {
  const astronautImages =

    [astro1,
      astro2, astro3, astro4, astro5,
      astro6, astro7, astro8, astro9,
      astro10, astro11, astro12]

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()


  const navigate = useNavigate()



  async function registerNewUser() {

    const name = inputName.current.value
    const age = inputAge.current.value
    const email = inputEmail.current.value
    const password = inputPassword.current.value


    console.log({
      name,
      age,
      email,
      password
    })

    if (!name || !age || !email || !password) {
      toast.error("Preencha todas as informações!")

      return
    }

    const randomAvatar = Math.floor(
      Math.floor(Math.random() * astronautImages.length)
    )

    try {
     const response =  await api.post('/usuarios', {
        name,
        age: Number(age),
        email,
        password,
        avatarId: randomAvatar,

      })

      sessionStorage.setItem(
        "usuarioDashboard",
        JSON.stringify(response.data)
      )



      toast.success("Usuário cadastrado com sucesso!")
      navigate("/")
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error)
      toast.error("Preencha todas as informações!")
    }
  }








  return (

<div className="page-cadastro relative h-screen flex flex-col items-center justify-evenly p-5 overflow-hidden">

  {/* IMAGEM BASE */}
 <div
  className="fixed inset-0 bg-cover bg-center -z-20"
  style={{ backgroundImage: `url(${fallbackImg})` }}
></div>

  {/* VÍDEO */}
  <video
    className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
    src={VideoFundo}
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    poster={fallbackImg}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/20 -z-10 pointer-events-none"></div>

    <form className="flex flex-col items-center gap-10 animate-fadeIn ">

      <div className="flex flex-col items-center justify-center gap-3">

        <div className="flex items-center justify-center gap-3">
          <h1 className="text-[64px] font-['Orbitron'] font-semibold">
            <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
              Cosmo
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              Sync
            </span>
          </h1>

          <img src={imgLogo} alt="Logo" className="w-25 h-25" />
        </div>

        <h2
          className="text-[25px] font-light tracking-wide text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.85)] text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cadastro de Usuários
        </h2>

      </div>

      
      <div className="justify-center items-start pt-10 relative">

        <div>
          <label className="text-center text-[15px] font-normal text-white">
            Login<span>*</span>
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-cyan-300/40 text-white placeholder:text-white/85 shadow-[0_0_20px_rgba(34,211,238,0.25)] focus:outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
            type="text"
            placeholder="Login do Usuário"
            ref={inputName}
          />
        </div>

        <div>
          <label className="text-center text-[15px] font-normal text-white">
            Idade<span>*</span>
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-cyan-300/40 text-white placeholder:text-white/85 shadow-[0_0_20px_rgba(34,211,238,0.25)] focus:outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
            type="number"
            placeholder="Idade do Usuário"
            ref={inputAge}
          />
        </div>

        <div>
          <label className="text-center text-[15px] font-normal text-white">
            Email<span>*</span>
          </label>

          <input
            type="email"
            placeholder="E-mail do Usuário"
            ref={inputEmail}
            className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-cyan-300/40 text-white placeholder:text-white/85 outline-none shadow-[0_0_20px_rgba(34,211,238,0.25)] focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
          />
        </div>

        <div>
          <label className="text-center text-[15px] font-normal text-white">
            Senha<span>*</span>
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-cyan-300/40 text-white placeholder:text-white/85 shadow-[0_0_20px_rgba(34,211,238,0.25)] focus:outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300"
            type="password"
            placeholder="Senha do Usuário"
            ref={inputPassword}
          />
        </div>

      </div>

      {/* CADASTRAR */}
      <div className="btn-voltar buttons relative md:fixed md:bottom-7 md:left-0 md:right-0 flex justify-center mt-6">
        <button
          type="button"
          onClick={registerNewUser}
         className="
  relative overflow-visible
  px-19 py-5 rounded-full
  text-white font-bold text-[22px]
  tracking-wide
  border border-black
  shadow-[0_0_20px_rgba(255,180,80,0.25)]
  hover:scale-105
  transition-all duration-300
  universe-button
  smoke-edge
  cursor-pointer

  max-[480px]:w-[260px]
  max-[480px]:h-[55px]
  max-[480px]:px-0
  max-[480px]:flex
  max-[480px]:items-center
  max-[480px]:justify-center
"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "113%",
            backgroundPosition: "center"
          }}
        >
          Cadastrar
        </button>
      </div>

      {/* VOLTAR */}
      <div className="btn-voltar-1 mt-4 flex justify-center md:absolute md:left-6 md:bottom-6">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="
  relative overflow-visible
  px-6 py-3
  rounded-full
  text-white font-bold text-[16px]
  tracking-wide
  border border-black
  shadow-[0_0_20px_rgba(255,180,80,0.25)]
  hover:scale-105
  transition-all duration-300
  universe-button
  smoke-edge
  cursor-pointer

  max-[480px]:w-[260px]
  max-[480px]:h-[55px]
  max-[480px]:px-0
  max-[480px]:flex
  max-[480px]:items-center
  max-[480px]:justify-center
"
          style={{
            backgroundImage: `url(${imgButtonSecundary})`,
            backgroundSize: "115%",
            backgroundPosition: "center"
          }}
        >
          Voltar a tela de login
        </button>
      </div>

    </form>
  </div>
)
}

export default App