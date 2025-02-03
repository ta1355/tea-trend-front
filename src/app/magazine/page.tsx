"use client";
import styles from "./magazine.module.css";

export default function MagazinePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>매거진</h1>
        <div className={styles.categories}>
          <button className={`${styles.categoryButton} ${styles.active}`}>
            전체
          </button>
          <button className={styles.categoryButton}>차 소개</button>
          <button className={styles.categoryButton}>차 문화</button>
          <button className={styles.categoryButton}>차 리뷰</button>
        </div>
      </div>

      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((article) => (
          <div key={article} className={styles.articleCard}>
            <div className={styles.thumbnail}>
              <div className={styles.imagePlaceholder}>썸네일</div>
            </div>
            <div className={styles.content}>
              <span className={styles.category}>차 문화</span>
              <h2>전통 차 문화의 현대적 재해석</h2>
              <p>현대 사회에서 차 문화는 어떻게 변화하고 있는지 알아봅니다.</p>
              <div className={styles.meta}>
                <span>2024.03.21</span>
                <span>조회수 234</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
