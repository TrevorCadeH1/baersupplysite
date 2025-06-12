import React from "react";
import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ src, alt, width, height, className }) => (
  <Image src={src} alt={alt} width={width} height={height} className={className} />
);

export default SectionImage;