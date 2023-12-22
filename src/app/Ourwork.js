import React from 'react';
import styles from "./Ourwork.css"

function Ourwork(props) {
    return (
        <div>
            <header>
                <h2>Our &apos work<img src="Vector.svg" alt=""/></h2>
                <img src="group 83.png" alt=""/>
                <p><b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra
                    magna
                    sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus.
                    Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna
                    sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus.
                    Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus
                    id. </p>
            </header>

            <main id="workMain">
                <p>Projects</p>
                <div id="projectsContainer">
                    <div class="project">
                        <div className="text">
                            <h3 style={{marginTop: "0"}}>WeBsite Name</h3>
                            <p>Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor,</p>
                            <img style={{marginTop: "20%"}} src="arrow.svg" alt=""/>
                        </div>
                        <img src="project_img1.png" alt=""/>
                    </div>
                    <div class="project">
                        <div className="text">
                            <h3 style={{marginTop: "0"}}>WeBsite Name</h3>
                            <p>Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor,</p>
                            <img style={{marginTop: "20%"}} src="arrow.svg" alt=""/>
                        </div>
                        <img src="project_img2.png" alt=""/>

                    </div>
                    <div style={{borderBottom: "2px solid  rgba(255, 255, 255, 0.20)"}} class="project">
                        <div className="text">
                            <h3 style={{marginTop: "0"}}>WeBsite Name</h3>
                            <p>Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor,</p>
                            <img style={{marginTop: "20%"}} src="arrow.svg" alt=""/>
                        </div>
                        <img src="project_img3.png" alt=""/>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Ourwork;