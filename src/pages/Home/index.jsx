import { useRef } from 'react';
import VideoFundo from '/src/assets/universy-video.mp4'
import img3 from "/src/assets/img3.png";




function App() {
  const inputName = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()

  function registerNewUser() {
    console.log(inputName.current.value)
  }


  return (

    <div className="relative h-screen flex flex-col items-center justify-evenly p-5 overflow-hidden">

      {/* 🎥 Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={VideoFundo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔥 Overlay escuro opcional (melhora contraste) */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>
      <form className="flex flex-col items-center gap-10 animate-fadeIn ">



        <h1
          className="
    text-center
    text-[55px]
    font-light
    tracking-wide
    text-white
    drop-shadow-[0_0_16px_rgba(255,255,255,0.85)]
  "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cadastro de Usuários
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-center text-[15px] font-normal text-white">
              Nome<span>*</span>
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
              placeholder="Nome do Usuário"
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
              ref={inputIdade}

            />

          </div>

          <div>
            <label className="text-center text-[15px] font-normal text-white">
              Email<span>*</span>
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
              placeholder="E-mail do Usuário"
              ref={inputEmail}
            />
          </div>
        </div>

        <button
          type="button" onClick={registerNewUser}
          className="
  relative overflow-visible
  px-16 py-5 rounded-full
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
            backgroundSize: "contain",
            backgroundSize: "150%",
            backgroundPosition: "center"
          }}
        >

          Cadastrar

        </button>
      </form>
    </div>
  )
}

export default App