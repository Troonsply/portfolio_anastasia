import styles from "./page.module.scss";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import Image from "next/image";
export default function Page() {
    const photosDirectory = path.join(process.cwd(), 'public/photos')

// Получите список имен файлов в этой директории
    const filenames = fs.readdirSync(photosDirectory);

// Создайте массив объектов, каждый из которых имеет свойство src, которое указывает на файл
    const photos = filenames.map((filename) => ({
        src: `/photos/${filename}`,
    }));

    return (
        <main className={styles.main}>
            <header>
                <Link href="/contact">Contact</Link>
                <Link href="/portfolio">Portfolio</Link>
            </header>
            <div className={styles.main_container}>
                <section className={styles.main_container_section}>
                    <div className={styles.main_container_section_head}>
                        <h1>Portfolio</h1>
                        <p>
                            <span><strong>Height:</strong> 163 </span>
                            <span><strong>Bust:</strong> 82 </span>
                            <span><strong>Waist:</strong> 60 </span>
                            <span><strong>Hips:</strong> 90 </span>
                            <span><strong>Dress:</strong> xs-s </span>
                            <span><strong>Shoe:</strong> 6.5 </span>
                        </p>
                    </div>
                    <div className={styles.main_container_section_gallery}>
                        {photos?.map((photo, index) => (
                            <Image
                                key={index}
                                src={photo.src}
                                alt={photo.src}
                                priority
                                height={700}
                                width={500}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{objectFit: "cover", objectPosition: "center"}}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}