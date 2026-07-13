import Logo from "@/components/Logo/Logo"
import Link from "next/link"

const BarraSuperior = () => {
    return (
        <div className="container mx-auto py-6 flex justify-between items-center">

          <Logo />

          <div className="flex gap-6">
            <Link className="font-bold" href={""}>Acomodações</Link> 
            <Link className="opacity-60" href={""}>Experiências</Link>
          </div>

          <button className="rounded-md border-2">Entrar</button>

        </div>
    )
}

export default BarraSuperior