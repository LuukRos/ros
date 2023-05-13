'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useMemo, useRef, useState } from 'react';
import { Result } from '~/components/result';
import { useTextWidth } from '~/hooks/use-text-width';
import { Response, Result as ResultType } from '~/types/form';

export const Form = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<ResultType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputWidth = useTextWidth(input);

  const router = useRouter();
  const pathName = usePathname();

  const resultsComponent = useMemo(
    () =>
      results.map((instance, index) => (
        <Result input={instance.input} output={instance.output} key={index} />
      )),
    [results]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input) return;

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command: input,
          pathName,
        }),
      });

      const data: Response = await response.json();
      if (data.redirect) {
        if (typeof data.redirect === 'number') {
          const backTraversalOccurences = data.redirect;
          for (let i = 0; i < backTraversalOccurences; i++) {
            router.back();
          }
        } else {
          router.push(data.redirect);
        }
      }

      if (data.body) {
        setResults([
          ...results,
          {
            input,
            output: data.body,
          },
        ]);
      }
    } catch (error) {
      console.error(`FE error: ${error}`);
    }

    setInput('');
  };

  return (
    <>
      {resultsComponent}

      <form onSubmit={(event) => handleSubmit(event)} className="relative">
        <input
          type="text"
          value={input}
          ref={inputRef}
          onChange={(event) => handleInputChange(event)}
          className="bg-transparent text-black caret-transparent focus:outline-none dark:text-white"
          autoFocus
        />
        <span
          className="absolute top-0 h-full w-4 animate-caret bg-lavender bg-opacity-50"
          style={{
            left: `${inputWidth}px`,
          }}
        />
      </form>
    </>
  );
};
