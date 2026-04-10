'use client';

import { useState, useRef, useCallback, type MouseEvent, type TouchEvent } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  width: number;
  height: number;
  className?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  width,
  height,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    e.preventDefault();
    handleMove(e.clientX);
  };
  
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full select-none overflow-hidden rounded-lg shadow-2xl', className)}
      style={{ aspectRatio: `${width}/${height}` }}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <Image
        src={after}
        alt="After"
        fill
        priority
        className="object-cover"
        data-ai-hint="edited photo"
      />
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={before}
          alt="Before"
          fill
          priority
          className="object-cover"
          data-ai-hint="raw photo"
        />
      </div>
      <div
        className="absolute top-0 h-full w-1.5 cursor-ew-resize bg-white/50 backdrop-blur-sm"
        style={{ left: `calc(${sliderPosition}% - 3px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary/80 border-2 border-white/50 backdrop-blur-md flex items-center justify-center text-primary-foreground">
          <ChevronLeft className="h-6 w-6" />
          <ChevronRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
