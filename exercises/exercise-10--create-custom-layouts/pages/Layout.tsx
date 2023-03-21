import { ReactNode } from "react"
import Footer from "../src/components/layout/footer"
import Navbar from "../src/components/layout/navbar"

type Props = {
    children?:ReactNode
}

const Layout = ({children}:Props) =>{


    return (<>
        <Navbar />
        {children}
        <Footer />
    </>)
}


export default Layout