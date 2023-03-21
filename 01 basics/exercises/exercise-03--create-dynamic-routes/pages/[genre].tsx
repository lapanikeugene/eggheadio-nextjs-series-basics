import { useRouter } from "next/router"

//[name of file] - dynamic routing. 
const Genre = ()=>{
    const router = useRouter();
    const {genre} = router.query;


    return (<>
    <h1>{genre}</h1>
    </>)
}


export default Genre