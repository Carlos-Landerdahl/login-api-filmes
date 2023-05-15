import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ContainerForm } from './style';

export function FormRegister() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (email.length < 6) {
      setIsDisabled(true);
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }

    if (nome.length < 5) {
      setIsDisabled(true);
      setNomeError('Nome inválido');
    } else {
      setNomeError('');
    }

    if (password.length < 2) {
      setIsDisabled(true);
      setPasswordError('Senha inválida');
    } else {
      setPasswordError('');
    }

    if (confirmPassword.length < 2 || password !== confirmPassword) {
      setIsDisabled(true);
      setConfirmPasswordError('As senhas não coincidem');
    } else {
      setConfirmPasswordError('');
    }

    if (
      email.length >= 6 &&
      nome.length >= 5 &&
      password.length >= 2 &&
      password === confirmPassword
    ) {
      setIsDisabled(false);
    }
  }, [email, password, nome, confirmPassword]);

  function handleFormEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleFormNome(e: ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }

  function handleFormPassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/register', {
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
      toast.success('Registrado com sucesso!', {
        autoClose: 2000,
      });

      setTimeout(() => {
        router.push('/');
      }, 3000);
    } else {
      toast.error('Erro ao cadastrar usuário', {
        autoClose: 2000,
      });
    }
  }

  return (
    <ContainerForm>
      <div>
        <h1>Crie sua conta</h1>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            value={nome}
            onChange={handleFormNome}
            placeholder="Nome completo"
          />
          {nomeError && <small>{nomeError}</small>}
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
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            placeholder="Confirme sua senha"
          />
          {confirmPasswordError && <small>{confirmPasswordError}</small>}
          <label htmlFor="termos" className="termos">
            <input type="checkbox" id="termos" />
            Quero receber lançamentos
          </label>
          <button type="submit" disabled={isDisabled}>
            Enviar
          </button>
        </form>
        <p>
          Já tem uma conta? <Link href={'/'}>Entrar</Link>
        </p>
      </div>
    </ContainerForm>
  );
}
