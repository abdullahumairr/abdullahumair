"use client";

import { useEffect, useRef, useState } from "react";

export function useCarousel(autoSpeed = 0.4) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const dragStartRef = useRef<{ x: number; offset: number } | null>(null);
  const rafRef = useRef<number>(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    const tick = () => {
      if (!paused && !dragStartRef.current) {
        offsetRef.current += autoSpeed;
        if (
          halfWidthRef.current > 0 &&
          offsetRef.current >= halfWidthRef.current
        ) {
          offsetRef.current -= halfWidthRef.current;
        }
        track.style.transform = `translateX(${-offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", measure);
    };
  }, [autoSpeed, paused]);

  const onPointerDown = (e: React.PointerEvent) => {
    setPaused(true);
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStartRef.current) return;
    const delta = e.clientX - dragStartRef.current.x;
    let newOffset = dragStartRef.current.offset - delta;
    if (halfWidthRef.current > 0) {
      newOffset =
        ((newOffset % halfWidthRef.current) + halfWidthRef.current) %
        halfWidthRef.current;
    }
    offsetRef.current = newOffset;
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${-newOffset}px)`;
  };

  const onPointerUp = () => {
    dragStartRef.current = null;
    setPaused(false);
  };

  return {
    trackRef,
    paused,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerEnter: () => setPaused(true),
    onPointerLeave: () => {
      if (!dragStartRef.current) setPaused(false);
    },
  };
}
