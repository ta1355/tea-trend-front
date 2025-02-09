"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("로그인에 실패했습니다.");
      }

      const data = await response.json();
      // 로그인 성공 처리 (예: 토큰 저장, 리다이렉트 등)
      console.log("로그인 성공:", data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "로그인에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1>로그인</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="userEmail">이메일</label>
            <input
              type="email"
              id="userEmail"
              value={formData.userEmail}
              onChange={(e) =>
                setFormData({ ...formData, userEmail: e.target.value })
              }
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userPassword">비밀번호</label>
            <input
              type="password"
              id="userPassword"
              value={formData.userPassword}
              onChange={(e) =>
                setFormData({ ...formData, userPassword: e.target.value })
              }
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            로그인
          </button>
        </form>
        <div className={styles.links}>
          <Link href="/auth/signup" className={styles.link}>
            회원가입
          </Link>
          <Link href="/auth/forgot-password" className={styles.link}>
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
}
