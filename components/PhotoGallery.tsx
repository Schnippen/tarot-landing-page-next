"use client";
import React, { useState, useEffect } from "react";
import styles from "../app/App.module.css";
import Image from "next/image";
const PhotoGallery = ({ photos, delay }: any) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsFadingOut(false);
      }, 500);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [photos.length, delay]);

  const currentPhotoStyle = {
    opacity: isFadingOut ? 0 : 1,
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div className={styles.PhotoGallery}>
      <div className={styles.PhotoGalleryIMG} style={{ position: "relative" }}>
        <Image
          src={photos[currentPhotoIndex]}
          fill={true}
          alt="Screenshot of Tarot Reader App"
          style={currentPhotoStyle}
          loading="lazy"
          sizes="(max-width: 1620px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
