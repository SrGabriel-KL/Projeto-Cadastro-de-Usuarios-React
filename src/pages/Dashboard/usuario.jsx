import { useNavigate } from "react-router-dom"
import imagefundo from "../../assets/AstroCubo.png"

function Usuario() {
  const navigate = useNavigate()

  return (
    <div
  className="
    min-h-screen
    flex flex-col items-center justify-center
    px-8
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: `url(${imagefundo})`
  }}
>
        
      <h1 className="text-white text-5xl font-bold mb-14 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
        Dashboard Cosmo Sync
      </h1>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <button
          onClick={() => navigate("/home")}
          className="
            p-10 rounded-3xl
            bg-white/10 backdrop-blur-md
            border border-cyan-400/30
            text-white text-2xl font-bold
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
            transition-all duration-300
          "
        >
          Cadastrar Usuário
        </button>

        <button
          onClick={() => navigate("/lista-de-usuarios")}
          className="
            p-10 rounded-3xl
            bg-white/10 backdrop-blur-md
            border border-cyan-400/30
            text-white text-2xl font-bold
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
            transition-all duration-300
          "
        >
          Lista de Usuários
        </button>

        <button
          onClick={() => navigate("/")}
          className="
            p-10 rounded-3xl
            bg-white/10 backdrop-blur-md
            border border-red-400/30
            text-white text-2xl font-bold
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
            transition-all duration-300
          "
        >
          Sair
        </button>
      </div>
    </div>
  )
}

export default Usuario