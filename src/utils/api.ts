import fs from "fs";
import { sync } from "glob";
import frontMatter from "front-matter";
import { PostType, FrontMatterType, TagWithCount } from "@src/type/index";

const DIR_REPLACE_STRING = "/content";

type ContentDirectory = "blog";

const POST_PATH = `${process.cwd()}${DIR_REPLACE_STRING}`;

export async function getAllPosts(): Promise<Array<PostType>> {
  const files = sync(`${POST_PATH}/**/*.md*`).reverse();

  const posts = files
    .reduce<PostType[]>((prev, path) => {
      const file = fs.readFileSync(path, { encoding: "utf8" });
      const { attributes, body } = frontMatter<FrontMatterType>(file);
      const fm: FrontMatterType = attributes;
      const { tags: fmTags, published, date } = fm;

      const slug = path
        .slice(path.indexOf(DIR_REPLACE_STRING) + DIR_REPLACE_STRING.length + 1)
        .replace(".mdx", "")
        .replace(".md", "");

      if (published) {
        const tags: string[] = (fmTags || []).map((tag: string) => tag.trim());

        const result: PostType = {
          frontMatter: {
            ...fm,
            tags,
            date: new Date(date).toISOString().substring(0, 19),
          },
          body,
          fields: {
            slug,
          },
          path,
        };
        prev.push(result);
      }
      return prev;
    }, [])
    .sort((a, b) => {
      if (a.frontMatter.date < b.frontMatter.date) {
        return 1;
      }
      if (a.frontMatter.date > b.frontMatter.date) {
        return -1;
      }
      return 0;
    });

  return posts;
}

interface Tag {
  tag: string;
  count: number;
}

export async function getAllTagsFromPosts(): Promise<Array<TagWithCount>> {
  const tags: string[] = (await getAllPosts()).reduce<string[]>(
    (prev: string[], curr: PostType) => {
      curr.frontMatter.tags.forEach((tag: string) => {
        prev.push(tag);
      });
      return prev;
    },
    []
  );

  const tagWithCount = Array.from(new Set(tags)).map((tag) => ({
    tag,
    count: tags.filter((t) => t === tag).length,
  }));

  return tagWithCount.sort((a: Tag, b: Tag) => b.count - a.count);
}