import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import VideoFundo from "../../assets/PlayerVideoFundo.webm"
import imgButton from "../../assets/imgButtonTwo.png"
import imgButtonTwo from "../../assets/planetBlue2.jpg"
import imgButtonTree from "../../assets/planetBlue.jpg"
import api from "../../services/api.js"
import { toast } from "react-toastify"
import imgLogo from "../../assets/planetDestruction.png"
import fallbackImg from "/src/assets/img2.webp"

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
    <div className="page-login relative h-screen flex flex-col items-center justify-evenly p-5 overflow-hidden">

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
      />

      <div className="fixed inset-0 bg-black/20 -z-20 pointer-events-none" />

      <form className="flex flex-col items-center gap-8 h-full justify-center">

        {/* TÍTULO */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-[64px] font-semibold">
            <span className="text-white">Cosmo</span>{" "}
            <span className="text-cyan-300">Sync</span>
          </h1>

          <img src={imgLogo} alt="Logo" className="w-20 h-20" />
        </div>

        <h2 className="text-[25px] text-white text-center">
          Login de Sistema
        </h2>

        {/* INPUTS */}
        <div className="flex flex-col gap-4 w-full max-w-[350px]">
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/15 text-white"
            type="text"
            placeholder="Login"
            ref={inputLogin}
          />

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/15 text-white"
            type="password"
            placeholder="Senha"
            ref={inputPassword}
          />
        </div>

        {/* BOTÕES PRINCIPAIS */}
        <div className="flex gap-6 justify-center mt-12 flex-wrap">
          <button
            type="button"
            onClick={handleLogin}
            className="btn-main"
            style={{ backgroundImage: `url(${imgButtonTwo})` }}
          >
            Entrar
          </button>

          <button
            type="button"
            onClick={() => navigate("/home")}
            className="btn-main"
            style={{ backgroundImage: `url(${imgButton})` }}
          >
            Registrar-se
          </button>
        </div>

        {/* ESQUECI SENHA */}
        <div className="btn-wrapper w-full flex justify-center md:absolute md:left-6 md:bottom-6 md:w-auto md:block">
          <button
            type="button"
            onClick={() => navigate("/recuperar-senha")}
            className="btn-main"
            style={{ backgroundImage: `url(${imgButtonTree})` }}
          >
            Esqueci a Senha
          </button>
        </div>

      </form>
    </div>
  )
}

export default Login