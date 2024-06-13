import { NavLink, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import LoginComponent from "./LoginComponent";
import SigninComponent from "./SigninComponent";
import { useState } from "react";
import "../componentStyle/loginStyle.css";
import "../componentStyle/signinStyle.css";
import "../componentStyle/profileStyle.css";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../pages/Profile";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSigninModal = () => {
    setSigninModalOpen(true);
  };

  const closeSigninModal = () => {
    setSigninModalOpen(false);
  };

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  return (
    <>
      <div className="header_section">
        <div className="container-fluid" style={{ border: "1px solid white" }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img className="ada-logo" src="assets/images/adalogo.jpg" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Butonlar */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="/"
                  >
                    Anasayfa
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="education"
                  >
                    Farkındalık
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="maps"
                  >
                    Harita
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="news"
                  >
                    Haberler
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="donate"
                  >
                    Bağış
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="about"
                  >
                    Hakkımızda
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link  ${(navData) =>
                      navData.isActive ? "active" : ""}`}
                    to="contact"
                  >
                    Bize Ulaşın
                  </NavLink>
                </li>
              </ul>

              {user ? (
                <div className="login_bt">
                  <ul>
                    <li>
                      <a onClick={openProfileModal}>
                        <span className="user_icon">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                        Profil
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <form className="form-inline my-2 my-lg-0">
                  <div className="login_bt">
                    <ul>
                      <li>
                        <a onClick={openLoginModal}>
                          <span className="user_icon">
                            <i className="fa fa-user" aria-hidden="true"></i>
                          </span>
                          GİRİŞ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="signin_bt">
                    <ul>
                      <li>
                        <a onClick={openSigninModal}>
                          <span className="signin_icon">
                            <i
                              className="fas fa-user-plus"
                              aria-hidden="true"
                            ></i>
                          </span>
                          KAYIT OL
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              )}
            </div>
          </nav>
        </div>
      </div>
      {/* Giriş modal */}
      {loginModalOpen && (
        <div id="loginModal" className="modal">
          <div className="login-modal-content">
            <span className="close" onClick={closeLoginModal}>
              &times;
            </span>
            <LoginComponent onClose={closeLoginModal} />
          </div>
        </div>
      )}
      {/* Kayıt ol modal */}
      {signinModalOpen && (
        <div id="signinModal" className="modal">
          <div className="modal-content">
            <span className="signin-close" onClick={closeSigninModal}>
              &times;
            </span>
            <SigninComponent onClose={closeSigninModal} />
          </div>
        </div>
      )}
      {/* Profil modal */}
      {profileModalOpen && (
        <div id="profileModal" className="modal">
          <div className="profile-modal-content">
            <span className="profile-close" onClick={closeProfileModal}>
              &times;
            </span>
            <Profile onClose={closeProfileModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
