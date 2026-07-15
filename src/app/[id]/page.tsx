import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";

interface PageProps {
    id: string
}

export default async function Page(
    {params} : {params: PageProps}
) {
    const dados = await params;

    console.log(dados);
    return (
        <div>
            
            <header className="container mx-auto ">
                <BarraSuperior />
                <BarraPesquisa />
            </header>

            <main className="container mx-auto py-6">
                <h1 className="text-3xl">Rancho da Lua</h1>
            </main>

            <footer className="bg-gray-300">
                <Rodape />
            </footer>

        </div>
    )
}
