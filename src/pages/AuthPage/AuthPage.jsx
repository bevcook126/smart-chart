import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main className="auth-page">
      <img className="auth-img" src="https://i.imgur.com/Epi3pT0.png"></img>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Log In'}
      </button>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
    </main>
  );
}