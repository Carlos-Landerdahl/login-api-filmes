import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ContainerForm } from './style';

export function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (email.length < 6) {
      setIsDisabled(true);
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }

    if (password.length < 2) {
      setIsDisabled(true);
      setPasswordError('Senha inválida');
    } else {
      setPasswordError('');
    }

    if (email.length >= 6 && password.length >= 2) {
      setIsDisabled(false);
    }
  }, [email, password]);

  function handleFormEmail(e: ChangeEvent<HTMLInputElement>) {
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
      console.log('Logado com sucesso');
      setEmailError('');
      setPasswordError('');

      toast.success('Logado com sucesso!', {
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push('/filmes');
      }, 3000);
    } else {
      const data = await response.json();
      if (data.error === 'Invalid email') {
        setEmailError('Email não encontrado');
      }
      if (data.error === 'Invalid password') {
        setPasswordError('Senha incorreta');
      }
      toast.error('Login inválido', {
        autoClose: 2000,
      });
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
            onChange={handleFormEmail}
            placeholder="E-mail"
          />
          {emailError && <small>{emailError}</small>}
          <input
            type="password"
            value={password}
            onChange={handleFormPassword}
            placeholder="Senha"
          />
          {passwordError && <small>{passwordError}</small>}
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
