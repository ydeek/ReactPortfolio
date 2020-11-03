import React from 'react';
import { About, Container } from 'reactstrap';
import image from "../images/about-me-photo.jpg";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/linkedin.png";

const MainSection = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <About fluid>
                        <Container fluid>
                            <h1 className="display-3">From Full English to Full Stack</h1>
                            <p className="lead">My personal journey from chef to coder.</p>

                            <a className="logo" href="https://github.com/seanbelverstone">
                                <img src={githubLogo} alt="GitHub logo" id="github" />
                            </a>
                            <a className="logo" href="https://www.linkedin.com/in/sean-belverstone/">
                                <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                            </a>
                            <a className="logo" href="https://drive.google.com/file/d/1fXTNVPvD0wRBIUyHc-Y8QWaxbEOjTLP0/view?usp=sharing" id="cv">
                                CV
                    </a>
                        </Container>
                    </About>
                </div>
            </div>
            <div className="row">
                <div id="aboutMeSection">
                    <div className="col-lg-3 col-12">
                        <img src={image} alt="Sean Belverstone" id="myPhoto" />
                    </div>
                    <div className="col-12">
                        <div id="aboutMeText">
                            <p>write aobut me </p>
                            <p>more about me</p>
                            <p>more more about me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;