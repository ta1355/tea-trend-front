"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const menuItems = [
  { name: "자유게시판", path: "/freeboard", icon: "📚" },
  { name: "매거진", path: "/magazine", icon: "📖" },
  { name: "이용문의", path: "/inquiry", icon: "💬" },
  { name: "구인구직", path: "/jobs", icon: "🔍" },
  { name: "티슐랭", path: "/tea-rating", icon: "⭐" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>Tea Trend</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${styles.menuItem} ${
                  pathname === item.path ? styles.menuItemActive : ""
                }`}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
