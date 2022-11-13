import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Cooper!" />
        <p className="description">
          Do you know how to import it to this formattig?
          <br>I could always find a java compiler?
          <br>
          <br><code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
