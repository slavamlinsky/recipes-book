import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";

import Header from "./header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Header />
      <div>
        <h1>Reciept Book</h1>
        <RecipeItem recipe={{ id: 1, name: "Лазанья" }} />
        <RecipeItem recipe={{ id: 2, name: "Салат из свеклы" }} />
        <RecipeItem recipe={{ id: 3, name: "Запеченая индейка" }} />
      </div>
    </section>
  );
}

export default App;
