import { useNavigate } from "react-router-dom"
import imagefundo from "../../assets/imgFundoGalaxy.jpg"
import imgCardUsuarios from "/src/assets/astronauts/AstroButton.png"
import imgSaida from "/src/assets/astronauts/saidaa.png"
import imgNewUser from "/src/assets/astronauts/newuser.png"
import imgGalaxyIcon from "/src/assets/astronauts/simboly.png"
import { useEffect, useState } from "react"
import api from "../../services/api.js"
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



function Usuario() {
  const navigate = useNavigate()

  const astronautImages = [astro1, astro2, astro3, astro4, astro5, astro6, astro7, astro8, astro9, astro10, astro11, astro12]
  const [users, setUsers] = useState([])

  const [userPadrao, setUserPadrao] = useState(null)





  useEffect(() => {
    const usuarioSalvo = sessionStorage.getItem("usuarioDashboard")

    if (usuarioSalvo) {
      setUserPadrao(JSON.parse(usuarioSalvo))
    }
  }, [])



  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    sessionStorage.removeItem("usuarioDashboard")
    setUserPadrao(null)
  }
  


  return (
    <div
      className="
        relative
        min-h-screen
        flex flex-col items-center justify-center
        px-8
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${imagefundo})`
      }}
    >
      {/* Glow decorativo */}
      <div className="absolute top-24 w-96 h-32 bg-cyan-400/20 blur-3xl rounded-full"></div>

      {/* Estrelas */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src={imgGalaxyIcon}
            alt="Logo"
            className="w-50 h-50 object-contain"
          />

          <h1 className="text-white text-5xl font-bold drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            Dashboard Cosmo Sync
          </h1>
        </div>
        <div className="w-4 h-1 rounded-full  shadow-[0_0_20px_rgba(34,211,238,0.8)] mb-14"></div>

        {userPadrao && (
          <div className="mb-12 w-full flex justify-center">
            <div
              className="
      w-[500px]
      rounded-[35px]
      bg-black/80
      backdrop-blur-md
      border border-cyan-400/20
      shadow-[0_0_25px_rgba(34,211,238,0.15)]
      px-8 py-6
      flex items-center justify-between
    "
            >
              
              <div className="flex items-center gap-6">
                <img
                  src={astronautImages[userPadrao.avatarId]}
                  alt={userPadrao.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-white text-1xl font-bold">
                    {userPadrao.name}

                  </h2>

                  <p className="text-gray-300 text-lg">
                    {userPadrao.email}

                  </p>

                  <p className="text-gray-400 text-lg">
                    {userPadrao.age} anos

                  </p>
                </div>
              </div>

              <button 
              onClick={() => deleteUsers(userPadrao.id)}
              className="cursor-pointer text-white text-2xl hover:scale-110 transition-all">
                🗑️
              </button>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {/* Card 1 */}
          <div
            onClick={() => navigate("/home")}
            className="
              cursor-pointer
              relative
              rounded-[30px]
              p-8
              h-[320px]
              w-[280px]
              bg-gradient-to-b from-[#0d2c4f] to-[#08111d]
              border border-cyan-400/30
              shadow-[0_15px_30px_rgba(0,255,255,0.08)]
              hover:scale-105
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-full h-[calc(100%-12px)] bg-black rounded-[30px] flex flex-col items-center justify-center text-center px-6">
              <img
                src={imgNewUser}
                alt="Lista"
                className="w-28 h-42 mb-6 object-contain"
              />

              <h2 className="text-white text-2xl font-bold mb-4">
                Cadastrar Usuário
              </h2>

              <p className="text-gray-300 text-sm leading-6">
                Adicione novos usuários ao sistema com rapidez e segurança.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-3 bg-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.8)]"></div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => navigate("/lista-de-usuarios")}
            className="
              cursor-pointer
              relative
              rounded-[30px]
              p-8
              h-[320px]
              w-[280px]
              bg-gradient-to-b from-[#13254a] to-[#08111d]
              border border-purple-400/30
              shadow-[0_15px_30px_rgba(168,85,247,0.08)]
              hover:scale-105
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-full h-[calc(100%-12px)] bg-black rounded-[30px] flex flex-col items-center justify-center text-center px-6">
              <img
                src={imgCardUsuarios}
                alt="Lista"
                className="w-28 h-42 mb-6 object-contain"
              />

              <h2 className="text-white text-2xl font-bold mb-4">
                Lista de Usuários
              </h2>

              <p className="text-gray-300 text-sm leading-6">
                Visualize e gerencie todos os usuários cadastrados.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.8)]"></div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => {
               sessionStorage.removeItem("usuarioDashboard")
              navigate("/")}}
            className="
    cursor-pointer
    relative
    rounded-[30px]
    p-8
    h-[320px]
    w-[280px]
    bg-gradient-to-b from-[#4a0f0f] to-[#140505]
    border border-red-500/40
    shadow-[0_15px_30px_rgba(239,68,68,0.15)]
    hover:scale-105
    transition-all duration-300
    overflow-hidden
  "
          >
            <div className="absolute top-0 left-0 w-full h-[calc(100%-12px)] bg-black rounded-[30px] flex flex-col items-center justify-center text-center px-6">
              <img
                src={imgSaida}
                alt="Lista"
                className="w-50 h-42 mb-6 object-contain"
              />

              <h2 className="text-white text-2xl font-bold mb-4">
                Sair
              </h2>

              <p className="text-gray-300 text-sm leading-6">
                Encerrar sessão e retornar para a tela inicial.
              </p>
            </div>

            {/* faixa vermelha embaixo */}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.9)]"></div>
          </div>


        </div>
      </div>
    </div>


  )
}

export default Usuario