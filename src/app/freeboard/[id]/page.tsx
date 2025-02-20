"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./post.module.css";
import axios from "axios";

interface Post {
  indexId: number;
  title: string;
  detail: string;
  viewCount: number;
  user: {
    userName: string;
  };
  createDateTime: string;
  imageUrl?: string;
  tags?: string[];
  category?: string;
}

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/post/${params.id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch post", error);
        router.push("/freeboard");
      }
    };

    fetchPost();
  }, [params.id, router]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span>작성자: {post.user.userName}</span>
        <span>{new Date(post.createDateTime).toLocaleDateString()}</span>
        <span>조회수: {post.viewCount}</span>
      </div>
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className={styles.image} />
      )}
      <p className={styles.detail}>{post.detail}</p>
      {post.tags && (
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}
      {post.category && (
        <div className={styles.category}>카테고리: {post.category}</div>
      )}
    </div>
  );
}
