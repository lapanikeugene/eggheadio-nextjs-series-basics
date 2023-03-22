//* parse  front-matter to object. 
import { readFileSync } from "fs";
import matter = require("gray-matter")
import { join } from "path";
//* markdown content to html; 
import { serialize } from "next-mdx-remote/serialize";
export function getParsedContentBySlug(filename:string,postPath:string){

  const postFilePath = join(postPath,`${filename}.mdx`);
  const fileContent =  readFileSync(postFilePath);
  const {data,content} = matter(fileContent);
  console.log(matter(fileContent))
  return {
    frontMatter:data,
    content
  };

}
export function renderMarkdown(markdownContent:string) {
  
  return  serialize(markdownContent || "");
}
