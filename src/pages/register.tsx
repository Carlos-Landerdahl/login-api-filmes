import Head from 'next/head';

import { FormRegister } from '@/components/formRegister';

import { Container } from '@/styles/pages/home';

export default function Register() {
  return (
    <>
      <Head>
        <title>Crie sua conta</title>
        <meta
          name="description"
          content="Crie sua conta e tenha acesso aos seus filmes prediletos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <FormRegister />
      </Container>
    </>
  );
}
