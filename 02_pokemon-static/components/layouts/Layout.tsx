import Head from 'next/head'
import { FC } from 'react'
import NavBar from '../ui/NavBar'



interface Props {
    children?: React.ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> =({ children, title }) => {


  

  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Cristian Alonso"/>
        <meta name="description" content={`Información sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>


        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>

   <NavBar/>

    <main style={{
        padding: '0px 20px'
    }}>
        {children}
    </main>
    </>
  )
}



