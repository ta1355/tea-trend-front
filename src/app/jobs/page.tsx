"use client";
import styles from "./jobs.module.css";

export default function JobsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>구인구직</h1>
        <div className={styles.actions}>
          <button className={styles.filterButton}>필터</button>
          <button className={styles.postButton}>공고 등록</button>
        </div>
      </div>

      <div className={styles.jobList}>
        {[1, 2, 3, 4, 5].map((job) => (
          <div key={job} className={styles.jobCard}>
            <div className={styles.company}>
              <div className={styles.logoPlaceholder}>로고</div>
              <div>
                <h3>티 소믈리에 모집</h3>
                <p className={styles.companyName}>티하우스 {job}</p>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.info}>
                <span>경력 3년↑</span>
                <span>정규직</span>
                <span>서울 강남</span>
              </div>
              <div className={styles.tags}>
                <span>#차 전문가</span>
                <span>#소믈리에</span>
                <span>#카페</span>
              </div>
            </div>
            <div className={styles.footer}>
              <span className={styles.date}>~ 2024.04.21</span>
              <button className={styles.applyButton}>지원하기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
