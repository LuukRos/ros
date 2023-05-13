import { COMMAND_TYPES } from '~/types/command-types';
import { Output } from '~/types/form';

export const processResult = (output: Output) => {
  const { commandType } = output;
  switch (commandType) {
    case COMMAND_TYPES[COMMAND_TYPES.ls]:
      return {
        code:
          output.links && 'body' in output.links
            ? output.links.body?.code
            : null,
        files: output.files,
      };
    case COMMAND_TYPES[COMMAND_TYPES.cat]:
      return {
        code: output.file?.body.code,
      };
  }
};
