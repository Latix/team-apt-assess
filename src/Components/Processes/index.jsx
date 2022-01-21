import React from 'react';

export default function Processes() {
    const [isGraphActive, setIsGraphActive] = React.useState(0);

  return (
      <>
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
                                                id="w__graph-1"
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303365fe5e0412_graph_part-01.svg"
                                                loading="lazy" data-graph="part1" alt="" className="graph__part"
                                                onMouseOver={() => setIsGraphActive(1)}
                                                onMouseOut={() => setIsGraphActive(0)}
                                                    />
                                            <img
                                                id="w__graph-2"
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033fe7a5e0413_graph_part-03.svg"
                                                loading="lazy" data-graph="part2" alt="" className="graph__part"
                                                onMouseOver={() => setIsGraphActive(2)}
                                                onMouseOut={() => setIsGraphActive(0)} />
                                            <img
                                                id="w__graph-3"
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303332975e0411_graph_part-04.svg"
                                                loading="lazy" data-graph="part3" alt="" className="graph__part"
                                                onMouseOver={() => setIsGraphActive(3)}
                                                onMouseOut={() => setIsGraphActive(0)} />
                                            <img
                                                id="w__graph-4"
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303304115e0410_graph_part-02.svg"
                                                loading="lazy" data-graph="part4" alt="" className="graph__part"
                                                onMouseOver={() => setIsGraphActive(4)}
                                                onMouseOut={() => setIsGraphActive(0)}/>
                                            <img
                                                id="w__graph-5"
                                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf30335e2f5e0414_graph_part-05.svg"
                                                loading="lazy" data-graph="part5" alt="" className="graph__part"
                                                onMouseOver={() => setIsGraphActive(5)}
                                                onMouseOut={() => setIsGraphActive(0)} />
                                    </div>
                                </div>
                                <div className="graph__col mod--2">
                                <ul className="graph__list">
                                        <li id="graph__list-item-1" className="graph__list-item">
                                            <div className="graph__list-dot">
                                                <div data-graph="dot4" className={`graph__list-dot-border ${isGraphActive === 4 && 'active'}`}></div>
                                            </div>
                                            <div className="graph__list-txt">Engineering</div>
                                            <div className="graph__list-numb">23%</div>
                                        </li>
                                        <li id="graph__list-item-2" className="graph__list-item">
                                            <div className="graph__list-dot mod--2">
                                                <div data-graph="dot3" className={`graph__list-dot-border mod--2 ${isGraphActive === 3 && 'active'}`}></div>
                                            </div>
                                            <div className="graph__list-txt">Finance</div>
                                            <div className="graph__list-numb">17%</div>
                                        </li>
                                        <li id="graph__list-item-3" className="graph__list-item">
                                            <div className="graph__list-dot mod--3">
                                                <div data-graph="dot2" className={`graph__list-dot-border mod--3 ${isGraphActive === 2 && 'active'}`}></div>
                                            </div>
                                            <div className="graph__list-txt">Art</div>
                                            <div className="graph__list-numb">13%</div>
                                        </li>
                                        <li id="graph__list-item-4" className="graph__list-item">
                                            <div className="graph__list-dot mod--4">
                                                <div data-graph="dot1" className={`graph__list-dot-border mod--4 ${isGraphActive === 1 && 'active'}`}></div>
                                            </div>
                                            <div className="graph__list-txt">Social</div>
                                            <div className="graph__list-numb">12%</div>
                                        </li>
                                        <li id="graph__list-item-5" className="graph__list-item">
                                            <div className="graph__list-dot mod--5">
                                                <div data-graph="dot5" className={`graph__list-dot-border mod--5 ${isGraphActive === 5 && 'active'}`}></div>
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
      </>
  );
}
