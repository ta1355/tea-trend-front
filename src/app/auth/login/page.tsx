"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "로그인에 실패했습니다.");
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
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
              placeholder="비밀번호를 입력하세요"
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}
