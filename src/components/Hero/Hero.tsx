import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textWrapper}>
        <p>Hi, my name is</p>
        <h1>Mihir Niyogi</h1>
      </div>
      <div className={styles.imageWrapper}>
        <img src="profile_image.jpg" alt="Profile Picture" />
      </div>
    </section>
  );
};

export default Hero;
