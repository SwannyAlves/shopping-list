import { Dispatch, SetStateAction, useState } from "react";
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
  list: {
    id: number;
    nome: string;
    quantidade: number;
    valorDaUnidade: number;
    quantidadeEmEstoque: number;
    icone: string;
    categoria: string;
    valorTotal: number;
  }[];
  setList: Dispatch<
    SetStateAction<
      {
        id: number;
        nome: string;
        quantidade: number;
        valorDaUnidade: number;
        quantidadeEmEstoque: number;
        icone: string;
        categoria: string;
        valorTotal: number;
      }[]
    >
  >;
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
  list,
  setList,
}: ItemProps) => {
  const [quantidadeEmCasa, setQuantidadeEmCasa] = useState(quantidadeEmEstoque);

  const [quantidadeMercado, setQuantidadeMercado] = useState(quantidade);

  const [valorUnitario, setValorUnitario] = useState(valorDaUnidade.toString());

  const handleAddHome = (produto: string) => {
    const newList = list.map((item) => {
      if (item.nome === produto) {
        return {
          ...item,
          quantidadeEmEstoque: item.quantidadeEmEstoque + 1,
        };
      }
      return item;
    });

    setList(newList);

    setQuantidadeEmCasa(quantidadeEmCasa + 1);
  };

  const handleRemoveHome = (produto: string) => {
    const newList = list.map((item) => {
      if (item.nome === produto) {
        return {
          ...item,
          quantidadeEmEstoque: item.quantidadeEmEstoque - 1,
        };
      }
      return item;
    });

    setList(newList);
    setQuantidadeEmCasa(quantidadeEmCasa - 1);
  };

  const handleAddMarket = (produto: string) => {
    const newList = list.map((item) => {
      if (item.nome === produto) {
        return {
          ...item,
          quantidade: item.quantidade + 1,
        };
      }
      return item;
    });

    setList(newList);
    setQuantidadeMercado(quantidadeMercado + 1);
  };

  const handleRemoveMarket = (produto: string) => {
    const newList = list.map((item) => {
      if (item.nome === produto) {
        return {
          ...item,
          quantidade: item.quantidade - 1,
        };
      }
      return item;
    });

    setList(newList);
    setQuantidadeMercado(quantidadeMercado - 1);
  };

  const handlerValorTotal = (produto: string) => {
    const newList = list.map((item) => {
      if (item.nome === produto) {
        return {
          ...item,
          valorTotal: quantidadeMercado * parseFloat(valorUnitario),
        };
      }
      return item;
    });

    setList(newList);
  };

  console.log(valorTotal, nome);

  return (
    <S.Wrapper>
      <S.Icon src={require(`../../assets/${icone}`)} alt="aaa" />

      <div>
        <S.Title>
          {nome} - {quantidadeEmEstoque}
        </S.Title>
        <div>
          <p>
            Quantos tem em casa? {quantidadeEmCasa}
            <button
              onClick={() => {
                handleRemoveHome(nome);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                handleAddHome(nome);
              }}
            >
              +
            </button>{" "}
          </p>

          <p>
            Quanto peguei no mercado? {quantidadeMercado}
            <button
              onClick={() => {
                handleRemoveMarket(nome);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                handleAddMarket(nome);
              }}
            >
              +
            </button>{" "}
          </p>
          <label>Valor da unidade</label>
          <input
            onChange={(event) => {
              setValorUnitario(event.target.value);
              // handlerValorTotal(nome);
            }}
          />
          <button onClick={() => handlerValorTotal(nome)}>Calcular</button>
        </div>
        <p>Total {quantidadeMercado * parseFloat(valorUnitario)}</p>
      </div>
    </S.Wrapper>
  );
};
