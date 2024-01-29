import styles from "./page.module.scss";
import Link from "next/link";

export default function Page() {
    return (
        <div className={styles.main}>
            <header>
                <Link href="/contact">Contact</Link>
                <Link href="/portfolio">Portfolio</Link>
            </header>
            <div className={styles.main_container}>
                <section className={styles.main_container_section}>
                    <h1>CONTACT</h1>
                    <form>
                        <div className={styles.main_container_section_text}>
                            <input type="text" id="name" name="name" />
                            <label>Your name</label>
                        </div>
                        <div className={styles.main_container_section_text}>
                            <input type="text" id="email" name="email"/>
                            <label>Your email</label>
                        </div>
                        <div className={styles.main_container_section_text}>
                            <input type="text" id="message" name="message"/>
                            <label>Your message</label>
                        </div>
                        <div className={styles.main_container_section_button}>
                            <a>Send</a>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}
