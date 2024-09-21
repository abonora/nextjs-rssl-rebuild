'use client';
import React from "react";
import styles from "./../page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Teams = () => {
  const [teams, setTeams] = useState<any[]>([]);
  useEffect(() => {
    async function fetchteams() {
      let res = await fetch('https://albertobonora.com/feeds/wp-json/wp/v2/teams/')
      let data = await res.json()
      setTeams(data)
    }
    fetchteams()
  }, [])
 
  if (!teams) return <div>Loading...</div>
  return (
  <div className={styles.page}>
    <main className={styles.main}>
      <h1>Teams</h1>
      <ul>
      {teams.map((team) => (
        <li key={team.id}>
          <Link href={`/teams/${team.id}/`}>
            <span>{team.title.rendered}</span>
          </Link>
        </li>
      ))}
    </ul>
    </main>
  </div>
  );
};

export default Teams;