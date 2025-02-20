"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.userPassword !== formData.userPasswordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (formData.userPassword.length < 6 || formData.userPassword.length > 20) {
      setError("비밀번호는 6-20자 사이여야 합니다.");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post("/api/auth/signup", {
        userName: formData.userName,
        userEmail: formData.userEmail,
        userPassword: formData.userPassword,
      });

      router.push("/auth/login?registered=true");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.message ||
            "회원가입에 실패했습니다. 다시 시도해주세요."
        );
      } else {
        setError("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "가입 중..." : "가입하기"}
          </button>
        </form>
        <div className={styles.links}>
          <span>이미 계정이 있으신가요?</span>
          <a href="/auth/login" className={styles.link}>
            로그인하기
          </a>
        </div>
      </div>
    </div>
  );
}
