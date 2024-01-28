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
            <div className={styles.main_container}>
                <h1>CONTACT</h1>
                <form action="/api/sendEmail" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label htmlFor="message">Message:</label>
                    <input type="text" id="message" name="message"/>
                    <a href="mailto:<YourEmailAddress>@gmail.com?subject=<The%20Subject>&body=<The%20Body>">Send
                        Email</a>
                </form>
            </div>
        </main>
    );
}
