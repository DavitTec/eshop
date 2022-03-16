// about
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      {
        // Insert Nav
      }
      <nav className={styles.nav}>
        <a href="/">
          <span className={styles.davit}>DAV</span>iT
        </a>{' '}
        | <a href="/about">About</a> | <a href="/products">Products</a> |{' '}
        <a href="/nextjs">Next JS</a> |
      </nav>
      {
        // end footer
      }

      <main>
        <h1>About</h1>
      </main>

      {
        // Insert footer
      }
      <footer>
        <a
          href="https://davittec.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'   '}
          <img
            className={styles.logo}
            src="/img/davit.svg"
            alt="DAVIT LOGO"
            height="16"
          />
        </a>
      </footer>
      {
        // end footer
      }
    </div>
  );
}
