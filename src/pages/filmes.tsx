import Head from 'next/head';

import { ListaFilmes } from '@/components/filmes';

import { styled } from '@/styles/stitches.config';
import { Movies } from '@/types/movieTypes';

export const Container = styled('div', {
  backgroundColor: '$background',
});

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
      <Container>
        <ListaFilmes />
      </Container>
    </>
  );
}
