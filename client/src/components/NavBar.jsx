import styles from "../styles/navbar.module.scss";
import { NavLink } from "react-router-dom";

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
        {nav.map(({ id, title, url }) => (
          <NavLink key={id} to={url}>
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
