import { readdir, readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import { ParsedUrlQuery } from "querystring";





export interface ArticleProps extends ParsedUrlQuery {
    slug:string
}

//create path to texts 
const POSTS_PATH = join(process.cwd(),'_article');

export function Article(article:ArticleProps) {

    return(<>
    </>)
}


export const getStaticProps:GetStaticProps<ArticleProps> = async({
    params}:{
        params:ArticleProps
    })=>{
        return{
            props:{
                slug:params.slug
            }
        }
    }


export const getStaticPaths:GetStaticPaths<ArticleProps> = async()=>{
    //clean path from special characters.  
    const paths = readdirSync(POSTS_PATH).map(p => p.replace(/\.mdx?$/,''))
    //create dynamic paths
    .map(slug=>({params:{slug}}))

    return {
        paths,
        fallback:false
    }
}