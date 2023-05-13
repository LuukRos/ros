import { Files, Links } from 'contentlayer/generated';
import { COMMAND_TYPES } from './command-types';

export type Response = {
  body?: Output;
  error?: string;
  redirect?: string | number;
};

export type Output = {
  commandType: keyof COMMAND_TYPES;
  file?: Files;
  files?: Files[];
  links?: Links;
};

export type Result = {
  input: string;
  output: Output;
};
