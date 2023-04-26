import styles from "../styles/navbar.module.scss";
import { NavLink, Link } from "react-router-dom";

const nav = [
  { id: 1, title: "home", url: "/" },
  { id: 2, title: "about", url: "/about" },
  { id: 3, title: "projects", url: "/projects" },
  { id: 4, title: "timeline", url: "/timeline" },
];

export default function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link to="/">
          <img
            width={80}
            src="https://cdn-icons-png.flaticon.com/512/10108/10108552.png"
            alt=""
          />
        </Link>
        {nav.map(({ id, title, url }) => (
          <NavLink activeClassName="active" key={id} to={url}>
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
