import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import image from "../images/yazan.jpg";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/linkedin.png";

const MainSection = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">From Full English to Full Stack</h1>
                            <p className="lead">My personal journey from chef to coder.</p>

                            <a className="logo" href="https://github.com/ydeek91">
                                <img src={githubLogo} alt="GitHub logo" id="github" />
                            </a>
                            <a className="logo" href="https://www.linkedin.com/in/yazan-deek-408332aa/">
                                <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                            </a>
                            <a className="logo" href="yazanresume.pdf" id="cv">
                                CV
                    </a>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
            <div className="row">
                <div id="aboutMeSection">
                    <div className="col-lg-3 col-12">
                        <img src={image} alt="Yazan Deek" id="myPhoto" />
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