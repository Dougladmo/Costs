import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function NavBar() {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
          <Link to="/">
            <img src={logo} alt="costs" />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Projects">Projetos</Link>
            </li>
            <li className={styles.item}>
              <Link to="/company">Sobre</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default NavBar;
