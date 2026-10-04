"use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";
// import { parseLrc, type LyricLine } from "@/lib/parse-lrc";

// export type { LyricLine };
// export type Track = {
//   title: string;
//   artist: string;
//   audioSrc: string;
//   /** Path file .lrc di /public, contoh: "/audio/luther.lrc" */
//   lrcSrc?: string;
//   /** Opsional: kalau mau isi lirik manual tanpa file .lrc */
//   lyrics?: LyricLine[];
// };

// export default function MusicPlayer({ tracks }: { tracks: Track[] }) {
//   const [open, setOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [trackIndex, setTrackIndex] = useState(0);
//   const [lyrics, setLyrics] = useState<LyricLine[]>([]);
//   const [lineIndex, setLineIndex] = useState(-1);

//   const audioRef = useRef<HTMLAudioElement>(null);
//   const viewportRef = useRef<HTMLDivElement>(null);
//   const listRef = useRef<HTMLDivElement>(null);
//   const lineRefs = useRef<(HTMLButtonElement | null)[]>([]);
//   const [offset, setOffset] = useState(0);

//   const track = tracks[trackIndex];
//   const hasLyrics = lyrics.length > 0;

//   // Ganti lagu
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     audio.src = track.audioSrc;
//     setLineIndex(-1);
//     setOffset(0);
//     if (isPlaying) audio.play().catch(() => setIsPlaying(false));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [trackIndex]);

//   // Load lirik (.lrc) tiap ganti lagu
//   useEffect(() => {
//     let cancelled = false;
//     if (track.lyrics?.length) {
//       setLyrics(track.lyrics);
//       return;
//     }
//     if (!track.lrcSrc) {
//       setLyrics([]);
//       return;
//     }
//     fetch(track.lrcSrc)
//       .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
//       .then((txt) => !cancelled && setLyrics(parseLrc(txt)))
//       .catch(() => !cancelled && setLyrics([]));
//     return () => {
//       cancelled = true;
//     };
//   }, [track]);

//   // Sinkron baris aktif dengan waktu lagu (rAF biar halus, bukan 4x/detik)
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio || lyrics.length === 0) return;

//     const compute = () => {
//       const t = audio.currentTime;
//       let idx = -1;
//       for (let i = 0; i < lyrics.length; i++) {
//         if (lyrics[i].time <= t) idx = i;
//         else break;
//       }
//       setLineIndex((prev) => (prev === idx ? prev : idx));
//     };

//     let raf = 0;
//     const loop = () => {
//       compute();
//       raf = requestAnimationFrame(loop);
//     };
//     if (isPlaying) raf = requestAnimationFrame(loop);

//     audio.addEventListener("seeked", compute);
//     compute();
//     return () => {
//       cancelAnimationFrame(raf);
//       audio.removeEventListener("seeked", compute);
//     };
//   }, [lyrics, isPlaying]);

//   // Geser list supaya baris aktif ada di tengah viewport (efek naik per kalimat)
//   useEffect(() => {
//     if (!open) return;
//     const viewport = viewportRef.current;
//     const el = lineRefs.current[Math.max(lineIndex, 0)];
//     if (!viewport || !el) return;
//     const target =
//       el.offsetTop + el.offsetHeight / 2 - viewport.clientHeight / 2;
//     setOffset(lineIndex < 0 ? 0 : Math.max(0, target));
//   }, [lineIndex, lyrics, open]);

//   const togglePlay = () => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       setOpen(true);
//       audio.play().catch(() => {});
//     }
//   };

//   const seekTo = (time: number) => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     audio.currentTime = time;
//     if (audio.paused) audio.play().catch(() => {});
//   };

//   const next = () => setTrackIndex((i) => (i + 1) % tracks.length);
//   const prev = () =>
//     setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         onEnded={next}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       />

//       {/* Tombol play — selalu kelihatan, posisi center biar aman di bentuk lingkaran (Hero) maupun persegi (About) */}
//       {!open && (
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.94 }}
//           onClick={togglePlay}
//           className="absolute inset-0 z-20 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md"
//           aria-label="Play music"
//         >
//           <Play size={18} className="ml-0.5" fill="currentColor" />
//         </motion.button>
//       )}

