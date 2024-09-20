import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
               <Link href="/">
                    <Image src="/images/rssl-logo.svg" alt="RSSL Logo" width="131" height="105" className={styles.logo}/>
               </Link> 
            </header>
        </>
    );
};

export default Header;