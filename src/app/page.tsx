"use client";
import Card from "@/components/card";
import GroupedRadio from "@/components/groupedRadio";
import Stepper from "@/components/stepper";
import TabSlider from "@/components/tabSlider";
import { FaArrowLeft, FaBackward } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEEEE] py-14">
      <div className="w-[95%] py-4 mx-auto max-w-[1140px]">
        <button className="items-center uppercase font-semibold text-blue py-4 gap-2 flex">
          <FaArrowLeft /> Voltar
        </button>
        <h3 className="text-gray uppercase font-semibold text-sm">cobranca</h3>
      </div>
      <section className="bg-[#FFF] py-7 rounded-lg w-[95%] mx-auto px-16 max-w-[1140px]">
        <Stepper />
        <div className="flex pt-7 justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-800 pb-6 uppercase">
              o que cobrar?
            </h1>
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

        <div className="pt-7 flex flex-col">
          <h1 className="font-bold pb-6">QUAL SERÁ A FORMA DE PAGAMENTO?</h1>
          <div className="">
            <TabSlider />
          </div>
          <div className="">
            <h3 className="font-bold pb-5">COMO SEU CLIENTE PODERÁ PAGAR?</h3>
            <GroupedRadio />
          </div>
        </div>
        <footer>
          <div className="flex justify-end text-[#FFF] font-bold rounded-lg pt-10">
            <button type="submit" className="bg-blue w-48 h-12 rounded-3xl">
              AVANÇAR
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
