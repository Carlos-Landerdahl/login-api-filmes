import { ChangeEvent, FormEvent, useState } from 'react';

import { ContainerForm } from './style';

export function FormRegister() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleFormName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
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
        email: name,
        password: password,
      }),
    });

    if (response.ok) {
      console.log('User registered successfully');
      setName('');
      setPassword('');
    } else {
      console.log('Error registering user');
    }
  }

  return (
    <ContainerForm>
      <div>
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleFormName}
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
          <button type="submit" disabled>
            Enviar
          </button>
        </form>
      </div>
    </ContainerForm>
  );
}
