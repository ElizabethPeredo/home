import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          HOME
        </h1>

        <div className="grid">

          <Link href={{pathname: "/Contrato"}}>
            <a href="" className="card">
              <h2>CREAR CONTRATO</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>


          <a href="https://nextjs.org/learn" className="card">
            <h2>CREAR RECIBO</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

    </div>
  )
}
