import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { ContainerForm } from './style';

export function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email.length < 6 || password.length < 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password]);

  function handleFormName(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleFormPassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      console.log('User registered successfully');
      setEmail('');
      setPassword('');
    } else {
      console.log('Error registering user');
    }
  }

  return (
    <ContainerForm>
      <div>
        <h1>Entre</h1>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={handleFormName}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={handleFormPassword}
            placeholder="Senha"
          />
          <button type="submit" disabled={isDisabled}>
            Enviar
          </button>
        </form>
        <p>
          Novo por aqui? <Link href={'/register'}>Assine agora</Link>
        </p>
      </div>
    </ContainerForm>
  );
}
