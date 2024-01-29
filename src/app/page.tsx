import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import photo from "./photo_5.jpg";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <header>
                    <Link href="/contact">Contact</Link>
                    <Link href="/portfolio">Portfolio</Link>
                </header>
                <div className={styles.main__container}>
                    <div className={styles.main__container_image}>
                        <Image
                            src={photo}
                            alt="photo"
                            priority
                            height={740}
                            width={500}
                        />
                    </div>
                    <div className={styles.main__container_text}>
                        <h1>Anastasia Shpakova</h1>
                        <p>MODELING PORTFOLIO</p>
                    </div>
                </div>
            </main>
        </>
    );
}
