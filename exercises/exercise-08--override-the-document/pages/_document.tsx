import { Html,Head, Main, NextScript, } from "next/document";
// import Head from "next/head";

// general rendering template 
// document is only rendered on server 
// so event listeners like click will not work here. 
// but i can add for example google stats here or localisation . 
export default function Document(){
    return(
        <Html>
            <Head>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    )
}