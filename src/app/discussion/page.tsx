"use client";
import styles from "./discussion.module.css";

export default function DiscussionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>토론장</h1>
        <button className={styles.writeButton}>글쓰기</button>
      </div>

      <div className={styles.postList}>
        {/* 임시 데이터 */}
        {[1, 2, 3].map((post) => (
          <div key={post} className={styles.postCard}>
            <div className={styles.postHeader}>
              <h3>차 시장의 미래 전망에 대해 토론해봅시다</h3>
              <span className={styles.postMeta}>조회수 123 • 댓글 45</span>
            </div>
            <p className={styles.postPreview}>
              최근 차 시장의 트렌드를 보면 건강과 웰빙에 대한 관심이
              높아지면서...
            </p>
            <div className={styles.postFooter}>
              <span>작성자: 티마스터</span>
              <span>2024.03.21</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
