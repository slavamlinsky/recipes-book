import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { FaHeart } from "react-icons/fa6";
import { useFavorites } from "../../hooks/useFavorites";

function Header() {
  const { favorites } = useFavorites();
  const count = favorites.length;

  return (
    <header className={styles.header}>
      <FaHeart fontSize={21} />
      <span className={styles.count}>{count}</span>
    </header>
  );
}

export default Header;
