"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./new.module.css";
import axios from "axios";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/post", {
        title,
        detail,
        imageUrl,
        tags,
        category,
      });
      router.push("/freeboard");
    } catch (error) {
      console.error("Failed to create post", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>새 게시글 작성</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>내용</label>
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>이미지 URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>태그 (쉼표로 구분)</label>
          <input
            type="text"
            value={tags.join(", ")}
            onChange={(e) =>
              setTags(e.target.value.split(",").map((tag) => tag.trim()))
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>카테고리</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          작성하기
        </button>
      </form>
    </div>
  );
}
