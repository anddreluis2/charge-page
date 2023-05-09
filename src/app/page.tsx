import Card from "@/components/card";
import Stepper from "@/components/stepper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF] px-5 py-14">
      <Stepper />
      <div className="flex pt-7 px-7 justify-around">
        <div className="flex flex-col">
          <h1 className="font-bold text-gray-800 pb-6">O que cobrar?</h1>
          <div className="rounded-lg w-48 relative">
            <div className="bottom-0 left-0 absolute w-9 h-9 bg-blue rounded-lg flex items-center justify-center text-[#FFF] font-bold">
              R$
            </div>
            <input
              min="0"
              placeholder="0,00"
              className="w-48 border placeholder:font-semibold placeholder:text-gray border-blue h-9 px-10 rounded-lg"
            />
          </div>
          <div className="pt-5 pb-2">
            <h3 className="font-semibold text-md text-gray">
              Descrição da cobrança (Opcional)
            </h3>
            <input
              placeholder="A descrição informada será impressa na fatura."
              type="text"
              className="w-96 border border-gray mt-4 placeholder:text-xs placeholder:text-top placeholder:text-gray p-2 pb-[80px] h-28 rounded-lg"
            />
          </div>
        </div>
        <Card />
      </div>
    </main>
  );
}
