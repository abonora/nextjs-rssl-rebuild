import styles from "./page.module.css";

export default async function Home() {
  let homeendpoint = await fetch('https://albertobonora.com/feeds/wp-json/wp/v2/pages/341');
  let homedata = await homeendpoint.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{homedata.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: homedata.content.rendered }}></div>
        <h1>{homedata.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: homedata.content.rendered }}></div>
      </main>
    </div>
  );
}
