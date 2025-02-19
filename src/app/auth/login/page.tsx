"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import { useAuth } from "@/app/contexts/AuthContext";
import api from "@/lib/api";
import { AxiosError } from "axios";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("registered") === "true") {
      setSuccessMessage("회원가입이 완료되었습니다. 로그인하세요.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", formData);
      await login(response.data.access_token);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data?.message ||
            "로그인에 실패했습니다. 다시 시도해주세요."
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
        <h1>로그인</h1>
        {successMessage && (
          <div className={styles.success}>{successMessage}</div>
        )}
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
