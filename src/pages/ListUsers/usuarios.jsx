import { useEffect, useState } from "react"
import api from "../../services/api.js"
import DefaultButton from "../../components/Button/index.jsx"
import imgButtonPrimary from "../../assets/AstroLava.png"
import imgButtonSecundary from "../../assets/planetBlue.jpg"
import lixeira from "../../assets/Lixo.png"
import { useNavigate } from "react-router-dom"
import imagefundo from "../../assets/imgUsuarios1.jpg"
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
  const astronautImages = [astro1, astro2, astro3, astro4, astro5, astro6, astro7, astro8, astro9, astro10, astro11, astro12]
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    async function getUsers() {
      const { data } = await api.get('/usuarios')

      setUsers(data)
    }
    getUsers()
  }, [])

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter(user => user.id !== id)

    setUsers(updatedUsers)

  }


  return (
    <div>



      <div
        className="bg-fixed min-h-screen w-screen flex flex-col items-center px-10 py-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imagefundo})`,
          backgroundSize: "100%"
        }}
      >
        <div className="relative inline-block mb-8">
          <h2
            className="
      text-6xl font-black text-center
      text-white
      tracking-widest
      drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
      bg-5
    "
          >
            Lista de Usuários
          </h2>

          <span className="absolute -top-2 -left-6 text-cyan-200 animate-pulse">✦</span>
          <span className="absolute top-2 -right-6 text-purple-400 animate-pulse">✧</span>
          <span className="absolute -bottom-2 left-1/2 text-white animate-pulse">✦</span>
        </div>

        <div className="grid grid-cols-3 gap-20">
          {users.map((user) => (


            <div


              key={user.id}
              className="
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]
              capitalize
              pl-[40px]
    w-full max-w-[350px]
    p-5 rounded-[40px]
    flex justify-between items-center
    gap-5
    border border-cyan-400/30
    bg-black/70
    backdrop-blur-md
    shadow-[0_0_20px_rgba(34,211,238,0.15)]
  "
            >
              <img
                src={astronautImages[user.avatarId]}
                alt={user.name}
                className="w-[55px] h-[55px] rounded-full"
              />

              <div className="text-white">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm opacity-80">{user.email}</p>
                <p className="text-sm opacity-80">{user.age} anos</p>
              </div>

              <img
                src={lixeira}
                alt="icone-lixo"
                onClick={() => deleteUsers(user.id)}
                className="w-6 h-6 cursor-pointer hover:scale-110 transition hover:opacity-80 active:opacity-50"
              />

            </div>



          ))}

        </div>


        <div className="sticky top-0 w-full flex justify-between items-center p-4 bg-black/30 backdrop-blur-md z-50">
          <DefaultButton
            onClick={() => navigate("/dashboard")}
            style={{
              backgroundImage: `url(${imgButtonSecundary})`,
              backgroundSize: "148%",
              backgroundPosition: "center",
            }}
          >Voltar</DefaultButton>

          <DefaultButton
            onClick={() => navigate("/")}
            style={{
              backgroundImage: `url(${imgButtonPrimary})`,
              backgroundSize: "148%",
              backgroundPosition: "center",
            }}
          >
            Sair
          </DefaultButton>
        </div>
      </div>
    </div>
  )
}

export default ListUsers