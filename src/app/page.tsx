import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";

export default function Home() {
  return (
    <>
      <div>

        <BarraSuperior />
        <BarraPesquisa />

      </div>


      <div className="border-green-500 border-2 mt-10">Área conteúdos</div>
      <div className="border-purple-500 border-2">Rodapé</div>
    </>
  );
}
