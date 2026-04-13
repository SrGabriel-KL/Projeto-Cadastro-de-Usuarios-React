import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import VideoFundo from '/src/assets/PlayerVideoFundo.webm'
import imgButton from "/src/assets/imgButtonTwo.png"
import imgButtonTwo from "/src/assets/planetBlue2.jpg"
import imgButtonTree from "/src/assets/planetBlue.jpg"




function Login() {
  const inputEmail = useRef()
  const inputPassword = useRef()

  const navigate = useNavigate()


  function loginUser() {
    const email = inputEmail.current.value
    const password = inputPassword.current.value

    if (email && password) {
      navigate("/Home")
    }
  }

  return (
    <div className="relative h-screen flex flex-col items-center justify-evenly p-5 overflow-hidden">

      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
        src={VideoFundo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <form className="flex flex-col items-center gap-12">

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
          Login de Sistema
        </h2>

        <div className="flex flex-col gap-4">
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
            placeholder="Login"
            ref={inputEmail}

          />

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
            type="password"
            placeholder="Senha"
            ref={inputPassword}

          />
        </div>



        <div className="absolute left-6 bottom-6">
          <button
            type="button"
            onClick={() => navigate("/recuperar-senha")}
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
              backgroundImage: `url(${imgButtonTree})`,
              backgroundSize: "120%",
              backgroundPosition: "center"
            }}
          >
            Esqueci a Senha
          </button>
        </div>




        <div className="flex gap-6 justify-center mt-6">
          <button
            type="button"
            onClick={()=> navigate("/dashboard")}
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
              backgroundImage: `url(${imgButtonTwo})`,
              backgroundSize: "120%",
              backgroundPosition: "center"
            }}
          >
            Entrar
          </button>

          <button
            type="button"
            onClick={()=> navigate("/home")}
            className="
                   px-16 py-5 rounded-full text-white font-bold
                     relative overflow-visible
                     px-12 py-0 rounded-full
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
              backgroundImage: `url(${imgButton})`,
              backgroundSize: "115%",
              backgroundPosition: "center"
            }}
          >
            Registra-se
          </button>
        </div>
      </form>
    </div>

  )

}

export default Login