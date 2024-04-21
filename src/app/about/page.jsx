import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver, and better.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            tenetur labore architecto harum, perferendis fugiat repellat fuga!
            Nemo autem corrupti, perferendis harum iste aliquam corporis aliquid
            architecto natus tempore asperiores.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10K+</h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="about image"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