//       {/* Overlay "now playing" */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="absolute inset-0 z-20 flex flex-col justify-between bg-black/55 p-[18%] backdrop-blur-xl"
//           >
//             <button
//               onClick={() => {
//                 audioRef.current?.pause();
//                 setOpen(false);
//               }}
//               className="self-end text-white/70 hover:text-white"
//               aria-label="Close player"
//             >
//               <X size={16} />
//             </button>

//             {/* Area lirik */}
//             <div className="relative my-1 flex min-h-0 flex-1 items-center justify-center">
//               {hasLyrics ? (
//                 <div
//                   ref={viewportRef}
//                   className="relative h-full w-full overflow-hidden"
//                   style={{
//                     maskImage:
//                       "linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)",
//                     WebkitMaskImage:
//                       "linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)",
//                   }}
//                 >
//                   <div
//                     ref={listRef}
//                     className="flex flex-col gap-3 py-[35%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
//                     style={{ transform: `translateY(${-offset}px)` }}
//                   >
//                     {lyrics.map((line, i) => {
//                       const dist = i - lineIndex;
//                       const active = dist === 0;
//                       return (
//                         <button
//                           key={`${line.time}-${i}`}
//                           ref={(el) => {
//                             lineRefs.current[i] = el;
//                           }}
//                           onClick={() => seekTo(line.time)}
//                           className={`origin-left text-left font-heading text-[15px] font-bold leading-snug transition-all duration-500 hover:text-white/80 ${
//                             active
//                               ? "scale-100 text-white"
//                               : dist < 0
//                                 ? "scale-[0.96] text-white/35"
//                                 : "scale-[0.96] text-white/55"
//                           }`}
//                         >
//                           {line.text}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex items-end gap-1">
//                   {[0, 1, 2, 3, 4].map((i) => (
//                     <motion.span
//                       key={i}
//                       animate={
//                         isPlaying
//                           ? { height: ["20%", "100%", "40%", "80%", "20%"] }
//                           : { height: "20%" }
//                       }
//                       transition={{
//                         duration: 1 + i * 0.15,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="h-4 w-1 rounded-full bg-white/80"
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="text-center">
//               <p className="truncate font-heading text-xs font-bold text-white">
//                 {track.title}
//               </p>
//               <p className="truncate text-[10px] text-white/70">
//                 {track.artist}
//               </p>
//               <div className="mt-2 flex items-center justify-center gap-4">
//                 <button
//                   onClick={prev}
//                   className="text-white/80 hover:text-white"
//                   aria-label="Previous track"
//                 >
//                   <SkipBack size={15} fill="currentColor" />
//                 </button>
//                 <button
//                   onClick={togglePlay}
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
//                   aria-label={isPlaying ? "Pause" : "Play"}
//                 >
//                   {isPlaying ? (
//                     <Pause size={14} fill="currentColor" />
//                   ) : (
//                     <Play size={14} className="ml-0.5" fill="currentColor" />
//                   )}
//                 </button>
//                 <button
//                   onClick={next}
//                   className="text-white/80 hover:text-white"
//                   aria-label="Next track"
//                 >
//                   <SkipForward size={15} fill="currentColor" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // src/components/music-player.tsx
// "use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";
import { parseLrc, type LyricLine } from "@/lib/parse-lrc";

export type { LyricLine };
export type Track = {
  title: string;
  artist: string;
  audioSrc: string;
  lrcSrc?: string; // path file .lrc di /public, mis. "/audio/luther.lrc"
  lyrics?: LyricLine[]; // alternatif: isi manual {time (detik), text}
};

