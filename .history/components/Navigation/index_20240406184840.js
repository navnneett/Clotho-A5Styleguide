import Link from 'next/link';
import styles from './Navigation.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            Logo
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Colours
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Typography
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Graphics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;