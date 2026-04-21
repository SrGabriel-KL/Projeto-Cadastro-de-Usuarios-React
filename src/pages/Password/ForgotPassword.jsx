import { useNavigate } from "react-router-dom"
import { useState } from "react"
import imagefundo from "../../assets/imgUsuarios1.jpg"
import axios from "axios"
import { toast } from "react-toastify"

function ForgotPassword() {
  const navigate = useNavigate()

  const [etapa, setEtapa] = useState("email")
  const [email, setEmail] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [mensagemErro, setMensagemErro] = useState("")
  const [mensagemSucesso, setMensagemSucesso] = useState("")

  async function handleRecuperarSenha() {
    try {
      const response = await axios.post("http://localhost:3000/recuperar-senha", {
        email
      })

      if (response.status === 200) {
        toast.success("E-mail reconhecido com sucesso!.")
        setEtapa("novaSenha")
      }
    } catch (error) {
      console.log(error)
      console.log(error.response?.data)
      toast.error("E-mail não encontrado")
    }
  }

  async function handleSalvarSenha() {
    if (novaSenha.trim() === "" || confirmarSenha.trim() === "") {
      toast.error("Preencha todos os campos")
      return
    }

    if (novaSenha !== confirmarSenha) {
      toast.error("As senhas não coincidem")
      return
    }

    try {
      const response = await axios.put("http://localhost:3000/atualizar-senha", {
        email,
        novaSenha
      })

      if (response.status === 200) {
        toast.success("Senha alterada com sucesso!")

        setTimeout(() => {
          navigate("/")
        }, 1600)
      }
    } catch (error) {
      setMensagemErro("Erro ao salvar senha")
      console.log(error)
    }
  }

  return (
    <div
      className="
        relative min-h-screen
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        overflow-hidden
        px-4
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
          max-[480px]:w-full
          max-[480px]:max-w-[320px]
          bg-white/10
          backdrop-blur-md
          rounded-2xl
          p-8
          max-[480px]:p-6
          shadow-6xl
          border border-white/10
        "
      >
        <h1 className="
          text-white text-3xl font-bold mb-2
          max-[480px]:text-2xl
        ">
          {etapa === "email" ? "Recuperação de senha" : "Nova Senha"}
        </h1>

        <p className="
          text-white text-sm mb-6
          max-[480px]:text-xs
        ">
          {etapa === "email"
            ? "Digite seu email para recuperar sua senha"
            : "Digite e confirme sua nova senha"}
        </p>

        {etapa === "email" ? (
          <>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                p-3
                max-[480px]:p-2.5
                rounded-lg
                bg-white/10
                border border-white/20
                text-white
                placeholder-white
                outline-none
                focus:border-white
                mb-4
                max-[480px]:text-sm
              "
            />

            {mensagemErro && (
              <p className="text-red-300 text-sm mb-3">
                {mensagemErro}
              </p>
            )}

            <button
              onClick={handleRecuperarSenha}
              className="
                cursor-pointer
                w-full
                py-3
                max-[480px]:py-2.5
                rounded-lg
                bg-black
                text-white
                font-bold
                hover:scale-105
                transition-all
                duration-300
                max-[480px]:text-sm
              "
            >
              Recuperar Senha
            </button>
          </>
        ) : (
          <>
            <input
              type="password"
              placeholder="Nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              className="
                w-full
                p-3
                max-[480px]:p-2.5
                rounded-lg
                bg-white/10
                border border-white/20
                text-white
                placeholder-white
                outline-none
                focus:border-white
                mb-4
                max-[480px]:text-sm
              "
            />

            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="
                w-full
                p-3
                max-[480px]:p-2.5
                rounded-lg
                bg-white/10
                border border-white/20
                text-white
                placeholder-white
                outline-none
                focus:border-white
                mb-4
                max-[480px]:text-sm
              "
            />

            {mensagemErro && (
              <p className="text-red-300 text-sm mb-3">
                {mensagemErro}
              </p>
            )}

            {mensagemSucesso && (
              <p className="text-green-300 text-sm mb-3">
                {mensagemSucesso}
              </p>
            )}

            <button
              onClick={handleSalvarSenha}
              className="
                cursor-pointer
                w-full
                py-3
                max-[480px]:py-2.5
                rounded-lg
                bg-black
                text-white
                font-bold
                hover:scale-105
                transition-all
                duration-300
                max-[480px]:text-sm
              "
            >
              Salvar Senha
            </button>
          </>
        )}

        <div className="flex justify-center mt-5">
          <button
            onClick={() => navigate("/")}
            className="
              font-extrabold
              cursor-pointer
              text-center
              text-1xl
              text-white
              mt-5
              hover:text-white
              transition-all
              max-[480px]:text-sm
            "
          >
            Voltar ao login
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword