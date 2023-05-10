import Switch from "react-switch";
import { useState } from "react";

export default function Card() {
  const [documentChecked, setDocumentChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex">
      <div className="w-80 h-56 shadow-inactive rounded-lg p-4">
        <h3 className="text-gray font-bold text-sm">Opções adicionais</h3>
        <div className="flex justify-between">
          <h4 className="text-blue font-bold text-sm pt-5">
            Inserir documentos e arquivos
          </h4>
          <div className="pt-5">
            <Switch
              onChange={() => setDocumentChecked(!documentChecked)}
              checked={documentChecked}
              height={15}
              width={40}
              handleDiameter={13}
              onHandleColor="#fffff"
              offHandleColor="#fffff"
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              uncheckedIcon={false}
              offColor="#EA5462"
              onColor="#004BFF"
            />
          </div>
        </div>
        <p className="text-xs text-gray">
          Deseja adicionar documentos para o seu cliente visualizar e baixar
          quando receber esta cobrança
        </p>

        <div className="flex justify-between">
          <h4 className="text-blue font-bold text-sm pt-5">
            Emitir nota fiscal de serviço
          </h4>
          <div className="pt-5">
            <Switch
              onChange={() => setChecked(!checked)}
              checked={checked}
              height={15}
              width={40}
              handleDiameter={13}
              onHandleColor="#fffff"
              offHandleColor="#fffff"
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              uncheckedIcon={false}
              offColor="#EA5462"
              onColor="#004BFF"
            />
          </div>
        </div>
        <p className="text-xs text-gray">
          Você deseja emitir uma nota fiscal de serviço vinculado a esta
          cobrança?
        </p>
      </div>
    </div>
  );
}
