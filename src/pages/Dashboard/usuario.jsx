import { useNavigate } from "react-router-dom"
import imagefundo from "../../assets/FundoDashboard/imgFundoGalaxy.jpg"
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
      page-dashboard
      relative
      min-h-screen
      flex flex-col items-center
      px-8 py-10
      max-[480px]:px-4
      max-[480px]:py-6
      pb-24
      bg-cover bg-center bg-no-repeat
      overflow-y-auto
    "
      style={{
        backgroundImage: `url(${imagefundo})`
      }}
    >

      <div className="absolute top-24 w-96 h-32 bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>

      <div className="
      relative z-10 flex flex-col items-center
      scale-[0.62] origin-top -mb-90
max-[1024px]:scale-[0.8]
max-[768px]:scale-[0.7]
max-[480px]:scale-80

    ">

        {/* HEADER */}
        <div className="
        flex items-center justify-center gap-2 mb-10
        max-[480px]:flex-col
        max-[480px]:gap-4
        max-[480px]:mb-6
      ">

          <img
            src={imgGalaxyIcon}
            alt="Logo"
            className="w-40 h-50 object-contain mt-6 max-[480px]:w-24 max-[480px]:h-24 max-[480px]:mt-2"
          />

          <h1 className="
          text-white mt-10 text-6xl font-bold
          drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]
          max-[768px]:text-4xl
          max-[480px]:text-3xl
          max-[480px]:mt-2
          text-center
        ">
            Dashboard Cosmo Sync
          </h1>
        </div>

        {userPadrao && (
          <div className="mb-16 flex justify-center w-full max-[480px]:mb-10">
            <div
              className="
              w-[500px]
              max-[480px]:w-[90%]
              rounded-[35px]
              bg-black/80
              backdrop-blur-md
              border border-cyan-400/20
              shadow-[0_0_25px_rgba(34,211,238,0.15)]
              px-8 py-12
              max-[480px]:px-4 max-[480px]:py-6
              flex items-center justify-between
              max-[480px]:flex-col max-[480px]:gap-4
            "
            >
              <div className="flex items-center gap-6 max-[480px]:gap-4">
                <img
                  src={astronautImages[userPadrao.avatarId]}
                  alt={userPadrao.name}
                  className="w-20 h-20 max-[480px]:w-14 max-[480px]:h-14 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-white text-xl font-bold max-[480px]:text-base">
                    {userPadrao.name}
                  </h2>

                  <p className="text-gray-300 text-lg max-[480px]:text-sm">
                    {userPadrao.email}
                  </p>

                  <p className="text-gray-400 text-lg max-[480px]:text-sm">
                    {userPadrao.age} anos
                  </p>
                </div>
              </div>

              <button
                onClick={() => deleteUsers(userPadrao.id)}
                className="cursor-pointer text-white text-2xl hover:scale-110 transition-all max-[480px]:text-xl"
              >
                🗑️
              </button>
            </div>
          </div>
        )}

        {/* CARDS */}
        <div className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-2
lg:grid-cols-3
gap-8
max-[1024px]:gap-14
max-[768px]:gap-12
w-full
max-w-5xl
justify-items-center
">

          {/* CARD 1 */}
          <div
            onClick={() => navigate("/home")}
            className="
            cursor-pointer
            relative
            rounded-[30px]
            p-8
            h-[320px] w-[280px]
            max-[480px]:h-[250px] max-[480px]:w-[220px]
            bg-gradient-to-b from-[#CC00FF] to-[#3a0050]
            border border-[#CC00FF]/40
            shadow-[0_15px_30px_rgba(204,0,255,0.25)]
            hover:scale-105
            transition-all duration-300
            overflow-hidden
          "
          >
            <div className="absolute top-0 left-0 w-full h-[calc(100%-12px)] bg-black rounded-[30px] flex flex-col items-center justify-center text-center px-6">
              <img src={imgNewUser} alt="Lista" className="w-28 h-42 mb-6 object-contain max-[480px]:w-20 max-[480px]:mb-4" />
              <h2 className="text-white text-2xl font-bold mb-4 max-[480px]:text-lg">Cadastrar Usuário</h2>
              <p className="text-gray-300 text-sm leading-6 max-[480px]:text-xs">Adicione novos usuários ao sistema com rapidez e segurança.</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.8)]"></div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() => navigate("/lista-de-usuarios")}
            className="
            cursor-pointer
            relative
            rounded-[30px]
            p-8
            h-[320px] w-[280px]
            max-[480px]:h-[250px] max-[480px]:w-[220px]
            bg-gradient-to-b from-[#FF6A00] to-[#3a1400]
            border border-orange-400/40
            shadow-[0_15px_30px_rgba(255,106,0,0.25)]
            hover:scale-105
            transition-all duration-300
            overflow-hidden
          "
          >
            <div className="absolute top-0 left-0 w-full h-[calc(100%-12px)] bg-black rounded-[30px] flex flex-col items-center justify-center text-center px-6">
              <img src={imgCardUsuarios} alt="Lista" className="w-28 h-42 mb-6 object-contain max-[480px]:w-20 max-[480px]:mb-4" />
              <h2 className="text-white text-2xl font-bold mb-4 max-[480px]:text-lg">Lista de Usuários</h2>
              <p className="text-gray-300 text-sm leading-6 max-[480px]:text-xs">Visualize e gerencie todos os usuários cadastrados.</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.8)]"></div>
          </div>

          {/* CARD 3 */}
          <div
            onClick={() => {
              sessionStorage.removeItem("usuarioDashboard")
              navigate("/")
            }}
            className="
            cursor-pointer
            relative
            rounded-[30px]
            p-8
            h-[320px] w-[280px]
            max-[480px]:h-[250px] max-[480px]:w-[220px]
            bg-gradient-to-b from-[#4a0f0f] to-[#140505]
            border border-red-500/40
            shadow-[0_15px_30px_rgba(239,68,68,0.15)]
            hover:scale-105
            transition-all duration-300
            overflow-hidden
          "
          >
            <div className="absolute top-0 left-0 w-full h-[calc(100%-12px)] bg-black rounded-[30px] flex flex-col items-center justify-center text-center px-6">
              <img src={imgSaida} alt="Lista" className="w-41 h-42 mb-6 object-contain max-[480px]:w-28 max-[480px]:mb-4" />
              <h2 className="text-white text-2xl font-bold mb-4 max-[480px]:text-lg">Sair</h2>
              <p className="text-gray-300 text-sm leading-6 max-[480px]:text-xs">Encerrar sessão e retornar para a tela inicial.</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.9)]"></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Usuario