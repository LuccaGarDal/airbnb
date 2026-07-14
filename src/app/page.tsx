import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";

export default function Home() {
  return (
    <>
      <header className="container mx-auto ">

        <BarraSuperior />
        <BarraPesquisa />

      </header>

      <hr className="py-2" />

      <main className="container mx-auto">
        <NavegacaoAbasHorizontal />
      </main>


      <footer className="container mx-auto">

      </footer>
    </>
  );
}
