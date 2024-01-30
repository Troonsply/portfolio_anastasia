import styles from "./page.module.scss";
import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Page() {

    return (
        <div className={styles.main}>
            <header>
                <Link href="/">Main</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/portfolio">Portfolio</Link>
            </header>
            <div className={styles.main_container}>
                <section className={styles.main_container_section}>
                    <h1>CONTACT</h1>
                    <ContactForm />
                </section>
            </div>
        </div>
    );
}
