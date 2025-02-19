"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Tea Trend</h1>
        </div>

        <div className={styles.rightSection}>
          <div
            className={`${styles.searchContainer} ${
              isSearchOpen
                ? styles.searchContainerExpanded
                : styles.searchContainerCollapsed
            }`}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className={styles.searchInput}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
          <Link href="/auth/login">
            <button className={styles.loginButton}>로그인</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
