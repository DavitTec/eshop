import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [close, setClose] = useState(true);
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
      MOVED Nav
      {
        // Insert footer
      }
      {
        // end footer
      }
    </div>
  );
}
