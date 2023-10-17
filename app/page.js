// NextJS 13 page
'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getUsername } from '../supabase/getUsername';
import { getClientSession } from '../supabase/getSession';

/*
TS
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
*/

const links = [
  { name: 'New Game', href: '/game-settings' },
  { name: 'Login', href: '/login' },
  { name: 'Create Account', href: '/create-account' },
];

export default function Page() {
  // STATE
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const checkForSession = async () => {
      const { session, error } = await getClientSession();

      // TODO if errors
      if (!session) return;

      if (session) {
        const sessionUserId = session.user.id;
        const sessionUsername = await getUsername(sessionUserId);
        setUsername(sessionUsername);
      }
    };
    checkForSession();
  }, []);

  return (
    <div className={styles['app']}>
      <h1>Matchies</h1>

      {username && (
        <h2>{`Welcome back, ${username.at(0).toUpperCase()}${username.slice(1)}`}</h2>
      )}

      {links.map((link) => (
        <Link href={link.href} key={link.name} className={styles['app-button']}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
