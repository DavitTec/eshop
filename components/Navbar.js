import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div>
        <div>
          <Link href="/" passHref>
            <Image src="/img/davit.svg" alt="Davit" width="107" height="32" />
          </Link>
        </div>
        <div className={styles.texts}></div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/about" passHref>
            <li className={styles.listItem}>About</li>
          </Link>
          <Link href="/products" passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
          <Link href="/nextjs" passHref>
            <li className={styles.listItem}>Nextsjs</li>
          </Link>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
