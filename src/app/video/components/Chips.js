"use client";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/utils/Constants";
import { Button } from "@/components/ui/button";

export default function Chips() {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // چیپ‌ها را دو برابر می‌کنیم
  const displayItems = [
    ...categories,
    ...categories,
    ...categories,
    ...categories,
    ...categories,
  ];
  const chipWidth = 130; // عرض هر چیپ
  const totalWidth = chipWidth * categories.length;

  // موقعیت wrap شده با ماژول برای ایجاد حالت بی‌نهایت
  const xWrap = useTransform(x, (latest) => {
    const mod = ((latest % totalWidth) + totalWidth) % totalWidth;
    return -mod;
  });

  const scrollLeft = () => {
    animate(x, x.get() + chipWidth * 1, { duration: 0.4 });
  };

  const scrollRight = () => {
    animate(x, x.get() - chipWidth * 1, { duration: 0.4 });
  };

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* دکمه چپ */}
      <button
        onClick={scrollRight}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-1"
      >
        <ChevronLeft size={20} />
      </button>

      {/* دکمه راست */}
      <button
        onClick={scrollLeft}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-1"
      >
        <ChevronRight size={20} />
      </button>

      {/* لیست چیپ‌ها */}
      <motion.ul
        ref={containerRef}
        className="flex justify-between gap-2 py-2 cursor-grab active:cursor-grabbing"
        style={{ x: xWrap }}
        drag="x"
        dragElastic={0.1}
      >
        {displayItems.map((item, i) => (
          <motion.li
            key={i}
            className="shrink-0"
            style={{ width: chipWidth }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white-300 border-1 border-gray-300 rounded-sm text-sm font-medium hover:bg-gray-100 transition whitespace-nowrap">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
