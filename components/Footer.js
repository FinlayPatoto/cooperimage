import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Hosted by <a href="https://www.madfinndevelopmentco.com/"><img src="/logo.svg" alt="Netlify Logo" className={styles.logo} /></a>
      </footer>
    </>
  )
}
