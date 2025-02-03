"use client";
import styles from "./inquiry.module.css";

export default function InquiryPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>이용문의</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.faqSection}>
          <h2>자주 묻는 질문</h2>
          <div className={styles.faqList}>
            {[1, 2, 3].map((faq) => (
              <div key={faq} className={styles.faqItem}>
                <div className={styles.question}>
                  <span className={styles.qMark}>Q.</span>
                  <h3>티슐랭 평가는 어떤 기준으로 이루어지나요?</h3>
                </div>
                <div className={styles.answer}>
                  <span className={styles.aMark}>A.</span>
                  <p>
                    티슐랭 평가는 맛, 분위기, 서비스 품질 등을 종합적으로
                    고려하여 이루어집니다. 전문 평가단의 실제 방문 후기와 일반
                    사용자들의 평가를 모두 반영합니다.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.inquiryForm}>
          <h2>1:1 문의하기</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label>제목</label>
              <input type="text" placeholder="문의 제목을 입력해주세요" />
            </div>
            <div className={styles.formGroup}>
              <label>내용</label>
              <textarea
                rows={6}
                placeholder="문의하실 내용을 자세히 적어주세요"
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              문의하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
