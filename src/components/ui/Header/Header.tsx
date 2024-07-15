import classNames from 'classnames';
import Link from 'next/link';
import styles from './Header.module.css';

const ITEMS = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/storybook',
    name: 'Storybook',
  },
  {
    url: '/a',
    name: 'A',
  },
  {
    url: '/b',
    name: 'B',
  },
  {
    url: '/c',
    name: 'C',
  },
  {
    url: '/d',
    name: 'D',
  },
] as const;

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => (
  <header className={classNames(styles.root, className)}>
    <nav>
      <ul className={styles.items}>
        {ITEMS.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

export default Header;
