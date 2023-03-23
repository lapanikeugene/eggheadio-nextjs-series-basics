import { Tree, formatFiles, installPackagesTask, generateFiles, joinPathFragments, names } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';


//! not working probably because of spaces in folder's name. 
interface newArticleSchemaOptions{
  title:string,
  author?:string,
  excerpt?:string,
}
export default async function (tree: Tree, schema: newArticleSchemaOptions) {
   generateFiles(

    tree,
    joinPathFragments(__dirname,'./files'),
    './_articles',{
      title:schema.title,
      author:schema.author || "",
      excerpt:schema.excerpt || "",

      //* name generate nice string from title, appropriate for url */
      normalizedTitle: names(schema.title).fileName,
      creationDate: new Date().toDateString()
    }
  )
  await formatFiles(tree);
 
}
