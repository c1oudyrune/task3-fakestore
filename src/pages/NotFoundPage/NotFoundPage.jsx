import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <main className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.text}>
        Похоже, такой страницы не существует или товар был удалён.
      </p>
      <Link to="/products" className={styles.button}>
        К списку товаров
      </Link>
    </main>
  )
}

export default NotFoundPage
