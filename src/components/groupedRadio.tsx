import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Boleto bancário",
    description: "Valor líquido por parcela: R$148,01",
  },
  {
    name: "Pix",
    description: "Valor líquido por parcela: R$148,01",
  },
  {
    name: "Cartão de Crédito",
    description: "Valor líquido por parcela: R$150,01",
  },
];

export default function GroupedRadio() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="">
      <div className="w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${active ? "ring-2 ring-white" : ""}
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none border border-gray`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-bold  ${
                              checked ? "text-white" : "text-gray"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-blue" : "text-gray"
                            }`}
                          >
                            <span
                              className="text-xs text-gray"
                              aria-hidden="true"
                            >
                              {plan.description}
                            </span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white text-blue">
                          <FaCheck className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
