import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabSlider() {
  return (
    <div className="w-full max-w-md px-2 ml-5 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex rounded-xl w-full bg-[#fff]">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full font-bold text-l rounded-lg",
                "ring-white ring-opacity-60",
                selected
                  ? "bg-blue shadow text-[#FFF]"
                  : "text-blue hover:bg-[#fff]/[0.12] hover:text-white"
              )
            }
          >
            À vista ou parcelado
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full font-bold text-l rounded-lg leading-5",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                selected
                  ? "bg-blue shadow text-[#FFF]"
                  : "text-blue hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Assinatura
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <p className="text-xs text-gray pb-4">
              O valor será cobrado apenas uma vez, podendo ser parcelado
              conforme definido abaixo.
            </p>
            <div className="grid grid-cols-2 gap-2 w-[100%]">
              <div className="flex flex-col">
                <h3 className="text-sm text-gray pb-2 font-bold">
                  Parcelamento
                </h3>
                <input
                  type="select"
                  placeholder="Selecione"
                  className="border border-gray p-2 placeholder:text-gray rounded-lg h-9"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm text-gray pb-2 font-bold">
                  Vencimento da cobrança
                </h3>
                <input
                  type=""
                  placeholder="__/__/____"
                  className="border p-2 border-gray placeholder:text-gray rounded-lg h-9"
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <p className="text-xs text-gray pb-4">
              O valor será cobrado apenas uma vez, podendo ser parcelado
              conforme definido abaixo.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <h3 className="text-sm text-gray pb-2 font-bold">
                  Frequencia da cobrança
                </h3>
                <input
                  type="select"
                  placeholder="Selecione"
                  className="border border-gray p-2 placeholder:text-gray rounded-lg h-9"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm text-gray pb-2 font-bold">
                  Vencimento da 1ª cobrança
                </h3>
                <input
                  type=""
                  placeholder="__/__/____"
                  className="border p-2 border-gray placeholder:text-gray rounded-lg h-9"
                />
              </div>
              <div className="flex flex-col pt-6">
                <h3 className="text-sm text-gray pb-2 font-bold">
                  Fim da assinatura (Opcional)
                </h3>
                <input
                  type="select"
                  placeholder="Sem data definida"
                  className="border border-gray p-2 placeholder:text-gray rounded-lg h-9"
                />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
