"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

/**
 * SafeImage component that provides automatic fallback to logo when image fails to load
 * Usage: <SafeImage src="/image.webp" alt="Description" width={100} height={100} />
 */
export default function SafeImage({
  src,
  alt,
  fallbackSrc = '/logo-dash-tech.webp',
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
