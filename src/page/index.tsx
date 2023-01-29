import { Item } from "../components/Item";
import { ShoppingList } from "../data/ShoppingList";

export const Home = () => {
  return (
    <div>
      <h1>Shopping List</h1>
      {ShoppingList.map((item, index) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
