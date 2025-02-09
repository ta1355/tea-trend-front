"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.userPassword !== formData.userPasswordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          userEmail: formData.userEmail,
          userPassword: formData.userPassword,
          role: "USER",
        }),
      });

      if (!response.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }

      const data = await response.json();
      // 회원가입 성공 처리 (예: 로그인 페이지로 리다이렉트)
      console.log("회원가입 성공:", data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "회원가입에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1>회원가입</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="userName">이름</label>
            <input
              type="text"
              id="userName"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              placeholder="이름을 입력하세요"
              required
            />
          </div>
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
              placeholder="비밀번호를 입력하세요 (6-20자)"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userPasswordConfirm">비밀번호 확인</label>
            <input
              type="password"
              id="userPasswordConfirm"
              value={formData.userPasswordConfirm}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userPasswordConfirm: e.target.value,
                })
              }
              placeholder="비밀번호를 다시 입력하세요"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            가입하기
          </button>
        </form>
        <div className={styles.links}>
          <span>이미 계정이 있으신가요?</span>
          <Link href="/auth/login" className={styles.link}>
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
