import React from 'react';
import styles from './Services.css'

function Services(props) {
    return (<>
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" width="219" height="10" viewBox="0 0 219 10" fill="none">
                <line x1="-8.74228e-08" y1="5" x2="211" y2="4.99998" stroke="#D6D6D6" stroke-width="2"/>
                <circle cx="214" cy="5" r="4" transform="rotate(-90 214 5)" stroke="#D6D6D6" stroke-width="2"/>
                <line x1="1" y1="9" x2="1" y2="1" stroke="#D6D6D6" stroke-width="2"/>
            </svg>
            <div id="header_div">Services&nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M11.5 8.5L19 1M14 1H19V6M19 12V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8"
                        stroke="#8F8CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </header>

        <section>

            <div id="services_container">
                <div id="line1"></div>
                <img src="./Group 36.svg" id="brain" alt=""/>
                <div id="line2"></div>
                <img src="./Group 35.svg" id="ruler" alt=""/>
                <div id="line3"></div>
                <img src="./Group 34.svg" id="cube" alt=""/>
                <div id="line4"></div>
                <img src="./Group 33.svg" id="laptop" alt=""/>
                <div id="line5"></div>
                <img src="./Group 32.svg" id="target" alt=""/>
                <div id="line6"></div>
                <img src="./Group 31.svg" id="arrow" alt=""/>
                <div id="line7"></div>

                <div id="left">
                    <div className="cube" style={{color: "#C1D7EC"}}><h3 style={{color: "white"}}><span
                        style={{color: "rgba(104, 180, 255, 0.75)"}}>02. </span>Wireframing</h3>
                        Our experienced UI/UX designers will create wireframes to visualize the client’s concept and
                        ideas that clearly define the user journey
                    </div>
                    <div className="cube" style={{color: "#C1D7EC"}}><h3 style={{color: "white"}}><span
                        style={{color: "rgba(104, 180, 255, 0.75)"}}>04. </span>Design & code</h3>
                        Our experienced UI/UX designers will create wireframes to visualize the client’s concept and
                        ideas that clearly define the user journey
                    </div>
                    <div className="cube" style={{color: "#C1D7EC"}}><h3 style={{color: "white"}}><span
                        style={{color: "rgba(104, 180, 255, 0.75)"}}>06. </span>Deployment</h3>
                        Once the app fulfills our client’s requirements and expectations, we deploy the app according to
                        the launch plan.
                    </div>


                </div>
                <div id="right">
                    <div className="cube" style={{color: "#C1D7EC"}}><h3 style={{color: "white"}}><span
                        style={{color: "rgba(104, 180, 255, 0.75)"}}>01. </span>Analysis</h3>
                        Our experienced UI/UX designers will create wireframes to visualize the client’s concept and
                        ideas that clearly define the user journey
                    </div>
                    <div className="cube" style={{color: "#C1D7EC"}}><h3 style={{color: "white"}}><span
                        style={{color: "rgba(104, 180, 255, 0.75)"}}>03. </span>Prototyping</h3>
                        Our experienced UI/UX designers will create wireframes to visualize the client’s concept and
                        ideas that clearly define the user journey
                    </div>
                    <div className="cube" style={{color: "#C1D7EC"}}><h3 style={{color: "white"}}><span
                        style={{color: "rgba(104, 180, 255, 0.75)"}}>05. </span>Testing & QA</h3>
                        We rigorously test the performance app performance to Industry standards to evaluate its
                        scalability, responsiveness, and stability.
                    </div>

                </div>


            </div>
        </section>


    </>);
}

export default Services;