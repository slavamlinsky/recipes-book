import { useSelector, useDispatch } from "react-redux";
import styles from "./RecipeItem.module.css";
import { actions } from "../../store/favorites/favorites.slice";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

function RecipeItem({ recipe }) {
  const { favorites } = useFavorites();

  const { toggleFavorites } = useActions();
  //   console.log(favorites);

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      {/* <img src="" alt="" /> */}
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>{isExists ? "Remove from" : "Add to"} favorites</button>
    </div>
  );
}

export default RecipeItem;
