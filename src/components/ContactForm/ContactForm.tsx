'use client';
import React from 'react';
import styles from "@/app/contact/page.module.scss";
import Image from "next/image";
import inst from "./instagram.png";
import telegram from './telegram.png';
import mail from './mail.png';
export default function ContactForm() {


    return (
        <div className={styles.main_container_section_info}>
            <span>
                <Image
                    src={inst}
                    alt={'inst'}
                    priority
                    height={28}
                    width={28}
                /> @shpaakova
            </span>
            <span>
                <Image
                    src={telegram}
                    alt={'telegram'}
                    priority
                    height={28}
                    width={28}
                /> @nastyabambi
            </span>
            <span>
                <Image
                    src={mail}
                    alt={'mail'}
                    priority
                    height={28}
                    width={28}
                /> shpakova3737@gmail
            </span>
        </div>
    );
}