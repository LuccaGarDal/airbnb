import { Accommodation, AirBnbApi } from "@/types/AirbnbDados"

export async function fetchData(): Promise<AirBnbApi> {
    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const dados = response.json()
        return dados
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function fetchDataById( id: string ): Promise<Accommodation | undefined> {
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find((item: Accommodation) => {
            return item.slug === decodeURIComponent(id)
        })
        return acomodacao

    } catch (e) {
        console.log(e)
        throw e
    }
}