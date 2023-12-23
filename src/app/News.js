import React from 'react';
import styles from "./News.css"

function News(props) {
    return (
        <div>
            <header id="newsHeader">
                <img style={{marginRight: "1vw"}} src="./Group 83.svg" alt=""/>
                <h2>Read News about web</h2>
                <img style={{marginLeft: "1.5vw"}} src="./Vector.svg" alt=""/>
            </header>

            <main id="newsMain">
                <div className="news">
                    <div id="newsImg1">
                        <img src="unsplash_PhYq704ffdA.png" alt=""/>
                        <div id="overlay1"></div>
                    </div>
                    <div id="newsText1">
                        <h3>Lorem ipsum dolor amet</h3>
                        <p id="date1">11 November 2021</p>
                        <p id="newsDesc1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum
                            scelerisque viverra magna sollicitudin vestibulum. Augue augue elementum massa vestibulum,
                            vitae cras tempor, vulputate risus. Facilisis tristique lorem cras porttitor ultrices cursus
                            tristique. Ipsum lectus pretium rhoncus id.</p>

                        <div id="newsButton1">
                            <img src="Ellipse 41.svg" alt=""/>
                            <p>Read more</p>
                        </div>
                    </div>

                </div>
                <div className="news">
                    <div id="newsImg2">
                        <img src="unsplash_aJYO8JmVodY.png" alt=""/>
                        <div id="overlay2"></div>
                    </div>
                    <div id="newsText2">
                        <h3>Lorem ipsum dolor amet</h3>
                        <p id="date2">11 November 2021</p>
                        <p id="newsDesc2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum
                            scelerisque viverra magna sollicitudin vestibulum. Augue augue elementum massa vestibulum,
                            vitae cras tempor, vulputate risus. Facilisis tristique lorem cras porttitor ultrices cursus
                            tristique. Ipsum lectus pretium rhoncus id.</p>
                        <div id="newsButton2">
                            <p>Read more</p>
                            <img src="Ellipse 41.svg" alt=""/>
                        </div>

                    </div>
                </div>


            </main>

        </div>
    );
}

export default News;