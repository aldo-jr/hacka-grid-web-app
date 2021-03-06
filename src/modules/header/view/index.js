import "./index.scss";
import "firebase/auth";

import { Link } from "react-router-dom";
import MainLogo from "assets/main-logo.png";
import React from "react";

class HeaderView extends React.Component {
  state = {
    subMenu: false
  };

  handleOpenSubMenu = () => {
    this.setState(prevState => ({ subMenu: !prevState.subMenu }));
  };

  handleChangeClick = () => {
    this.setState({ subMenu: false });
  };

  render() {
    const {
      handleOpenSubMenu,
      handleChangeClick,
      props: {
        logout,
        currentUser: { displayName, photoURL }
      },
      state: { subMenu }
    } = this;
    return (
      <header className="header-view">
        <button className="header-view__back" onClick={() => {}}>
          Voltar
        </button>
        <img className="header-view__logo" src={MainLogo} alt="Me Seg" />
        <section className="header-view__profile">
          <img
            className="header-view__profile-image"
            onClick={handleOpenSubMenu}
            src={photoURL}
            alt={displayName}
          />
          <nav
            className={`header-view__profile-sub-menu ${subMenu &&
              "header-view__profile-sub-menu--open"}`}
          >
            <ul className="header-view__profile-sub-menu-list">
              <li>
                <Link to="/me/indica-seg" onClick={handleChangeClick}>
                  Indica Seg
                </Link>
              </li>
              <li>
                <Link to="/me/meus-planos" onClick={handleChangeClick}>
                  Meus Planos
                </Link>
              </li>
              <li>
                <Link to="/me/meus-pontos" onClick={handleChangeClick}>
                  Minha Pontuação
                </Link>
              </li>
              <li>
                <button onClick={logout}>Sair</button>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    );
  }
}

export default HeaderView;
