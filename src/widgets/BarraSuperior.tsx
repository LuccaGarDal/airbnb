import Logo from "@/components/Logo"
import Link from "next/link"
import BotaoIcone from "@/components/BotaoIcone"
import { IconUserCircle } from "@tabler/icons-react"

const BarraSuperior = () => {
    return (
        <div className="py-6 flex justify-between items-center">

          <Logo />

          <div className="flex gap-6">
            <Link className="font-bold" href={""}>Acomodações</Link> 
            <Link className="opacity-60" href={""}>Experiências</Link>
          </div>

          <BotaoIcone 
          icone={(
            <IconUserCircle aria-label="Imagem de usuário"
            size={20}/>
            )}>
            Entrar
          </BotaoIcone>

        </div>
    )
}

export default BarraSuperior