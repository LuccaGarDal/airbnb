'use client'
import BotaoIcone from "@/components/BotaoIcone"
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

const NavegacaoAbasHorizontal = () => {
    return (
        <div className="flex flex-row items-center">
            
            {/* Navegação por filtros */}
            <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
                640: {slidesPerView:3},
                764: {slidesPerView:4},
                1024: {slidesPerView:6},
                1280: {slidesPerView:9}
            }}
            >

            
            </Swiper>
            
            {/* Ícone de filtro */}
            <BotaoIcone 
            icone={(
                <IconAdjustmentsHorizontal aria-label="Imagem de usuário"
                size={20}/>
                )}>
                Filtros
          </BotaoIcone>
        </div>
    )
}

export default NavegacaoAbasHorizontal