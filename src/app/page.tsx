"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Tea Trend</h1>
        <p>차와 관련된 모든 것을 만나보세요</p>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>토론장</h2>
          <p>차에 대한 다양한 의견을 나누어보세요</p>
        </div>
        <div className={styles.featureCard}>
          <h2>매거진</h2>
          <p>차와 관련된 최신 트렌드와 정보를 확인하세요</p>
        </div>
        <div className={styles.featureCard}>
          <h2>티슐랭</h2>
          <p>우리 동네 숨은 찻집을 발견해보세요</p>
        </div>
      </section>

      <section className={styles.trending}>
        <h2>인기 토픽</h2>
        <div className={styles.trendingList}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.trendingItem}>
              <span className={styles.trendingNumber}>{item}</span>
              <div className={styles.trendingContent}>
                <h3>2024년 주목해야 할 차 트렌드</h3>
                <p>건강과 웰빙에 대한 관심이 높아지면서...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
