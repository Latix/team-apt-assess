import React from 'react';

export default function Processes() {
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
                            <div className="header__humburger-wrap">
                                <div className="header__humb">
                                    <div className="header__humb-line mod--1"></div>
                                    <div className="header__humb-line mod--2"></div>
                                    <div className="header__humb-line mod--3"></div>
                                </div>
                                <div className="header__humb-close"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main className="main">
            <section id="Big-transfers" data-w-id="9a8c8c5e-18d4-aeb9-bc37-bac71fe0745b" className="section mod--hero">
                <div style={{ opacity: 1 }} className="content mod--hero">
                    <div className="hero__content">
                        <h1 className="heading1 mod--hero">Big transfers, bigger&nbsp;impact</h1>
                        <p className="hero__p">The simplest way to send big ideas around the world, and discover new creative
                            work while you’re at it.</p>
                        <div data-style="dash" data-addfile="btn" className="addfile-wrap">
                            <div className="addfile">
                                <div data-addfile="hover" className="addfile__block-hover" style={{ opacity: 1 }}>
                                    <div data-addfile="add" className="addfile__block mod--1" style={{ top: '0px', opacity: 1 }}>
                                        <div className="addfile__plus"></div>
                                        <div>
                                            <div className="addfile__txt mod--title">Add your files</div>
                                            <div className="addfile__txt mod--desc">Up to 20 GB</div>
                                        </div>
                                    </div>
                                    <div data-addfile="images" className="addfile__block mod--2"
                                        style={{ top: '-40px', opacity: 0 }}>
                                        <div className="addfile__img-wrap">
                                            <img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327045e040e_addfile_img.svg"
                                                loading="eager" alt="" className="addfile__img mod--0" />
                                            <img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327045e040e_addfile_img.svg"
                                                loading="eager" data-addfile="img" alt="" className="addfile__img mod--1" />
                                            <img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327045e040e_addfile_img.svg"
                                                loading="eager" data-addfile="img" alt="" className="addfile__img mod--2"/>
                                        </div>
                                    </div>
                                </div>
                                <div data-addfile="process" className="addfile__block mod--3" style={{ opacity: 0 }}>
                                    <div data-addfile="process-bg" className="addfile__process-bg" style={{ height: '0%' }}></div>
                                    <div className="addfile__process-percent"><span data-addfile="process-total"
                                            className="addfile__process-percent-total">1</span>%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg">
                    <div style={{ width: '100%', height: '787.375px' }} className="bg__grey"></div>
                    <div className="bg__img-wrap mod--1"
                        style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033ba8c5e03f0_hero_illustr-01.svg"
                            loading="eager"
                            style={{ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }}
                            alt="" className="bg__img mod--1" />
                    </div>
                    <div className="bg__img-wrap mod--2"
                        style={{ willChange: 'transform', transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30332f925e03e9_hero_illustr-02.svg"
                            loading="eager"
                            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }}
                            alt="" className="bg__img mod--2" />
                    </div>
                    <div className="bg__img-wrap mod--3"
                        style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }}>
                        <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303315ee5e03ee_hero_illustr-04.svg"
                            loading="eager"
                            style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                            alt="" className="bg__img mod--3" />
                    </div>
                    <div className="bg__img-wrap mod--4"
                        style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303336165e03ed_hero_illustr-03.svg"
                            loading="eager"
                            style={{ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',  transformStyle: 'preserve-3d' }}
                            alt="" className="bg__img mod--4" />
                    </div>
                </div>
            </section>
            <section id="Processes" data-w-id="92175d8d-8658-4116-7922-2511d5d3b108" className="section mod--process">
                <div className="content">
                    <div className="processes__columns">
                        <div data-w-id="ea1b0f68-432d-e681-61f0-364a0f2962c2" className="processes__col mod--1"
                            style={{ opacity: 1 }}>
                            <div className="processes__heading-wrap">
                                <h2 data-w-id="40679d9c-23cd-f8c6-9618-cfd51c5afb4c" className="processes__heading"
                                    style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    Your best processes</h2>
                                <p data-w-id="5b03307f-7f72-467f-2014-18776f1fc3a2" className="processes__p"
                                    style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    It’s a smart workspace where teams, tools and content come workspace together.</p>
                            </div>
                            <div data-w-id="de450e46-f6d3-91d2-3b9b-9554ef34c83f" className="processes__line"
                                style={{ height: '1px' }}></div>
                            <div data-w-id="82d57afa-4ea9-ddee-fbd0-2465493ae4d3" className="processes__logos"
                                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033f0965e03fe_processes_logo-01.svg"
                                        loading="lazy" alt="" className="processes__logo" />
                                    <img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303372c55e03fd_processes_logo-02.svg"
                                        loading="lazy" alt="" className="processes__logo" />
                                    <img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30337f875e0402_processes_logo-03.svg"
                                        loading="lazy" alt="" className="processes__logo" />
                                    <img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303371305e0403_processes_logo-04.svg"
                                        loading="lazy" alt="" className="processes__logo mod--last" />
                            </div>
                        </div>
                        <div data-w-id="edc0a8bb-8c01-dc4f-5d4e-a9b66eb46abc" className="processes__col mod--2"
                            style={{ opacity: 1 }}>
                            <div data-w-id="40f9dc6e-78d8-b461-0b41-30d66152b1ed" className="graph-block"
                                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                <h3 className="graph__heading">Niches breakdown</h3>
                                <div className="graph__columns">
                                    <div className="graph__col mod--1">
                                        <div data-graph="hover" className="graph__circle">
                                            <div className="graph__total">
                                                <div className="graph__total-txt">total</div>
                                                <div id="coord" className="graph__total-numb">1258</div>
                                            </div>
                                                <img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303365fe5e0412_graph_part-01.svg"
                                                    loading="lazy" data-graph="part1" alt="" className="graph__part" />
                                                <img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033fe7a5e0413_graph_part-03.svg"
                                                    loading="lazy" data-graph="part2" alt="" className="graph__part" />
                                                <img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303332975e0411_graph_part-04.svg"
                                                    loading="lazy" data-graph="part3" alt="" className="graph__part" />
                                                <img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303304115e0410_graph_part-02.svg"
                                                    loading="lazy" data-graph="part4" alt="" className="graph__part"/><img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30335e2f5e0414_graph_part-05.svg"
                                                    loading="lazy" data-graph="part5" alt="" className="graph__part" /><img
                                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30331e565e0407_infograph.svg"
                                                    loading="eager" data-graph="full" alt="" className="graph__part mod--full" />
                                            <div className="graph__part-canvas w-embed">
                                            <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAxIiBoZWlnaHQ9IjIwMSIgdmlld0JveD0iMCAwIDIwMSAyMDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMDEgMTAwLjVDMjAxIDEyMi45MTcgMTkzLjUwNSAxNDQuNjkxIDE3OS43MDcgMTYyLjM1OUMxNjUuOTA5IDE4MC4wMjYgMTQ2LjYgMTkyLjU3NCAxMjQuODUxIDE5OC4wMDVDMTAzLjEwMiAyMDMuNDM3IDgwLjE2MDcgMjAxLjQ0MSA1OS42NzYzIDE5Mi4zMzVDMzkuMTkxOCAxODMuMjI5IDIyLjMzOTkgMTY3LjUzNiAxMS44MDAzIDE0Ny43NTFMNTYuMTUwMiAxMjQuMTI1QzYxLjQyIDEzNC4wMTggNjkuODQ1OSAxNDEuODY0IDgwLjA4ODEgMTQ2LjQxOEM5MC4zMzA0IDE1MC45NzEgMTAxLjgwMSAxNTEuOTY4IDExMi42NzUgMTQ5LjI1M0MxMjMuNTUgMTQ2LjUzNyAxMzMuMjA1IDE0MC4yNjMgMTQwLjEwNCAxMzEuNDI5QzE0Ny4wMDMgMTIyLjU5NSAxNTAuNzUgMTExLjcwOSAxNTAuNzUgMTAwLjVMMjAxIDEwMC41WiIgZmlsbD0iI0ZGNDAzMyIvPgo8cGF0aCBkPSJNMTEuODY1NiAxNDcuODczQzUuNjQ0NSAxMzYuMjMzIDEuNzc2OTIgMTIzLjQ4MiAwLjQ4MzY3MSAxMTAuMzQ4Qy0wLjgwOTU3OCA5Ny4yMTM2IDAuNDk2ODM3IDgzLjk1MzEgNC4zMjgzMiA3MS4zMjM3TDUyLjQxNDIgODUuOTExOEM1MC40OTg0IDkyLjIyNjYgNDkuODQ1MiA5OC44NTY4IDUwLjQ5MTggMTA1LjQyNEM1MS4xMzg1IDExMS45OTEgNTMuMDcyMyAxMTguMzY3IDU2LjE4MjggMTI0LjE4NkwxMS44NjU2IDE0Ny44NzNaIiBmaWxsPSIjRTZEM0EzIi8+CjxwYXRoIGQ9Ik00LjE4NDc2IDcxLjgwMTJDMTEuNzA3MyA0Ni41NTUxIDI4Ljg0MTUgMjUuMjcxOSA1MS44OTk0IDEyLjUzMjhMNzYuMTk5NyA1Ni41MTY0QzY0LjY3MDggNjIuODg1OSA1Ni4xMDM2IDczLjUyNzUgNTIuMzQyNCA4Ni4xNTA2TDQuMTg0NzYgNzEuODAxMloiIGZpbGw9IiM4QkI4QTIiLz4KPHBhdGggZD0iTTUxLjg0MDQgMTIuNTY1NEM3NS4xNjIxIC0wLjMzOTkyMyAxMDIuNjU1IC0zLjQ1MjE4IDEyOC4yNzIgMy45MTMzTDExNC4zODYgNTIuMjA2NkMxMDEuNTc4IDQ4LjUyMzkgODcuODMxIDUwLjA4IDc2LjE3MDIgNTYuNTMyN0w1MS44NDA0IDEyLjU2NTRaIiBmaWxsPSIjNEM0RThFIi8+CjxwYXRoIGQ9Ik0xMjguMjM1IDMuOTAyN0MxNDkuMjEyIDkuOTI1NTEgMTY3LjY1OCAyMi42MTMgMTgwLjc4NSA0MC4wNDc2QzE5My45MTMgNTcuNDgyMiAyMDEuMDA5IDc4LjcxNjQgMjAxIDEwMC41NDFMMTUwLjc1IDEwMC41MkMxNTAuNzU0IDg5LjYwODIgMTQ3LjIwNyA3OC45OTExIDE0MC42NDMgNzAuMjczOEMxMzQuMDc5IDYxLjU1NjUgMTI0Ljg1NiA1NS4yMTI3IDExNC4zNjcgNTIuMjAxM0wxMjguMjM1IDMuOTAyN1oiIGZpbGw9IiM0MzJFMkQiLz4KPGNpcmNsZSBjeD0iMTAwLjUwMSIgY3k9IjEwMC40OTkiIHI9IjYwLjUyODQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                                                    className="graph__part-canvas" id="graph__part-canvas" alt="graph" />
                                                <canvas style={{ display: 'none' }} id="canvas"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="graph__col mod--2">
                                        <ul className="graph__list">
                                            <li className="graph__list-item">
                                                <div className="graph__list-dot">
                                                    <div data-graph="dot4" className="graph__list-dot-border"></div>
                                                </div>
                                                <div className="graph__list-txt">Engineering</div>
                                                <div className="graph__list-numb">23%</div>
                                            </li>
                                            <li className="graph__list-item">
                                                <div className="graph__list-dot mod--2">
                                                    <div data-graph="dot3" className="graph__list-dot-border mod--2"></div>
                                                </div>
                                                <div className="graph__list-txt">Finance</div>
                                                <div className="graph__list-numb">17%</div>
                                            </li>
                                            <li className="graph__list-item">
                                                <div className="graph__list-dot mod--3">
                                                    <div data-graph="dot2" className="graph__list-dot-border mod--3"></div>
                                                </div>
                                                <div className="graph__list-txt">Art</div>
                                                <div className="graph__list-numb">13%</div>
                                            </li>
                                            <li className="graph__list-item">
                                                <div className="graph__list-dot mod--4">
                                                    <div data-graph="dot1" className="graph__list-dot-border mod--4"></div>
                                                </div>
                                                <div className="graph__list-txt">Social</div>
                                                <div className="graph__list-numb">12%</div>
                                            </li>
                                            <li className="graph__list-item">
                                                <div className="graph__list-dot mod--5">
                                                    <div data-graph="dot5" className="graph__list-dot-border mod--5"></div>
                                                </div>
                                                <div className="graph__list-txt">Design</div>
                                                <div className="graph__list-numb">99%</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="graph__btn"></div>
                            </div>
                            <div className="processes__bg-wrap mod--1"><img
                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033d34d5e03fb_dots.svg"
                                    loading="lazy" data-w-id="b400764b-dabf-86e4-3fff-3633a4ed2f2c" alt=""
                                    className="processes__bg mod--1"
                                    style={{ transform: 'translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform' }} />
                            </div>
                            <div className="processes__bg-wrap mod--2"><img
                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033f48e5e03f4_processes_illustr.svg"
                                    loading="lazy" data-w-id="f04d259c-26c6-823d-48ac-f0cbdf030af0" alt=""
                                    className="processes__bg mod--2"
                                    style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Benefits" className="section mod--work">
                <div data-w-id="23aa82da-d192-8dd9-fd6c-34b1289acbf1" className="content"
                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <h2 className="heading--center">Work even more <br />efficiently with Gig Share</h2>
                    <div data-swiper="work"
                        className="swiper mod--work swiper-initialized swiper-horizontal swiper-pointer-events">
                        <div className="swiper-wrapper" id="swiper-wrapper-395559f03d2195db" aria-live="polite"
                            style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                            <div data-w-id="f29f62bd-d2b8-d92f-ba3b-fec3f8494fcb"
                                className="swiper-slide mod--work swiper-slide-active"
                                style={{ opacity: 1, width: '386.667px', marginRight: '40px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                                role="group" aria-label="1 / 3">
                                <div className="work__card">
                                    <div className="work__ico-wrap">
                                        <div className="work__ico-anim"><img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033042e5e03f5_work_ico-01.svg"
                                                loading="lazy" alt="" className="work__ico" /><img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033042e5e03f5_work_ico-01.svg"
                                                loading="eager" alt="" className="work__ico mod--over" /></div>
                                    </div>
                                    <h3 className="work__title">Fast switching<br />between different tools</h3>
                                    <p className="work__p">You can download documents in different file formats, import files to
                                        Evernote</p>
                                </div>
                            </div>
                            <div data-w-id="b4d1f57e-f6da-36d3-f9fc-34dd29e90da3"
                                className="swiper-slide mod--work swiper-slide-next"
                                style={{ opacity: 1, width: '386.667px', marginRight: '40px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                                role="group" aria-label="2 / 3">
                                <div className="work__card">
                                    <div className="work__ico-wrap">
                                        <div className="work__ico-anim"><img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30337bdf5e03f6_work_ico-02.svg"
                                                loading="lazy" alt="" className="work__ico" /><img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30337bdf5e03f6_work_ico-02.svg"
                                                loading="eager" alt="" className="work__ico mod--over" /></div>
                                    </div>
                                    <h3 className="work__title">Sending<br />large files safely</h3>
                                    <p className="work__p">Application lets users preview PDF documents on a range of devices
                                        and supports password protection</p>
                                </div>
                            </div>
                            <div data-w-id="7cbf0612-69fa-d5d9-0be0-c9398f6d2040" className="swiper-slide mod--work"
                                style={{ opacity: 1, width: '386.667px', marginRight: '40px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                                role="group" aria-label="3 / 3">
                                <div className="work__card">
                                    <div className="work__ico-wrap">
                                        <div className="work__ico-anim"><img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30339c9c5e03fa_work_ico-03.svg"
                                                loading="lazy" alt="" className="work__ico" /><img
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30339c9c5e03fa_work_ico-03.svg"
                                                loading="eager" alt="" className="work__ico mod--over" /></div>
                                    </div>
                                    <h3 className="work__title">Make materials<br />available to loved ones</h3>
                                    <p className="work__p">The app has improved support for popular PDF extensions such
                                        as<br />Fill and Sign</p>
                                </div>
                            </div>
                        </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </section>
            <section id="Personal" data-w-id="ef24d293-9726-646e-03fa-a7f9a6640997" className="section mod--business">
                <div className="content">
                    <div className="business__columns">
                        <div data-w-id="749bb4b0-9493-3a9a-c11a-8d461eb67f80" className="business__col mod--1"
                            style={{ opacity: 1 }}>
                            <div data-w-id="bad80ba7-9c77-b035-8ffc-c42cdbe6f9c4" className="stat-block"
                                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                <div className="stat__txt-wrap">
                                    <h3 className="stat__heading">Period statistics</h3>
                                    <div className="stat__month">January</div>
                                </div><img
                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bc605e03fc_statistics_person.png"
                                    loading="eager" width="321"
                                    sizes="(max-width: 479px) 200px, (max-width: 767px) 250px, 321px"
                                    srcSet="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bc605e03fc_statistics_person-p-500.png 500w, https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bc605e03fc_statistics_person.png 642w"
                                    alt="" className="stat__person" />
                                <div className="stat__lines"><img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30336fc75e03f2_statistics_line-03.svg"
                                        loading="lazy" alt="" className="stat__line mod--1" style={{ width: '24px' }} /><img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033bb395e03f9_statistics_line-02.svg"
                                        loading="lazy" alt="" className="stat__line mod--2" style={{ width: '24px' }}/><img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033128f5e03f1_statistics_line-01.svg"
                                        loading="lazy" alt="" className="stat__line mod--3" style={{ width: '24px' }} /></div>
                                <div data-w-id="448c7fd1-04e2-fea8-85fa-06a71619b7ca" className="stat__bg-lines"
                                    style={{ height: '340px' }}></div>
                            </div>
                            <div className="business__bg-wrap mod--1"><img
                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303315ee5e03ee_hero_illustr-04.svg"
                                    loading="lazy" data-w-id="a67e088f-969e-d95b-f948-5f710f5c3387" alt=""
                                    className="business__bg mod--1"
                                    style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} />
                            </div>
                            <div className="business__bg-wrap mod--2"><img
                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033d34d5e03fb_dots.svg"
                                    loading="lazy" data-w-id="66d1c19b-e430-6854-d316-6ce9eb1f00c7" alt=""
                                    className="business__bg mod--2"
                                    style={{ transform: 'translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform' }} />
                            </div>
                        </div>
                        <div data-w-id="30db3e29-c2b2-c439-f83e-738f727d6c7e" className="business__col mod--2"
                            style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }}>
                            <h2>Run your business <br />in Gig Share</h2>
                            <p className="business__p">In Gig Share, you can work directly with the leading communication
                                platforms - Slack and Zoom. Now you can have a brief meeting with your colleagues or even a
                                video conference with just a couple of mouse clicks.</p>
                            <div className="business__buttons"><a data-anim="start" href="/"
                                    className="btn btn--business w-inline-block">
                                    <div className="btn__txt-wrap">
                                        <div className="btn__txt-anim">
                                            <div className="btn__txt">Get started</div>
                                            <div className="btn__txt mod--over">Get started</div>
                                        </div>
                                    </div>
                                </a><a href="/" className="btn-link mod--business">Learn more</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="About" data-w-id="5a902773-1dd3-2c0e-6f8b-6e47cae613d7" className="footer">
                <div data-w-id="682e79bb-f4d4-aca3-65b1-e2dce7b2d527" className="content" style={{ opacity: 1 }}>
                    <div data-w-id="611e80fe-41d5-4cae-c50f-d3d115a1656e" className="footer__offer"
                        style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <h2 className="footer__offer-heading">Get started with our app?</h2>
                        <div data-style="dash2" className="footer__offer-btn-wrap"><a href="/"
                                className="btn mod--offer w-inline-block">
                                <div className="btn-offer__arrow-wrap"><img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303330ff5e03f3_ico_arrow.svg"
                                        loading="eager" width="16" alt="" className="btn-offer__arrow" /><img
                                        src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303330ff5e03f3_ico_arrow.svg"
                                        loading="eager" width="16" alt="" className="btn-offer__arrow mod--over" /></div>
                            </a></div>
                    </div>
                    <div data-w-id="7e9e6881-6e97-16bf-f176-6472c127fab0" className="footer__columns mod--top"
                        style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <div className="footer__col mod--1">
                            <div data-hover="false" data-delay="0" className="footer__drop w-dropdown">
                                <div className="footer__drop-btn w-dropdown-toggle" id="w-dropdown-toggle-0"
                                    aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false"
                                    role="button" tabIndex={0}>
                                    <div className="footer__drop-arrow"></div>
                                    <div className="footer__title">About us</div>
                                </div>
                                <nav className="footer__drop-list w-dropdown-list" id="w-dropdown-list-0"
                                    aria-labelledby="w-dropdown-toggle-0">
                                    <p className="footer__p">A smart workspace is a digital environment that brings together all
                                        the content of workgroup members with their favorite tools.</p>
                                </nav>
                            </div>
                        </div>
                        <div className="footer__col mod--2">
                            <div data-hover="false" data-delay="0" className="footer__drop w-dropdown">
                                <div className="footer__drop-btn w-dropdown-toggle" id="w-dropdown-toggle-1"
                                    aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false"
                                    role="button" tabIndex={0}>
                                    <div className="footer__drop-arrow"></div>
                                    <div className="footer__title">Sitemap</div>
                                </div>
                                <nav className="footer__drop-list w-dropdown-list" id="w-dropdown-list-1"
                                    aria-labelledby="w-dropdown-toggle-1">
                                    <ul className="footer__list">
                                        <li className="footer__list-item"><a href="#Big-transfers" data-anim="link"
                                                className="footer__nav-link w-inline-block w--current" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Big transfers</div>
                                                    <div className="nav-txt">Big transfers</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a href="#Processes" data-anim="link"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Processes</div>
                                                    <div className="nav-txt">Processes</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a href="#Benefits" data-anim="link"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Benefits</div>
                                                    <div className="nav-txt">Benefits</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a href="#Personal" data-anim="link"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Personal</div>
                                                    <div className="nav-txt">Personal</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a href="#About" data-anim="link"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">About</div>
                                                    <div className="nav-txt">About</div>
                                                </div>
                                            </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer__col mod--3">
                            <div data-hover="false" data-delay="0" className="footer__drop w-dropdown">
                                <div className="footer__drop-btn w-dropdown-toggle" id="w-dropdown-toggle-2"
                                    aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false"
                                    role="button" tabIndex={0}>
                                    <div className="footer__drop-arrow"></div>
                                    <div className="footer__title">Community</div>
                                </div>
                                <nav className="footer__drop-list w-dropdown-list" id="w-dropdown-list-2"
                                    aria-labelledby="w-dropdown-toggle-2">
                                    <ul className="footer__list">
                                        <li className="footer__list-item"><a data-anim="link"
                                                href="https://www.facebook.com/halolabteam/" target="_blank" rel="noreferrer"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Facebook</div>
                                                    <div className="nav-txt">Facebook</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a data-anim="link"
                                                href="https://www.instagram.com/halolabteam/" target="_blank" rel="noreferrer"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Instagram</div>
                                                    <div className="nav-txt">Instagram</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a data-anim="link"
                                                href="https://www.linkedin.com/company/halolabteam/" target="_blank" rel="noreferrer"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Linked In</div>
                                                    <div className="nav-txt">Linked In</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a data-anim="link"
                                                href="https://www.behance.net/halolab" target="_blank" rel="noreferrer"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Behance</div>
                                                    <div className="nav-txt">Behance</div>
                                                </div>
                                            </a></li>
                                        <li className="footer__list-item"><a data-anim="link"
                                                href="https://dribbble.com/halolab" target="_blank" rel="noreferrer"
                                                className="footer__nav-link w-inline-block" tabIndex={0}>
                                                <div className="nav-txt-anim">
                                                    <div className="nav-txt mod--over">Dribbble</div>
                                                    <div className="nav-txt">Dribbble</div>
                                                </div>
                                            </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="6fa7cd3d-1174-5ce2-c66f-feac5359db31" className="footer__columns mod--bottom"
                        style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <div className="footer__col mod--1 mod--bottom"><a href="https://www.halo-lab.com/" target="_blank" rel="noreferrer"
                                className="footer__copyright w-inline-block"><img
                                    src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303317825e041c_logo-copyright.svg"
                                    loading="eager" alt="" className="footer__copyright-logo" />
                                <div>2021 Halo Lab. All&nbsp;rights reserved</div>
                            </a></div>
                        <div className="footer__col mod--3 mod--bottom">
                            <div data-hover="false" data-delay="0" data-w-id="d72c125b-9204-994f-ddc2-45742146f539"
                                className="droplang w-dropdown">
                                <div className="droplang__btn w-dropdown-toggle" id="w-dropdown-toggle-3"
                                    aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false"
                                    role="button" tabIndex={0} style={{ opacity: 0.7 }}>
                                    <div className="droplang__arrow"
                                        style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    </div>
                                    <div>English</div>
                                </div>
                                <nav className="droplang__list w-dropdown-list" id="w-dropdown-list-3"
                                    aria-labelledby="w-dropdown-toggle-3"><a href="/" aria-current="page"
                                        className="droplang__list-link w-dropdown-link w--current" tabIndex={0}>English</a><a
                                        href="/" className="droplang__list-link w-dropdown-link" tabIndex={0}>Français</a><a
                                        href="/" className="droplang__list-link w-dropdown-link" tabIndex={0}>Russian</a></nav>
                            </div>
                        </div>
                        <div className="footer__line" style={{ height: '1px' }}></div>
                    </div>
                </div>
                <div className="bg mod--footer">
                    <div data-w-id="8d4f32de-0889-8a62-2cd8-38dabae4cdd8" className="bg__grey" style={{ width: '1384px' }}></div>
                    <div className="bg__img-wrap mod--5"
                        style={{ willChange: 'transform', transform: 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303327425e03e8_footer_illustr-01.svg"
                            loading="eager" data-w-id="95780d0c-c0ed-89df-fca2-82a29ec1fb46" alt="" className="bg__img mod--5"
                            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} />
                    </div>
                    <div className="bg__img-wrap mod--6"
                        style={{ willChange: 'transform', transform: 'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303368525e03ea_footer_illustr-03.svg"
                            loading="eager" data-w-id="95780d0c-c0ed-89df-fca2-82a29ec1fb47" alt="" className="bg__img mod--6"
                            style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} />
                    </div>
                </div>
                <div className="bg__img-wrap mod--7"
                    style={{ willChange: 'transform', transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033b2c75e03ec_footer_illustr-02.svg"
                        loading="eager" data-w-id="95780d0c-c0ed-89df-fca2-82a29ec1fb48" alt="" className="bg__img mod--7"
                        style={{ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }} />
                </div>
            </footer>
        </main>
        </>
    )
}
