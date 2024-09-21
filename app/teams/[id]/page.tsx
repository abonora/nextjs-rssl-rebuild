'use client'

import React from "react";
import styles from "./../../page.module.css";
import { useParams   } from 'next/navigation';
import Link from "next/link";

const Team = () => {
  const teamid = useParams().id;
  return (
  <div className={styles.page}>
    <main className={styles.main}>
      <Link href="/teams">
        <span>[all teams]</span>
      </Link>
      <h1>Team {teamid}</h1>
    </main>
  </div>
  );
};

export default Team;