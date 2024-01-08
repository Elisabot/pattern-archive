import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Pattern Archive</h1>
        <p>A program for organizing and viewing sewing patterns</p>
      </div>
    </main>
  )
}
