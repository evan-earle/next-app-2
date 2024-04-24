import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16141843/pexels-photo-16141843/free-photo-of-pampas-grass-growing-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          facilis est cumque nihil necessitatibus suscipit ratione ea velit.
          Dolore aliquid corrupti adipisci quaerat at consequatur, repudiandae
          doloremque inventore deserunt tempore!
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
