//* parse  front-matter to object. 
import { readFileSync } from "fs";
import matter = require("gray-matter")
import { join } from "path";

export function getParsedContentBySlug(filename:string,postPath:string){

  const postFilePath = join(postPath,`${filename}.md`);
  const fileContent =  readFileSync(postFilePath);
  const {data,content} = matter(fileContent);
  console.log(matter(fileContent))
  return {
    frontMatter:data,
    content
  };

}
export function renderMarkdown(): string {
  return 'markdown';
}
