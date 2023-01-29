import { useState } from "react";
import * as S from "./styles";

interface ItemProps {
  item: {
    id: number;
    nome: string;
    quantidade: number;
    valorDaUnidade: number;
    quantidadeEmEstoque: number;
    icone: string;
    categoria: string;
    valorTotal: number;
  };
}

export const Item = ({
  item: {
    nome,
    quantidade,
    valorDaUnidade,
    quantidadeEmEstoque,
    icone,
    categoria,
    valorTotal,
  },
}: ItemProps) => {
  //   const [quantidadeEmCasa, setQuantidadeEmCasa] = useLocalStorage(
  //     "Quantidade em casa",
  //     quantidadeEmEstoque
  //   );

  const [quantidadeEmCasa, setQuantidadeEmCasa] = useState(quantidadeEmEstoque);

  const [quantidadeMercado, setQuantidadeMercado] = useState(quantidade);

  const [valorUnitario, setValorUnitario] = useState(valorDaUnidade.toString());

  const handleAddHome = () => {
    setQuantidadeEmCasa(quantidadeEmCasa + 1);
  };

  const handleRemoveHome = () => {
    setQuantidadeEmCasa(quantidadeEmCasa - 1);
  };

  const handleAddMarket = () => {
    setQuantidadeMercado(quantidadeMercado + 1);
  };

  const handleRemoveMarket = () => {
    setQuantidadeMercado(quantidadeMercado - 1);
  };

  return (
    <S.Wrapper>
      <S.Icon src={require(`../../assets/${icone}`)} alt="aaa" />

      <div>
        <S.Title>
          {nome} - {quantidadeEmCasa}
        </S.Title>
        <div>
          <p>
            Quantos tem em casa? {quantidadeEmCasa}
            <button
              onClick={() => {
                handleRemoveHome();
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                handleAddHome();
              }}
            >
              +
            </button>{" "}
          </p>

          <p>
            Quanto peguei no mercado? {quantidadeMercado}
            <button
              onClick={() => {
                handleRemoveMarket();
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                handleAddMarket();
              }}
            >
              +
            </button>{" "}
          </p>
          <label>Valor da unidade</label>
          <input
            onChange={(event) => {
              setValorUnitario(event.target.value);
            }}
          />
        </div>
        <p>
          Total{" "}
          {(quantidadeEmCasa + quantidadeMercado) * parseFloat(valorUnitario)}
        </p>
      </div>
    </S.Wrapper>
  );
};
