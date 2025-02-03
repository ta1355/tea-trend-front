"use client";
import { useState } from "react";
import styles from "./tea-rating.module.css";

export default function TeaRatingPage() {
  const [mapView, setMapView] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>티슐랭</h1>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.toggleButton} ${mapView ? styles.active : ""}`}
            onClick={() => setMapView(true)}
          >
            지도보기
          </button>
          <button
            className={`${styles.toggleButton} ${
              !mapView ? styles.active : ""
            }`}
            onClick={() => setMapView(false)}
          >
            목록보기
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.map}>
          {/* 여기에 카카오맵 또는 네이버맵 컴포넌트가 들어갈 예정 */}
          <div className={styles.mapPlaceholder}>지도 영역</div>
        </div>

        <div className={styles.sideList}>
          {[1, 2, 3].map((place) => (
            <div key={place} className={styles.placeCard}>
              <div className={styles.placeImage}>
                <div className={styles.imagePlaceholder}>이미지</div>
              </div>
              <div className={styles.placeInfo}>
                <h3>티하우스 {place}</h3>
                <p>서울시 강남구 테헤란로</p>
                <div className={styles.rating}>
                  ⭐⭐⭐⭐⭐ <span>(4.5/5)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
