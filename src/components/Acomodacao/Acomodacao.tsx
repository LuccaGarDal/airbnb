import { IconHeartFilled, IconStarFilled } from "@/assets/icones"
import React from "react"

interface AcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHospedes: boolean
}

const Acomodacao = ({children, local, anfitriao, data, preco, avaliacao, preferidoHospedes} : AcomodacaoProps) => {
    return (
        <figure className="relative">

            <div className="absolute p-2 w-full flex flex-row justify-between items-center">

                <div>
                    {preferidoHospedes && (
                        <span className="bg-white rounded-full px-4 py-1 font-semibold">
                            Preferido dos hóspedes
                        </span>
                    )}
                </div>

                <IconHeartFilled className="stroke-white opacity-80"
                aria-label="Imagem de usuário"
                size={30}
                color="black"
                />
            </div>

            {children}

            <figcaption className="pt-2">
                <div className="flex flex-row justify-between">
                    <span className="font-semibold">{local}</span>
                    <div className="flex flex-row">
                        <IconStarFilled aria-label="Imagem de usuário"
                        size={20}
                        color="black"/>
                        <span className="font-semibold">{avaliacao}</span>
                    </div>
                </div>

                <div>Anfitriã(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R${preco}</div>
            </figcaption>
        </figure>
    )
}

export default Acomodacao