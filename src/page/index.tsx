import { useLocalStorage } from "usehooks-ts";
import { Item } from "../components/Item";
import { ShoppingList } from "../data/ShoppingList";

export const Home = () => {
  const [list, setList] = useLocalStorage("Lista de compras", ShoppingList);

  return (
    <div>
      <h1>Shopping List</h1>
      {list.map((item, index) => (
        <Item key={item.id} item={item} list={list} setList={setList} />
      ))}
      <p>
        Valor total da compra (estimado){" "}
        <strong>
          R${" "}
          {list.reduce((acc, item) => {
            return acc + item.valorTotal;
          }, 0)}
        </strong>
      </p>
    </div>
  );
};
