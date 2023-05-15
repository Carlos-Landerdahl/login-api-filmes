import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { ContainerForm } from './style';

export function FormRegister() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email.length < 6 || password.length < 2 || nome.length < 5) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password, nome]);

  function handleFormEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleFormNome(e: ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }

  function handleFormPassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
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
      console.log('Registrado com sucesso');
      setEmail('');
      setPassword('');
      window.open('/');
    } else {
      console.log('Erro ao registrar usuário');
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
          <input
            type="text"
            value={email}
            onChange={handleFormEmail}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={handleFormPassword}
            placeholder="Senha"
          />
          <label htmlFor="termos" className="termos">
            <input type="checkbox" id="termos" />
            Aceito todos os termos de uso
          </label>
          <button type="submit" disabled={isDisabled}>
            Enviar
          </button>
        </form>
      </div>
    </ContainerForm>
  );
}
