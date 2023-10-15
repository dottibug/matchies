// NextJS 13 page
'use client';
import styles from './page.module.css';
import Link from 'next/link';

/*
TS
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
*/

const links = [
  { name: 'New Game', href: '/new-game' },
  { name: 'Login', href: '/login' },
  { name: 'Create Account', href: '/create-account' },
];

export default function Page() {
  return (
    <div className={styles['app']}>
      <h1>Matchies</h1>

      {links.map((link) => (
        <Link href={link.href} key={link.name} className={styles['app-button']}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
