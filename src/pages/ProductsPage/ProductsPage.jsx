import { Link } from 'react-router-dom'
import StarRating from '../../components/StarRating/StarRating'
import { products } from '../../data/products'
import styles from './ProductsPage.module.css'

function ProductsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Все товары</h1>
        <span className={styles.count}>{products.length} позиций</span>
      </div>

      <section className={styles.grid}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
                loading="lazy"
              />
            </div>

            <div className={styles.content}>
              <Link
                to={`/product/${product.id}`}
                className={styles.productLink}
              >
                {product.title}
              </Link>

              <div className={styles.meta}>
                <span className={styles.price}>
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                <StarRating rating={product.rating.rate} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProductsPage
