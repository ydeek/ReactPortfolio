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
                            <h1 className="display-3">Full Stack Developer</h1>
                            <p className="lead">Checkout my work in web develpment</p>

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
                            <p> My name is Yazan Deek, a Full Stack Developer and a current student at Penn LPS Coding Bootcamp. I am qulified
                            to build web applications using HTML, CSS, Bootstrap, Javascript, jQuery, AJAX, and API's. These skills are
        proven through my assignments and projects. They can be seen in my portfolio page. </p>

                            <p>I am pursuing a career change in web development. I am interested in building web and mobile application in a
                            unique and creative way. I joined this program because it gives me the
                            opportunity to improve my skills in many areas such as critical thinking, problem solving, and work in fast pace environments.</p>
                            <p>I speak three languages English, Arabic, and Spanish. My hobbies are cooking, reading, traveling, volleyball,
        and learning new languages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;