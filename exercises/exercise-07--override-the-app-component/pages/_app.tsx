// _ create replace for main component. 

import { AppProps } from "next/app"


const App = ({Component,pageProps}:AppProps)=>{
    const AnyComponent = Component as any;
    pageProps.title="check title";
    return <AnyComponent {...pageProps}/>;
}


export default App