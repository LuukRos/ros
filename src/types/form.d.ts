import { COMMAND_TYPES } from './command-types';
import { Files, Links } from 'contentlayer/generated';

export type Response = {
  body?: Output;
  error?: string;
  redirect?: string | number;
};

export type Output = {
  commandType: keyof COMMAND_TYPES;
  files?: Files[];
  links?: Links[];
};

export type Result = {
  input: string;
  output: Output;
};
