import React from 'react';

export default function Header() {
  return (
      <>
        <header className="header">
                <div className="header-absolute">
                    <div className="content mod--header">
                        <div className="header__columns">
                            <div className="header__col">
                                <a href="/" className="header__logo-link w-inline-block">
                                    <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303313995e0401_logo.svg"
                                        loading="lazy" alt="" className="header__logo-img" />
                                    <img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303334455e0400_logo-text.svg"
                                        loading="lazy" alt="" className="header__logo-img2" />
                                </a>
                            </div>
                            <div className="header__col mod--2">
                                <a href="#Big-transfers" data-anim="link" className="header__nav-link w-inline-block w--current">
                                    <div className="nav-txt-anim">
                                        <div className="nav-txt mod--over">Big transfers</div>
                                        <div className="nav-txt">Big transfers</div>
                                    </div>
                                </a>
                                <a href="#Processes" data-anim="link" className="header__nav-link w-inline-block">
                                    <div className="nav-txt-anim">
                                        <div className="nav-txt mod--over">Processes</div>
                                        <div className="nav-txt">Processes</div>
                                    </div>
                                </a>
                                <a href="#Benefits" data-anim="link" className="header__nav-link w-inline-block">
                                    <div className="nav-txt-anim">
                                        <div className="nav-txt mod--over">Benefits</div>
                                        <div className="nav-txt">Benefits</div>
                                    </div>
                                </a>
                                <a href="#Personal" data-anim="link" className="header__nav-link w-inline-block">
                                    <div className="nav-txt-anim">
                                        <div className="nav-txt mod--over">Personal</div>
                                        <div className="nav-txt">Personal</div>
                                    </div>
                                </a>
                            </div>
                            <div className="header__col">
                                <div className="header__buttons">
                                    <a data-anim="login" href="/" className="btn mod--login w-inline-block">
                                        <div className="btn-login__ico-wrap">
                                            <div className="btn-login__arrow">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30339b685e040f_ico_login1.svg"
                                                    loading="lazy" alt="" className="btn-login__ico mod--0" />
                                                <img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30339b685e040f_ico_login1.svg"
                                                    loading="lazy" alt="" className="btn-login__ico mod--1" />
                                            </div>
                                            <img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033ef4a5e040d_ico_login2.svg"
                                                loading="lazy" alt="" className="btn-login__ico mod--2" />
                                        </div>
                                    </a>
                                    <a href="/" className="btn btn--reg w-button">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
      </>
  );
}
