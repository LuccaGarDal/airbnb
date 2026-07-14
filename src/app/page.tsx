import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";

export default function Home() {
  return (
    <>
      <header className="container mx-auto ">

        <BarraSuperior />
        <BarraPesquisa />
        <NavegacaoAbasHorizontal />

      </header>

      <hr className="py-3"/>

      <main className="container mx-auto border-green-500 border-2 mt-10">

      </main>


      <footer className="container mx-auto border-purple-500 border-2">

      </footer>
    </>
  );
}
