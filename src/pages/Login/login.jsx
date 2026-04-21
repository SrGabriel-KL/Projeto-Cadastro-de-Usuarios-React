import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import VideoFundo from "../../assets/PlayerVideoFundo.webm"
import imgButton from "../../assets/imgButtonTwo.png"
import imgButtonTwo from "../../assets/planetBlue2.jpg"
import imgButtonTree from "../../assets/planetBlue.jpg"
import api from "../../services/api.js"
import { toast } from "react-toastify"
import imgLogo from "../../assets/planetDestruction.png"
import fallbackImg from "../../assets/img2.webp"
import "../../App.css"

function Login() {
  const inputLogin = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate()

  async function handleLogin() {
    const login = inputLogin.current.value.trim()
    const password = inputPassword.current.value.trim()

    if (!login || !password) {
      toast("Preencha login e senha válidos.")
      return
    }

    try {
      const response = await api.post("/login", {
        name: login,
        password
      })

      sessionStorage.setItem(
        "usuarioDashboard",
        JSON.stringify(response.data.user)
      )

      toast.success("Bem-vindo ao sistema Cosmo Sync!")
      navigate("/dashboard")
    } catch {
      toast.error("Senha ou login incorretos.")
    }
  }

  return (
    <div className="page-login relative min-h-screen flex flex-col items-center justify-start pt-20 p-5">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: `url(${fallbackImg})` }}
      />

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

      <div className="absolute inset-0 bg-black/20 -z-10 pointer-events-none"></div>

      <form className="flex flex-col items-center gap-8 w-full max-w-[400px]">

        {/* TÍTULO */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-[40px] md:text-[64px] font-['Orbitron'] font-semibold text-center">
            <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
              Cosmo
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              Sync
            </span>
          </h1>

          <img src={imgLogo} alt="Logo" className="w-16 h-16 md:w-25 md:h-25" />
        </div>

        {/* SUBTÍTULO */}
        <h2 className="text-[20px] md:text-[25px] text-white text-center">
          Login de Sistema
        </h2>

        {/* INPUTS */}
        <div className="flex flex-col gap-4 w-full">
          <input
            className="block w-[280px] max-w-[280px] mx-auto px-4 py-2 rounded-xl bg-white/15 backdrop-blur-sm border border-cyan-300/40 text-white placeholder:text-white/85 shadow-[0_0_20px_rgba(34,211,238,0.25)] focus:outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300" placeholder="Login"
            ref={inputLogin}
            type="string"
            placeholder="Login"
          />

          <input
            className="block w-[280px] max-w-[280px] mx-auto px-4 py-2 rounded-xl bg-white/15 backdrop-blur-sm border border-cyan-300/40 text-white placeholder:text-white/85 shadow-[0_0_20px_rgba(34,211,238,0.25)] focus:outline-none focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300" placeholder="Senha"
            ref={inputPassword}
            type="password"
            placeholder="Senha"
          />
        </div>

        {/* BOTÕES PRINCIPAIS */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6">

          <button
            type="button"
            onClick={handleLogin}
            className="flex items-center justify-center h-[50px] w-[200px] sm:w-[240px] md:w-[280px] rounded-full text-white font-bold text-[14px] sm:text-[18px] md:text-[22px] tracking-wide border border-black shadow-[0_0_20px_rgba(255,180,80,0.25)] hover:scale-105 transition-all duration-300 universe-button smoke-edge cursor-pointer" style={{
              backgroundImage: `url(${imgButtonTwo})`,
              backgroundSize: "120%",
              backgroundPosition: "center"
            }}
          >
            Entrar
          </button>

          <button
            type="button"
            onClick={() => navigate("/home")}
            className="flex items-center justify-center h-[50px] w-[200px] sm:w-[240px] md:w-[280px] rounded-full text-white font-bold text-[14px] sm:text-[18px] md:text-[22px] tracking-wide border border-black shadow-[0_0_20px_rgba(255,180,80,0.25)] hover:scale-105 transition-all duration-300 universe-button smoke-edge cursor-pointer" style={{
              backgroundImage: `url(${imgButton})`,
              backgroundSize: "115%",
              backgroundPosition: "center"
            }}
          >
            Registra-se
          </button>

        </div>

        {/* ESQUECI SENHA */}
        <div className="w-full flex justify-center mt-4 md:absolute md:left-6 md:bottom-6 md:w-auto md:block">

          <button
            type="button"
            onClick={() => navigate("/recuperar-senha")}
            className="flex items-center justify-center h-[50px] w-[200px] sm:w-[240px] md:w-[280px] rounded-full text-white font-bold text-[50px] sm:text-[18px] md:text-[22px] tracking-wide border border-black shadow-[0_0_20px_rgba(255,180,80,0.25)] hover:scale-105 transition-all duration-300 universe-button smoke-edge cursor-pointer" style={{
              backgroundImage: `url(${imgButtonTree})`,
              backgroundSize: "120%",
              backgroundPosition: "center"
            }}
          >
            Esqueci a Senha
          </button>

        </div>

      </form>
    </div>
  )
}

export default Login