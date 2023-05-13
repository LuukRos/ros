import { ReactNode } from 'react';
import { Command } from '~/components/command';
import { MDX } from '~/components/mdx';
import { Result as ResultProps } from '~/types/form';
import { processResult } from '~/utils/process-result';

export const Result = ({ input, output }: ResultProps) => {
  const processedResult = processResult(output);
  if (!processedResult) return null;

  return (
    <div className="my-4">
      <Command command={input} />

      <div className="flex gap-2">
        {!!processedResult.files?.length && (
          <div className="flex gap-2">
            {processedResult.files.map((file, index) => (
              // TODO: figure out if this can be resolved
              // @ts-expect-error
              <span key={index}>{file}</span>
            ))}
          </div>
        )}

        {!!processedResult.code && (
          <div>
            <MDX code={processedResult.code} />
          </div>
        )}
      </div>
    </div>
  );
};
