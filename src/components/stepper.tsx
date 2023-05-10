export default function Stepper() {
  return (
    <div className="justify-around flex">
      <div className="flex justify-center items-center flex-col">
        <div className="h-9 w-9 rounded-full border border-blue">
          <span className="justify-center text-blue font-bold flex mt-1">
            1
          </span>
        </div>
        <div className="flex pt-3 justify-around text-sm text-gray">
          Dados da cobrança
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="h-9 w-9 rounded-full border border-gray">
          <span className="justify-center text-gray font-bold flex mt-1">
            2
          </span>
        </div>
        <div className="flex pt-3 justify-around text-gray text-sm">
          Juros e multa
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="h-9 w-9 rounded-full border border-gray">
          <span className="justify-center text-gray font-bold flex mt-1">
            3
          </span>
        </div>
        <div className="flex pt-3 justify-around text-sm text-gray">
          Dados do cliente
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="h-9 w-9 rounded-full border border-gray">
          <span className="justify-center text-gray font-bold flex mt-1">
            4
          </span>
        </div>
        <div className="flex pt-3 justify-around text-sm text-gray">Resumo</div>
      </div>
    </div>
  );
}
