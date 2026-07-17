import { AirBnbApi } from "@/types/AirbnbDados"

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