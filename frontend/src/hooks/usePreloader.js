'use client';

import { useState, useEffect, useCallback } from 'react';

const TOTAL_FRAMES = 151;
const BATCH_SIZE = 15;

function getFramePath(index) {
  const num = String(index).padStart(3, '0');
  return `/frames/ezgif-frame-${num}.jpg`;
}

export default function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);

  const preloadImages = useCallback(async () => {
    const loadedImages = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const loadImage = (index) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = getFramePath(index);
        img.onload = () => {
          loadedImages[index - 1] = img;
          loadedCount++;
          setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          resolve(img);
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          resolve(null);
        };
      });
    };

    // Load in batches
    for (let i = 0; i < TOTAL_FRAMES; i += BATCH_SIZE) {
      const batch = [];
      for (let j = i; j < Math.min(i + BATCH_SIZE, TOTAL_FRAMES); j++) {
        batch.push(loadImage(j + 1));
      }
      await Promise.all(batch);
    }

    setImages(loadedImages.filter(Boolean));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return { progress, isLoaded, images, totalFrames: TOTAL_FRAMES };
}
