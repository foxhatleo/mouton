import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under construction.</title>
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        
        * {
          box-sizing: border-box;
        }
        `}</style>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Under construction.
        </h1>

        <p className={styles.description}>
          Please pardon our appearance while we improve your experience.
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/foxhatleo/panic-painter-level-editor" className={styles.card}>
            <h3>PP Level Editor &rarr;</h3>
            <p>Learn about how to use Panic Painter level editor.</p>
          </a>

          <a href="/panic-painter-android" className={styles.card}>
            <h3>PP Android &rarr;</h3>
            <p>Download the latest Android build of Panic Painter.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        A website by&nbsp;
        <strong>Wenhao "Leo" Liang</strong>
      </footer>
    </div>
  )
}
