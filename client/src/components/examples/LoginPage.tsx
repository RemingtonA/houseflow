import LoginPage from '../LoginPage';

export default function LoginPageExample() {
  return <LoginPage onLogin={(username) => console.log('Login:', username)} />;
}
