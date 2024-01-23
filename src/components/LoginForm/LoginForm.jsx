import { useId } from 'react';

export const LoginForm = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onSubmit
    onSubmit({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};
