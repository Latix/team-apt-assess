import React from 'react';

export default function Personal() {
  return (
      <>
        <section id="Personal" data-w-id="ef24d293-9726-646e-03fa-a7f9a6640997" className="section mod--business">
            <div className="content">
                <div className="business__columns">
                    <div className="business__col mod--1"
                        style={{ opacity: 1 }}>
                        <div className="stat-block">
                            <div className="stat__txt-wrap">
                                <h3 className="stat__heading">Period statistics</h3>
                                <div className="stat__month">January</div>
                            </div>
                            <img
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
                            <div className="stat__bg-lines" style={{ height: '340px' }}></div>
                        </div>
                        <div className="business__bg-wrap mod--1">
                            <img
                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf303315ee5e03ee_hero_illustr-04.svg"
                                loading="lazy"  alt=""
                                className="business__bg mod--1" />
                        </div>
                        <div className="business__bg-wrap mod--2"><img
                                src="https://uploads-ssl.webflow.com/61e04ec7cf303307d55e03ce/61e04ec7cf3033d34d5e03fb_dots.svg"
                                loading="lazy" alt=""
                                className="business__bg mod--2" />
                        </div>
                    </div>
                    <div className="business__col mod--2"
                        style={{ opacity: 1 }}>
                        <h2>Run your business <br />in Gig Share</h2>
                        <p className="business__p">In Gig Share, you can work directly with the leading communication
                            platforms - Slack and Zoom. Now you can have a brief meeting with your colleagues or even a
                            video conference with just a couple of mouse clicks.</p>
                        <div className="business__buttons">
                            <a data-anim="start" href="/"
                                className="btn btn--business w-inline-block">
                                <div className="btn__txt-wrap">
                                    <div className="btn__txt-anim">
                                        <div className="btn__txt">Get started</div>
                                        <div className="btn__txt mod--over">Get started</div>
                                    </div>
                                </div>
                            </a>
                            <a href="/" className="btn-link mod--business">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
}
