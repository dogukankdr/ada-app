import React, { useState } from "react";
import { login } from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginComponent({ onClose }) {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate('/', { replace: true });
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="custom-login-form">
      <div className="custom-imgcontainer">
        <img src="assets/images/login-avatar.png" alt="Avatar" className="custom-avatar" />
      </div>

      <div className="custom-container">
        <label htmlFor="email">
          <b>E-posta</b>
        </label>
        <input
          type="text"
          placeholder="*E-postanızı girin"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="psw">
          <b>Şifre</b>
        </label>
        <input
          type="password"
          placeholder="*Şifrenizi Girin"
          value={password}
          minLength={6}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="custom-login-button">
          Giriş Yap
        </button>
        <label className="remember-me">
          <input type="checkbox" defaultChecked name="remember" /> Beni Hatırla
        </label>
      </div>

      <div className="custom-container">
        <button type="button" className="custom-cancel-button">
          İptal
        </button>
        <span className="custom-psw">
          <a href="#">Şifremi unuttum?</a>
        </span>
      </div>
    </form>
  );
}

export default LoginComponent;
