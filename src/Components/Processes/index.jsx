import React from 'react';

export default function Processes() {
    const [isGraphActive, setIsGraphActive] = React.useState(0);

  return (
      <>
        <section id="Processes" data-w-id="92175d8d-8658-4116-7922-2511d5d3b108" className="section mod--process">
            <div className="content">
                <div className="processes__columns">
                    <div className="processes__col mod--1" style={{ opacity: 1 }}>
                        <div className="processes__heading-wrap">
                            <h2 className="processes__heading">
                                Your best processes</h2>
                            <p className="processes__p">
                                It’s a smart workspace where teams, tools and content come workspace together.</p>
                        </div>
                        <div className="processes__line"
                            style={{ height: '1px' }}></div>
                        <div className="processes__logos">
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
                    <div className="processes__col mod--2"
                        style={{ opacity: 1 }}>
                        <div className="graph-block">
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
                        </div>
                        <div className="processes__bg-wrap mod--1">
                            <img
                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033d34d5e03fb_dots.svg"
                                loading="lazy" alt=""
                                className="processes__bg mod--1" />
                        </div>
                        <div className="processes__bg-wrap mod--2">
                            <img
                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033f48e5e03f4_processes_illustr.svg"
                                loading="lazy" alt=""
                                className="processes__bg mod--2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
}
