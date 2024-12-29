"use client";
import { AnimeCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import AnimeInfo from "./AnimeInfo";

import { useRef, useState } from "react";

const Hero = ({ anime }: { anime: AnimeCardProps[] }) => {
  const [backgrounds, setBackgrounds] = useState<string[]>([]);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  const getAverageColor = (image: HTMLImageElement): string => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      return "rgb(0, 0, 0)";
    }

    canvas.width = image.width / 10; // ลดขนาดเพื่อประหยัดเวลา
    canvas.height = image.height / 10;

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;

    let r = 0, g = 0, b = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];     // Red
      g += data[i + 1]; // Green
      b += data[i + 2]; // Blue
    }

    const pixelCount = data.length / 4;
    r = Math.floor(r / pixelCount);
    g = Math.floor(g / pixelCount);
    b = Math.floor(b / pixelCount);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleImageLoad = (index: number) => {
    const img = imageRefs.current[index];
    if (img && img.complete) {
      const color = getAverageColor(img);
      const gradient = `linear-gradient(to right, ${color}, transparent)`;
      setBackgrounds((prev) => {
        const newBackgrounds = [...prev];
        newBackgrounds[index] = gradient;
        return newBackgrounds;
      });
    }
  };

  if (!anime || anime.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No hero anime available. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {anime.map((animeItem, index) => (
          <SwiperSlide key={animeItem.image} className="group">
            <div
              className="relative rounded-md overflow-hidden flex items-center justify-end"
              style={{
                background: backgrounds[index] || "linear-gradient(to right, #000, transparent)",
              }}
            >
              <div className="">
                <img ref={(el) => { imageRefs.current[index] = el!; }}
                  className="w-full h-[700px] object-cover  transition-all duration-300 mask-image"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right transparent, black 20%, black 100%, transparent)",
                    maskImage: "linear-gradient(to right, transparent, black 20%, black 100%, transparent)",
                    backgroundBlendMode: "multiply",
                  }}
                  src={animeItem.image}
                  alt={animeItem.title}
                  crossOrigin="anonymous"
                  onLoad={() => handleImageLoad(index)}
                />

              </div>
              <div className="absolute bottom-10 left-10 z-50 y-10">
                <AnimeInfo anime={animeItem} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
