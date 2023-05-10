export default function Stepper() {
  return (
    <div className="">
      <main className="relative max-w-[100%] w-[840px] mx-auto pb-7">
        <div className="justify-between flex after:absolute after:bg-gray after:block after:h-[2px] after:w-full  after:top-4">
          <div className="flex justify-center items-center z-50 flex-col relative ">
            <div className="h-9 w-9 text-center rounded-full border bg-[#fff] border-blue">
              <span className="justify-center text-blue font-bold flex mt-1">
                1
              </span>
              <span className="flex pt-4 justify-center whitespace-nowrap py-2 text-sm text-gray">
                Dados da cobrança
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center z-50 flex-col">
            <div className="h-9 w-9 rounded-full border bg-[#fff] border-gray">
              <span className="justify-center text-gray font-bold flex mt-1">
                2
              </span>
              <span className="flex pt-4 justify-center whitespace-nowrap text-sm text-gray">
                Juros e multa
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center z-50 flex-col">
            <div className="h-9 w-9 rounded-full border bg-[#fff] border-gray">
              <span className="justify-center text-gray font-bold flex mt-1">
                3
              </span>
              <span className="flex pt-4 justify-center whitespace-nowrap text-sm text-gray">
                Dados do cliente
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center z-50 flex-col">
            <div className="h-9 w-9 rounded-full border bg-[#fff] border-gray">
              <span className="justify-center text-gray font-bold flex mt-1">
                4
              </span>
              <span className="flex pt-4 justify-center whitespace-nowrap text-sm text-gray">
                Resumo
              </span>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="w-[880px] flex justify-between mx-auto text-sm text-gray pt-2">
        <div className="">Dados da cobrança</div>
        <div className="">Juros e multa</div>
        <div className="">Dados do cliente</div>
        <div className="">Resumo</div>
      </div> */}
    </div>
  );
}
