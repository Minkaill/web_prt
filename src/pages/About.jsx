import NavButton from "../components/NavButton";
import styles from "../styles/about.module.scss";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <a data-aos="fade-left" data-aos-duration="800" data-aos-delay="50">
        About me
      </a>
      <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50">
        Привет, я Минкаил. Я <b>Frontend - разработчик</b>, занимаюсь
        разработкой <br /> пользовательского интерефейса!
      </p>
      <p data-aos="fade-up" data-aos-duration="1600" data-aos-delay="50">
        С детства я был увлечен программированием - не знаю, возможно, это было{" "}
        <br />
        вызвано моей любовью к шифрованию печенек в кухне. В любом случае,{" "}
        <br /> я всегда относился к работе с уважением и старался узнавать все
        новое и интересное.
      </p>
      <hr
        className={styles.hr}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="50"
      />
      <p
        className={styles.hr}
        data-aos="fade-up"
        data-aos-duration="2300"
        data-aos-delay="50"
      >
        Я страстный любитель знаний и провожу много времени, изучая новые темы и
        читая книги.
        <br /> У меня всегда есть желание узнать больше о мире и окружающей меня
        реальности.
      </p>
      <p
        className={styles.hr}
        data-aos="fade-up"
        data-aos-duration="2600"
        data-aos-delay="50"
      >
        Кроме того, я наслаждаюсь общением с другими людьми и провожу свое
        свободное время <br /> в общительной компании. Мне нравится узнавать о
        разных точках зрения и мнениях, <br /> а также обмениваться идеями и
        знаниями.
      </p>
      <p
        className={styles.hr}
        data-aos="fade-up"
        data-aos-duration="2900"
        data-aos-delay="50"
      >
        Я убежден, что знания и образование являются ключом к успеху и росту,
        <br />
        поэтому я всегда стремлюсь к изучению новых тем и расширению своих
        знаний.
        <br /> Я также уважаю мнения и идеи других людей и готов выслушать все
        точки зрения,
        <br /> чтобы принять взвешенное решение.
      </p>
      <p
        className={styles.hr}
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="50"
      >
        В целом, я уверен в себе и своих способностях, и готов принимать новые
        вызовы
        <br /> и достигать новых высот. Я стремлюсь к лучшему и готов работать
        усердно, <br /> чтобы достичь своих целей и мечтаний.
      </p>

      <div className={styles.nav_links}>
        <NavButton title="telegram" link="https://t.me/mklhdv" />
        <NavButton title="discord" link="https://t.me/mklhdv" />
        <NavButton title="github" link="https://github.com/Minkaill" />
      </div>
    </div>
  );
}
