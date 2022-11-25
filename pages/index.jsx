import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Atividade Segunda Etapa com Next</title>
      </Head>
      <h1>NextJS</h1>
      <h2>{process.env.NEXT_PUBLIC_API_URL}</h2>
      <Link href="/sobre">Sobre...</Link>
      <br />
      <Link href="/CSR">CSR...</Link>
      <br />
      <Link href="/SSR">SSR...</Link>
      <br />
      <Link href="/SSG">SSG...</Link>    
      <br />
      <Link href="/ISR">ISR...</Link>        

    </div>
  )
}
