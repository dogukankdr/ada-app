import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, emailVerification } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import UpdateProfile from "../components/UpdateProfile";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/", {
      replace: true,
    });
  };

  const handleVerification = async () => {
    await emailVerification();
  };

  if (user) {
    return (
      <div className="profile-container">
        <h1 className="profile-header">
          {user.photoURL && (
            <img
              src={user.photoURL}
              className="profile-user-img"
              alt="user profile"
            />
          )}
          {user.email}
          <button onClick={handleLogout} className="logout-button fa-solid fa-right-from-bracket" />
        </h1>
        <div className="button-container">
            {!user.emailVerified && (
              <button onClick={handleVerification} className="verify-button">
                E-posta onayla
              </button>
            )}
          </div>
        <UpdateProfile />
      </div>
    );
  }
}

export default Profile;
