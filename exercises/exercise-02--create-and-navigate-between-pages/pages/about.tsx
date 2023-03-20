import Link from "next/link"

const About = ()=>{


    return(<>
    <p>About</p>
    Link component is using to link pages in route automatically<br/>
    //with link transition happened immediately, with link page will reload. 
    <Link href={'/'}>Homepage</Link>
    </>)
}


export default About