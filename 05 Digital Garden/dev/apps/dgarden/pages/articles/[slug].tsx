import { readdir, readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";

import {getParsedContentBySlug} from '../../../../libs/markdown/src/lib/markdown'



export interface ArticleProps extends ParsedUrlQuery {
    slug:string
}
  
//create path to texts 
const POSTS_PATH = join(process.cwd(),'_articles');

export default function Article({frontMatter}) {
    console.log(frontMatter);
    return(<div className="m-6">

        <article>
            <h1>Title: {frontMatter.title}</h1>
            <div>Name: {frontMatter.author?.name}</div>
        </article>
    </div>) 
}
 

export const getStaticProps:GetStaticProps<ArticleProps> = async({
    params}:{
        params:ArticleProps
    })=>{


        const articleMarkdownContent = getParsedContentBySlug(
            params.slug,
            POSTS_PATH,
        )
        console.log('slug:',params.slug,', path:',POSTS_PATH,'article:',articleMarkdownContent);
        return{
            props:{
               frontMatter: articleMarkdownContent.frontMatter
            }
        }
    }


export const getStaticPaths:GetStaticPaths<ArticleProps> = async()=>{
    //clean path from special characters.  
    console.log('start handle slug');
    const paths = readdirSync(POSTS_PATH).map(p => p.replace(/\.mdx?$/,''))
    //create dynamic paths
    .map((slug)=>({params:{slug}}))

    console.log(paths);

    return {
        paths,
        fallback:false
    }
}