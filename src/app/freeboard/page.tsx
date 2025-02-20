"use client";
import { useEffect, useState } from "react";
import styles from "./freeboard.module.css";
import axios from "axios";
import Link from "next/link";

interface Post {
  indexId: number;
  title: string;
  detail: string;
  viewCount: number;
  commentCount?: number;
  user: {
    userName: string;
  };
  createDateTime: string;
}

export default function FreeboardPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/post");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>자유게시판</h1>
        <Link href="/freeboard/new">
          <button className={styles.writeButton}>글쓰기</button>
        </Link>
      </div>

      <div className={styles.postList}>
        {posts.length === 0 ? (
          <p>게시글이 없습니다.</p>
        ) : (
          posts.map((post) => (
            <Link key={post.indexId} href={`/freeboard/${post.indexId}`}>
              <div className={styles.postCard}>
                <div className={styles.postHeader}>
                  <h3>{post.title}</h3>
                  <span className={styles.postMeta}>
                    조회수 {post.viewCount} • 댓글 {post.commentCount || 0}
                  </span>
                </div>
                <p className={styles.postPreview}>{post.detail}</p>
                <div className={styles.postFooter}>
                  <span>작성자: {post.user.userName}</span>
                  <span>
                    {new Date(post.createDateTime).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
