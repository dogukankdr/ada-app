import { useState } from "react";
import { update, resetPassword, auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
    dispatch(
      login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        emailVerified: auth.currentUser.emailVerified,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      })
    );
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(password);
    if (result) {
      setPassword("");
    }
  };

  return (
    <div className="update-profile-container">
      <form onSubmit={handleSubmit} className="update-profile-form">
        <h1 className="update-profile-heading">Profili Güncelle</h1>
        <div>
          <label htmlFor="displayName">
            <b className="update-bg-info">Ad-Soyad</b>
          </label>
          <input
            type="text"
            id="displayName"
            placeholder="John Doe"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="avatar">
            <b className="update-bg-info">Fotoğraf</b>
          </label>
          <input
            type="text"
            id="avatar"
            placeholder="John Doe"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <button className="update-button">Güncelle</button>
      </form>
      <form onSubmit={handleResetSubmit} className="update-password-form">
        <h1 className="update-profile-heading">Parolayı Güncelle</h1>
        <div>
          <label htmlFor="password">
            <b className="update-bg-info">Parola</b>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Yeni parolayı girin."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
          />
        </div>
        <button className="update-button">Parolayı Güncelle</button>
      </form>
    </div>
  );
}
