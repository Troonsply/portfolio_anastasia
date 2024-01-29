import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";

export default function Page() {
    return (
        <main className={styles.main}>
            <header>
                <Link href="/contact">Contact</Link>
                <Link href="/portfolio">Portfolio</Link>
            </header>
            Portfolio
        </main>
    );
}
