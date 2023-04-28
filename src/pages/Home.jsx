import styles from "../styles/home.module.scss";
import { ImTelegram } from "react-icons/im";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <a
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="50"
        href="https://github.com/Minkaill"
        target="_blank"
      >
        Минкаил Хаджиев
      </a>
      <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50">
        Привет, я Минкаил. Я <b>Frontend - разработчик</b>, занимаюсь
        разработкой <br /> пользовательского интерефейса!
      </p>
      <div className={styles.portfolio}>
        <img
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="50"
          src="https://img.hhcdn.ru/photo/722531979.jpeg?t=1682601992&h=a2uEF1wVvKSRmCjFALdcyQ"
          alt=""
        />
        <div className={styles.links}>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="50"
            className={styles.links__item}
          >
            <ImTelegram />
            <a href="https://t.me/mklhdv" target="_blank">
              telegram
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2400"
            data-aos-delay="50"
            className={styles.links__item}
          >
            <BsDiscord />
            <a href="">discord</a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2800"
            data-aos-delay="50"
            className={styles.links__item}
          >
            <BsGithub />
            <a href="https://github.com/Minkaill" target="_blank">
              github
            </a>
          </div>
        </div>
      </div>

      <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="50">
        Еще с ранних лет имел интерес к программированию. <br /> Добросовестно
        отношусь к любой работе, стремлюсь к знаниям и буду рад сотрудничать!
        <br />
        Моя цель – работать в качестве frontend разработчика в компании,
        <br /> где я могу постоянно улучшать свои навыки и принести ценность в
        развитие проектов.
      </p>
    </div>
  );
}
