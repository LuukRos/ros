'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface CopyProps {
  text?: string;
  copyTimeout?: number;
}

export const Copy = ({ text = undefined, copyTimeout = 3000 }: CopyProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const copy = useCallback(async () => {
    if (timeout.current) clearTimeout(timeout.current);

    if (!text) return;

    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    timeout.current = setTimeout(() => {
      setIsCopied(false);
    }, copyTimeout);
  }, [text, copyTimeout]);

  if (!text) return null;

  return (
    <button className="" disabled={isCopied} onClick={copy}>
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  );
};
