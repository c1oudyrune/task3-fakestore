import { useNavigate, useParams } from 'react-router-dom'
import StarRating from '../../components/StarRating/StarRating'
import { getProductById } from '../../data/products'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styles from './ProductPage.module.css'

function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)

  if (!product) return <NotFoundPage />

  return (
    <main className={styles.page}>
      <button
        type="button"
        className={styles.back}
        onClick={() => navigate(-1)}
      >
        ← Назад
      </button>

      <article className={styles.product}>
        <div className={styles.imageWrap}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.title}>{product.title}</h1>

          <StarRating rating={product.rating.rate} />
          <span className={styles.reviews}>
            {product.rating.count} отзывов
          </span>

          <p className={styles.description}>{product.description}</p>

          <p className={styles.price}>
            {product.price.toLocaleString('ru-RU')} ₽
          </p>
        </div>
      </article>
    </main>
  )
}

export default ProductPage
