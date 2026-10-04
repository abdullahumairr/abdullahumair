export type LyricLine = { time: number; text: string };

export function parseLrc(raw: string): LyricLine[] {
  const lines: LyricLine[] = [];
  const stampRe = /\[(\d{1,2}):(\d{2}(?:[.:]\d{1,3})?)\]/g;

  for (const row of raw.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    const stamps = [...row.matchAll(stampRe)];
    if (stamps.length === 0) continue;

    const text = row.replace(stampRe, "").trim();
    if (!text || text.startsWith("🎵")) continue;

    for (const m of stamps) {
      const time = Number(m[1]) * 60 + Number(m[2].replace(":", "."));
      lines.push({ time, text });
    }
  }

  return lines.sort((a, b) => a.time - b.time);
}
