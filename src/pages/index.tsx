export default function Home() {
  return (
    <>
      <main className="flex h-screen w-full gap-2 bg-green-500">
        <div className="flex w-1/2 gap-2 bg-red-500">
          <div className="w-1/2 border">
            <h1>Imagem Personagem</h1>
          </div>
          <div className="flex w-1/2 flex-col justify-between border">
            <div className="h-full border">Menu 1</div>
            <div className="h-full border">Menu 2</div>
            <div className="h-full border">Menu 3</div>
          </div>
        </div>
        <div className="w-1/2 gap-2 bg-blue-500">
          <div className="h-1/2 border ">Mapa</div>
          <div className="h-1/2 border">Atividade</div>
        </div>
      </main>
    </>
  );
}