export default function MusicPlayer({ tracks }: { tracks: Track[] }) {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [lyrics, setLyrics] = useState<LyricLine[]>([]);
  const [lineIndex, setLineIndex] = useState(-1);
  const [offset, setOffset] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const track = tracks[trackIndex];
  const hasLyrics = lyrics.length > 0;

  // Ganti lagu
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.audioSrc;
    setLineIndex(-1);
    setOffset(0);
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  // Load & parse file .lrc
  useEffect(() => {
    let cancelled = false;
    if (track.lyrics?.length) {
      setLyrics(track.lyrics);
      return;
    }
    if (!track.lrcSrc) {
      setLyrics([]);
      return;
    }
    fetch(track.lrcSrc)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((txt) => !cancelled && setLyrics(parseLrc(txt)))
      .catch(() => !cancelled && setLyrics([]));
    return () => {
      cancelled = true;
    };
  }, [track]);

  // Cari baris aktif sesuai waktu lagu
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || lyrics.length === 0) return;

    const compute = () => {
      const t = audio.currentTime;
      let idx = -1;
      for (let i = 0; i < lyrics.length; i++) {
        if (lyrics[i].time <= t) idx = i;
        else break;
      }
      setLineIndex((prev) => (prev === idx ? prev : idx));
    };

    let raf = 0;
    const loop = () => {
      compute();
      raf = requestAnimationFrame(loop);
    };
    if (isPlaying) raf = requestAnimationFrame(loop);

    audio.addEventListener("seeked", compute);
    compute();
    return () => {
      cancelAnimationFrame(raf);
      audio.removeEventListener("seeked", compute);
    };
  }, [lyrics, isPlaying]);

  // Geser list supaya baris aktif ada di tengah
  useEffect(() => {
    if (!open) return;
    const viewport = viewportRef.current;
    const el = lineRefs.current[Math.max(lineIndex, 0)];
    if (!viewport || !el) return;
    const target =
      el.offsetTop + el.offsetHeight / 2 - viewport.clientHeight / 2;
    setOffset(lineIndex < 0 ? 0 : Math.max(0, target));
  }, [lineIndex, lyrics, open]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      setOpen(true);
      audio.play().catch(() => {});
    }
  };

  const seekTo = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    if (audio.paused) audio.play().catch(() => {});
  };

  const next = () => setTrackIndex((i) => (i + 1) % tracks.length);
  const prev = () =>
    setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);

  const mask =
    "linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)";

  return (
    <>
      <audio
        ref={audioRef}
        onEnded={next}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Badge play kecil, muncul sebelum di-expand */}
      {!open && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={togglePlay}
          className="absolute bottom-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md"
          aria-label="Play music"
        >
          <Play size={16} className="ml-0.5" fill="currentColor" />
        </motion.button>
      )}

      {/* Overlay "now playing" penuh */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 flex flex-col justify-between bg-black/55 p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => {
                audioRef.current?.pause();
                setOpen(false);
              }}
              className="self-end text-white/70 hover:text-white"
              aria-label="Close player"
            >
              <X size={16} />
            </button>

            {/* Lirik scroll ala Spotify, atau waveform kalau belum ada lirik */}
            <div className="flex min-h-0 flex-1 items-center justify-center px-2">
              {hasLyrics ? (
                <div
                  ref={viewportRef}
                  className="h-full w-full overflow-hidden"
                  style={{ maskImage: mask, WebkitMaskImage: mask }}
                >
                  <div
                    className="flex flex-col gap-3 py-[40%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                    style={{ transform: `translateY(${-offset}px)` }}
                  >
                    {lyrics.map((line, i) => {
                      const dist = i - lineIndex;
                      return (
                        <button
                          key={`${line.time}-${i}`}
                          ref={(el) => {
                            lineRefs.current[i] = el;
                          }}
                          onClick={() => seekTo(line.time)}
                          className={`text-left font-heading text-lg font-bold leading-snug transition-colors duration-500 hover:text-white/80 ${
                            dist === 0
                              ? "text-white"
                              : dist < 0
                                ? "text-white/30"
                                : "text-white/50"
                          }`}
                        >
                          {line.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex items-end gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      animate={
                        isPlaying
                          ? { height: ["20%", "100%", "40%", "80%", "20%"] }
                          : { height: "20%" }
                      }
                      transition={{
                        duration: 1 + i * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-4 w-1 rounded-full bg-white/80"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Info lagu + kontrol */}
            <div className="text-center">
              <p className="truncate font-heading text-sm font-bold text-white">
                {track.title}
              </p>
              <p className="truncate text-xs text-white/70">{track.artist}</p>
              <div className="mt-3 flex items-center justify-center gap-5">
                <button
                  onClick={prev}
                  className="text-white/80 hover:text-white"
                  aria-label="Previous track"
                >
                  <SkipBack size={18} fill="currentColor" />
                </button>
                <button
                  onClick={togglePlay}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause size={16} fill="currentColor" />
                  ) : (
                    <Play size={16} className="ml-0.5" fill="currentColor" />
                  )}
                </button>
                <button
                  onClick={next}
                  className="text-white/80 hover:text-white"
                  aria-label="Next track"
                >
                  <SkipForward size={18} fill="currentColor" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
