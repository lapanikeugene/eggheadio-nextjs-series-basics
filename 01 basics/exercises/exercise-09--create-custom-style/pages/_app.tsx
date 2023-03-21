import type { AppProps } from 'next/app'

// ✍️ import the global stylesheet
import '../styles/globals.css'
const App = ({ Component, pageProps }: AppProps) => {
  const AnyC = Component as any;
  return <AnyC {...pageProps} />
}

export default App
