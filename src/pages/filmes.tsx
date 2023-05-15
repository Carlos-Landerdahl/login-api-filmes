import Head from 'next/head';

export default function Filmes() {
  return (
    <>
      <Head>
        <title>Filmes</title>
        <meta
          name="description"
          content="Seus filmes favoritos em um só lugar!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Filmes</h1>
      </main>
    </>
  );
}
