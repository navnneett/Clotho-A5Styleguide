import Link from 'next/link';
import styles from './Navigation.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/" style={{textDecoration: 'none', color: 'var(--black)'}}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/Logo" style={{textDecoration: 'none', color: 'var(--black)'}}>
            Logo
          </Link>
        </li>
        <li>
          <Link href="/Color" style={{textDecoration: 'none', color: 'var(--black)'}}>
            Colours
          </Link>
        </li>
        <li>
          <Link href="/Typography" style={{textDecoration: 'none', color: 'var(--black)'}}>
            Typography
          </Link>
        </li>
        <li>
          <Link href="/Layout" style={{textDecoration: 'none', color: 'var(--black)'}}>
            Layout
          </Link>
        </li>
        <li>
          <Link href="/Graphics" style={{textDecoration: 'none', color: 'var(--black)'}}>
            Graphics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;