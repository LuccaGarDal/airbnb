import React from "react"

interface BotaoIconeProps {
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoIcone = (props: BotaoIconeProps) => {
    return (
        <div>
            
            <button className="rounded-xl border-2 border-gray-300 flex items-center
            px-4 py-2 hover:border-gray-400 gap-2">
                <span>{props.icone}</span>
                <span>{props.children}</span>
            </button>
        </div>
    )
}

export default BotaoIcone