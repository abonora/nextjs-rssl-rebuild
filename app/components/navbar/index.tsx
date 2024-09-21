'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from "./navbar.module.css"

const Navbar = () => {
    const currentPath = usePathname();
    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/" className={currentPath === "/" ? `${styles.navlinkActive} ${styles.navlink}` : styles.navlink}>
                    <span className="material-symbols-outlined">Home</span>
                </Link>
                <Link href="/teams" className={currentPath.includes("/teams") ? `${styles.navlinkActive} ${styles.navlink}` : styles.navlink}>
                    <span className="material-symbols-outlined">Groups</span>
                </Link>
                <Link href="/standings" className={currentPath === "/standings" ? `${styles.navlinkActive} ${styles.navlink}` : styles.navlink}>
                    <span className="material-symbols-outlined">Trophy</span>
                </Link>                
            </nav>
        </>
    );
};

export default Navbar;