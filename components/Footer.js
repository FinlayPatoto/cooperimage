import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Hosted by <img src="/logo.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
