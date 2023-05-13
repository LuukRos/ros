import { allFiles, allLinks, allPosts } from 'contentlayer/generated';
import { NextResponse } from 'next/server';
import { COMMAND_TYPES } from '~/types/command-types';

const PAGES: Record<string, string> = {
  home: '/',
  blog: '/blog',
  // All dynamic blog pages
  ...Object.fromEntries(
    allPosts.map((post) => [post.linkSlug, `/blog/${post.linkSlug}`])
  ),
};

const findLinksForPath = (pathName: string) =>
  allLinks.find(
    (file) =>
      file._id === `links${pathName === '/' ? '/home' : pathName}-links.mdx`
  );

export const POST = async (request: Request) => {
  try {
    const { command, pathName } = await request.json();
    const [commandType, commandBody]: [string, string] = command.split(/ (.*)/);

    switch (commandType) {
      case COMMAND_TYPES[COMMAND_TYPES.cd]:
        const backTraversalOccurences =
          pathName !== '/' ? commandBody.match(/(..\/)/g)?.length : 0;
        if (!!backTraversalOccurences) {
          return NextResponse.json({
            redirect: backTraversalOccurences,
          });
        }

        return NextResponse.json({
          redirect: PAGES[commandBody.toLowerCase() as keyof typeof PAGES],
        });

      case COMMAND_TYPES[COMMAND_TYPES.ls]:
        console.log(findLinksForPath(pathName));
        return NextResponse.json({
          body: {
            commandType,
            files:
              pathName === '/'
                ? allFiles.map((file) => file.fileName)
                : undefined,
            links: findLinksForPath(pathName) ?? [],
          },
        });

      case COMMAND_TYPES[COMMAND_TYPES.cat]:
        console.log(pathName);
        if (pathName !== '/')
          throw new Error('No files available in this directory');

        const file = allFiles.find((file) => file.fileName === commandBody);
        if (!file) throw new Error('File not found');

        return NextResponse.json({
          body: {
            commandType,
            file,
          },
        });
    }
  } catch (error) {
    console.error(`BE error: ${error}`); // TODO: properly process this error to the FE
  }
};
