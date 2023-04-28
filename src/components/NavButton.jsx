import styles from "../styles/navbutton.module.scss";
import { TfiArrowTopRight } from "react-icons/tfi";
import { ImTelegram } from "react-icons/im";
import { BsDiscord, BsGithub } from "react-icons/bs";

export default function NavButton({ link, title }) {
  return (
    <div
      className={styles.wrapper}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="100"
    >
      <a href={link} target="_blank" className={styles.icon}>
        {title === "telegram" && <ImTelegram />}
        {title === "discord" && <BsDiscord />}
        {title === "github" && <BsGithub />}
        <p>{title}</p>
      </a>
      <TfiArrowTopRight />
    </div>
  );
}