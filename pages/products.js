import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <div>
        <h1>Products</h1>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
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
