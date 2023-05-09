export default function Card() {
  return (
    <div className="flex">
      <div className="w-80 h-full shadow-inactive rounded-lg p-4">
        <h3 className="text-gray font-bold text-sm">Opções adicionais</h3>
        <h4 className="text-blue font-bold text-sm pt-5">
          Inserir documentos e arquivos
        </h4>
        <p className="text-xs text-gray">
          Deseja adicionar documentos para o seu cliente visualizar e baixar
          quando receber esta cobrança
        </p>

        <h4 className="text-blue font-bold text-sm pt-5">
          Emitir nota fiscal de serviço
        </h4>
        <p className="text-xs text-gray">
          Você deseja emitir uma nota fiscal de serviço vinculado a esta
          cobrança?
        </p>
      </div>
    </div>
  );
}
