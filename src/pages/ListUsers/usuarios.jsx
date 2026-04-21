import { useEffect, useState } from "react"
import api from "../../services/api.js"
import DefaultButton from "../../components/Button/index.jsx"
import imgButtonSecundary from "../../assets/FundoUsuarios/fundousuario1.jpg"
import { useNavigate } from "react-router-dom"
import imagefundo from "../../assets/FundoUsuarios/fundousuario6.jpg"

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

function ListUsers() {
  const astronautImages = [
    astro1, astro2, astro3, astro4, astro5, astro6,
    astro7, astro8, astro9, astro10, astro11, astro12
  ]

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios')
      setUsers(data)
    }
    getUsers()
  }, [])

  return (
    <div className="list-users-page">

      <div
        className="
          min-h-screen w-full flex flex-col items-center
          px-10 py-8
          max-[480px]:px-4 max-[480px]:py-6
          bg-cover bg-center bg-no-repeat
          overflow-x-hidden
        "
        style={{
          backgroundImage: `url(${imagefundo})`
        }}
      >

        {/* TÍTULO */}
        <div className="
          relative inline-block mt-12 mb-30 overflow-hidden
          max-[480px]:mt-6 max-[480px]:mb-16
        ">
          <h2
            className="
              text-6xl
              max-[768px]:text-4xl
              max-[480px]:text-3xl
              font-extrabold
              text-center
              text-white
              tracking-wide
              drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]
              leading-tight
            "
          >
            Lista de Usuários
          </h2>

          <span className="absolute -top-2 -left-6 text-cyan-200 animate-pulse">✦</span>
          <span className="absolute top-2 -right-6 text-purple-400 animate-pulse">✧</span>
          <span className="absolute -bottom-2 left-1/2 text-white animate-pulse">✦</span>
        </div>

        
        <div className="
          grid grid-cols-3 mt-12 gap-20 justify-items-center

          max-[1024px]:grid-cols-2
          max-[768px]:grid-cols-2
          max-[480px]:grid-cols-1

          max-[1024px]:gap-14
          max-[768px]:gap-12
          max-[480px]:gap-8
        ">

          {users.map((user) => (

            <div
              key={user.id}
              className="
                transition-all duration-300 hover:scale-105
                hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]
                capitalize
                w-full max-w-[350px]
                max-[480px]:max-w-[280px]
                p-5 pl-6
                rounded-[400px]
                flex items-center justify-start gap-5
                border border-cyan-400/30
                bg-black/70 backdrop-blur-md
                shadow-[0_0_20px_rgba(34,211,238,0.15)]
              "
            >
              <img
                src={astronautImages[user.avatarId]}
                alt={user.name}
                className="
                  w-[55px] h-[55px] rounded-full
                  max-[480px]:w-[45px] max-[480px]:h-[45px]
                "
              />

              <div className="text-white">
                <p className="font-semibold max-[480px]:text-sm">{user.name}</p>
                <p className="text-sm opacity-80 max-[480px]:text-xs">Novato</p>
                <p className="text-sm opacity-80 max-[480px]:text-xs">
                  {user.age} anos
                </p>
              </div>

            </div>

          ))}

        </div>

        {/* BOTÃO */}
       <div className="btn-center-fixed mt-20 max-[480px]:mt-10">
          <DefaultButton
            onClick={() => navigate("/dashboard")}
            style={{
              backgroundImage: `url(${imgButtonSecundary})`,
              backgroundSize: "120%",
              backgroundPosition: "center",
            }}
          >
            Voltar
          </DefaultButton>
        </div>

      </div>
    </div>
  )
}

export default ListUsers