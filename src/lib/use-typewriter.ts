"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  opts?: { typeMs?: number; delMs?: number; holdMs?: number },
) {
  const typeMs = opts?.typeMs ?? 70;
  const delMs = opts?.delMs ?? 38;
  const holdMs = opts?.holdMs ?? 1500;

  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && sub === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting
        ? word.slice(0, sub.length - 1)
        : word.slice(0, sub.length + 1);
      timeout = setTimeout(() => setSub(next), deleting ? delMs : typeMs);
    }

    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words, typeMs, delMs, holdMs]);

  return sub;
}
