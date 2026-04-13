import { useNavigate } from "react-router-dom"
import imagefundo from "../../assets/planet2.jpg"

function ForgotPassword() {

    const navigate = useNavigate()
  return (
    <div
      className="
        relative min-h-screen
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${imagefundo})`
      }}
    >
        {/* camada escura */}
      <div className="absolute inset-0 bg-black/0"></div>


      <div
        className="
          relative z-10
          w-[380px]
          bg-white/10
          backdrop-blur-md
          rounded-2xl
          p-8
          shadow-6xl
          border border-white/10
        "
      >
        <h1 className="text-white text-3xl font-bold mb-2">
          Recuperação de senha
        </h1>

        <p className="text-white text-sm mb-6">
          Digite seu email para receber instruções
        </p>

        <input
          type="email"
          placeholder="Digite seu email"
          className="
            w-full
            p-3
            rounded-lg
            bg-white/10
            border border-white/20
            text-white
            placeholder-white
            outline-none
            focus:border-white
            mb-4
          "
        />

        <button
          className="
            cursor-pointer
            w-full
            py-3
            rounded-lg
            bg-gradient-to-r
            bg-black
            text-white
            font-bold
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Enviar link
        </button>
      <div className="flex justify-center mt-5">
        <button 
        onClick={()=> navigate ("/")}
        className="font-extrabold cursor-pointer text-center text-1xl text-white mt-5 hover:text-white transition-all">
           
          Voltar ao login
          
        </button>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword