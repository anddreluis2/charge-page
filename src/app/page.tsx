"use client";
import Card from "@/components/card";
import GroupedRadio from "@/components/groupedRadio";
import Stepper from "@/components/stepper";
import TabSlider from "@/components/tabSlider";
import { RadioGroup, Tab } from "@headlessui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFF] px-5 py-14">
      <Stepper />
      <div className="flex pt-7 px-7 justify-around">
        <div className="flex flex-col">
          <h1 className="font-bold text-gray-800 pb-6">O QUE COBRAR?</h1>
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
      <div className="pt-7 sm:px-8 lg:px-72 flex flex-col justify-start">
        <h1 className="font-bold px-6 pb-6">QUAL SERÁ A FORMA DE PAGAMENTO?</h1>
        <div className="">
          <TabSlider />
        </div>
        <div className="px-7">
          <h3 className="font-bold pb-5">COMO SEU CLIENTE PODERÁ PAGAR?</h3>
          <GroupedRadio />
        </div>
      </div>
      <footer>
        <div className="flex justify-end text-[#FFF] font-bold rounded-lg px-10 pt-10">
          <button type="submit" className="bg-blue w-48 h-12 rounded-3xl">
            AVANÇAR
          </button>
        </div>
      </footer>
    </main>
  );
}
