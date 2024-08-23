"use client";
// app/page.js
import { useRouter } from 'next/navigation';
import styles from './styles/styles.css';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages');
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Quiz App</h1>
      <p>
        <button onClick={handleClick} className={styles.button}>
          Start the Quiz
        </button>
      </p>
    </div>
  );
}
