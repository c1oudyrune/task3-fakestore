import styles from './StarRating.module.css'

function StarRating({ rating, showValue = true }) {
  const value = Number(rating) || 0
  const rounded = Math.round(value)

  return (
    <div className={styles.rating} aria-label={`Рейтинг ${value} из 5`}>
      <span className={styles.stars} aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={index < rounded ? styles.filled : styles.empty}
          >
            ★
          </span>
        ))}
      </span>
      {showValue && <span className={styles.value}>{value.toFixed(1)}</span>}
    </div>
  )
}

export default StarRating
