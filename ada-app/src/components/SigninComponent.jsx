import React, { useState } from "react";
import { register } from "../firebase";

const SigninComponent = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const user = await register( email, password )
  }


  return (
    <form onSubmit={handleSubmit} className="custom-form">
      <div className="container">
        <h2 className="signin_text">Kayıt Ol</h2>
        <p>Hesap oluşturmak için lütfen formu doldurun.</p>
        <hr />

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

        <label htmlFor="tel">
          <b>Telefon Numarası</b>
        </label>
        <input
          type="tel"
          placeholder="*Telefon numaranızı girin"
          name="tel"
          required
        />

        <label htmlFor="psw">
          <b>Şifre</b>
        </label>
        <input
          type="password"
          placeholder="*Şifrenizi girin"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <label htmlFor="psw-repeat">
          <b>Şifre Tekrar</b>
        </label>
        <input
          type="password"
          placeholder="*Şifrenizi tekrar girin"
          name="psw-repeat"
          required
        />
        
        <p>
          Bir hesap oluşturarak şunları kabul etmiş olursunuz:{" "}
          <a href="https://x.com/dgknkdr" style={{ color: "dodgerblue" }}>
            Şartlar ve Gizlilik
          </a>
          .
        </p>

        <div className="clearfix">
          <button type="button" className="cancelbtn">
            İptal
          </button>
          <button type="submit" className="signupbtn">
            Kayıt ol
          </button>
        </div>
      </div>
    </form>

  );
};

export default SigninComponent;
