import { GetStaticPaths, GetStaticProps } from "next"

type Props = {
    genre:string
}
const Genre = ({genre}:Props)=>{


    return(<>{genre}</>)
}
export const getStaticPaths:GetStaticPaths=()=>{

    return{
        // var name (genre)=>({params:{genre} should be same not different! 
        paths:['rock','blues', 'pop','country'].map((genre)=>({params:{genre} })),
        
        // false - return 404 page if paths not included. 
        // true - nextjs generate page and add it to the list of pages. 
        // 'blocked' - nextjs wait of generating of page on the server side. 
        fallback:false, 
    }
}

// export const getStaticPaths: GetStaticPaths = () => {
//     const genres = ['rock', 'country', 'pop']
//     return {
//       paths: genres.map((genre) => ({ params: { genre } })),
//       fallback: false
//     }
//   }

export const getStaticProps:GetStaticProps<Props> = (context)=>{
    //here how to get properties for static page. 
    const genre = context.params?.['genre'] as string;

    if(!genre){
        return{
            notFound:true,
        }
    }
    return {
        props:{
            genre,
        },
        revalidate:5 //ISR. method. update props if page update between 5 seconds by user. 
    }
}
export default Genre; 