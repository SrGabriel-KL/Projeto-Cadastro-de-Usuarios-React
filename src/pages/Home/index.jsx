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





function App() {
  const astronautImages = [astro1, astro2, astro3, astro4, astro5, astro6, astro7, astro8, astro9, astro10, astro11, astro12]
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const randomAvatar =
      Math.floor(Math.random() * astronautImages.length)

    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: Number(inputAge.current.value),
      name: inputName.current.value,
      avatarId: randomAvatar
    })

    navigate('/dashboard')
  }


  return (

    <div className="relative h-screen flex flex-col items-center justify-evenly p-5 overflow-hidden">

      {/* 🎥 Vídeo de fundo */}
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
        src={VideoFundo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔥 Overlay escuro opcional (melhora contraste) */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>
      <form className="flex flex-col items-center gap-10 animate-fadeIn ">



        <div className="flex flex-col items-center justify-center gap-3">

          {/* Linha de cima: título + imagem */}
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-[64px] font-['Orbitron'] font-semibold">
              <span
                className="
      text-white
      drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
    "
              >
                Cosmo
              </span>{' '}
              <span
                className="
      bg-gradient-to-r
      from-cyan-300
      to-blue-500
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]
    "
              >
                Sync
              </span>
            </h1>

            <img
              src="/src/assets/PlanetDestruction.png"
              alt="Logo"
              className="w-25 h-25 object-contain"
            />
          </div>

          {/* Linha de baixo */}
          <h2
            className="
      text-[25px]
      font-light
      tracking-wide
      text-white
      drop-shadow-[0_0_16px_rgba(255,255,255,0.85)]
      text-center
    "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Cadastro de Usuários
          </h2>

        </div>


        <div className="flex flex-col gap-1 -mt-6">
          <div>
            <label className="text-center text-[15px] font-normal text-white">
              Login<span>*</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl 
  bg-white/15
  backdrop-blur-sm
  border border-cyan-300/40
  text-white
  placeholder:text-white/85
  shadow-[0_0_20px_rgba(34,211,238,0.25)]
  focus:outline-none
  focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
  transition-all duration-300
  "
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
              className="w-full px-4 py-3 rounded-xl
  bg-white/15
  backdrop-blur-sm
  border border-cyan-300/40
  text-white
  placeholder:text-white/85
  shadow-[0_0_20px_rgba(34,211,238,0.25)]
  focus:outline-none
  focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
  transition-all duration-300"
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
    className="
      w-full
      px-4 py-3
      rounded-xl
      bg-white/15
      backdrop-blur-sm
      border border-cyan-300/40
      text-white
      placeholder:text-white/85
      outline-none
      shadow-[0_0_20px_rgba(34,211,238,0.25)]
      focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
      transition-all duration-300
    "
  />
</div>



          <div>
            <label className="text-center text-[15px] font-normal text-white">
              Senha<span>*</span>
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl
  bg-white/15
  backdrop-blur-sm
  border border-cyan-300/40
  text-white
  placeholder:text-white/85
  shadow-[0_0_20px_rgba(34,211,238,0.25)]
  focus:outline-none
  focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
  transition-all duration-300"
              type="email"
              placeholder="Senha do Usuário"
              ref={inputPassword}
            />
          </div>




        </div>

        <div className="flex justify-center mt-0">
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

        <div className="absolute left-6 bottom-7">
          <button
            type="button"
           onClick={() => navigate('/')}
            className="
      relative overflow-visible
      px-10 py-5 rounded-full
      text-white font-bold text-[22px]
      tracking-wide
      border border-black
      shadow-[0_0_20px_rgba(255,180,80,0.25)]
      hover:scale-105
      transition-all duration-300
      universe-button
      smoke-edge
      cursor-pointer
    "
            style={{
              backgroundImage: `url(${imgButtonSecundary})`,
              backgroundSize: "115%",
              backgroundPosition: "center"
            }}

          >
            Voltar a tela de login

          </button >

        </div>
      </form>
    </div>
  )
}

export default App