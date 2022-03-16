import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Best Shop in Town</title>
        <meta name="description" content="Best shop in town" />
        <link rel="icon" href="/favicon.ico" />
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

      <div>
        <main>
          <h1>Home page</h1>
        </main>

        <ul>
          <li>
            <a href="/about">
              <h3>About page &rarr;</h3>
              <p>About us</p>
            </a>
          </li>
          <li>
            <a href="/products">
              <h3>Products page &rarr;</h3>
              <p>Our Products</p>
            </a>
          </li>
          <li>
            <a href="/nextjs">
              <h3>Next JS &rarr;</h3>
              <p>Learn more about NEXTjs</p>
            </a>
          </li>
        </ul>
      </div>

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
