import { fetchData } from "@/utils/api";
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";

export default async function Home() {

  const dados = await fetchData()

  return (
    <>
      {dados.accommodation[0].title}
      <header className="container mx-auto ">
        <BarraSuperior />
        <BarraPesquisa />

      </header>

      <hr className="my-6 text-gray-300" />

      <main className="container mx-auto">
        <NavegacaoAbasHorizontal />
        <Acomodacoes />
      </main>

      <footer className="bg-gray-300">
        <Rodape />
      </footer>
    </>
  );
}
