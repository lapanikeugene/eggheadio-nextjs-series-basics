import { readdir, readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";
import {CustomLink, Youtube} from '@dev/shared/mdx-elements'

import {getParsedContentBySlug, renderMarkdown} from '../../../../libs/markdown/src/lib/markdown'

import {MDXRemote} from "next-mdx-remote"
import dynamic from "next/dynamic";


export interface ArticleProps extends ParsedUrlQuery {
    slug:string
}

const MDXElements = {
    Youtube:dynamic(async()=>{
        //load component if it only necessary. 
       const components =  await import('@dev/shared/mdx-elements');
       return components.Youtube
    }
    ),
    CustomLink
}
  
//create path to texts 
const POSTS_PATH = join(process.cwd(),process.env.articleMorkDownPath);

export default function Article({frontMatter,html}) {
    console.log(frontMatter);
    return(<div className="m-6">

        <article>
            <h1>Title: {frontMatter.title}</h1>
            <div>Name: {frontMatter.author?.name}</div>
            <hr/>
            {/* render html from mdx function */}
            <MDXRemote {...html} components={MDXElements} />
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
        const render = await renderMarkdown(articleMarkdownContent.content);

        console.log(render);
        return{
            props:{
               frontMatter: articleMarkdownContent.frontMatter,
               html:render,
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