import Typewriter from "typewriter-effect";
import "./About.css";

const About = () => {
    return (
        <div className="flex-col mt-32 center">
            <h1 className="font-bold">
                Hi {" "}
                <span role="img" className="wave" aria-label="wave emoji">
                    👋
                </span>{" "}
                ,
            </h1>
            <h1 className="font-bold text-center">
                I am <span className="about__name">Anders Ooi</span>.
            </h1>
            <h2 className="mt-5 font-bold text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Software Developer",
                            "Data Analyst",
                            "Open Source Contributor",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </h2>
            <p className="mt-10 text-base text-center max-w-xl"> 
                I am an aspiring developer and analyst based in Singapore, with a passion for web development and 
                machine learning. I enjoy learning new things and working through challenging tasks to help me grow.
                In addition to coding, I enjoy building side projects based on my interests and contributing to open source projects.
            </p>
            <div className="center mt-10">
                <a href="https://drive.google.com/file/d/1Da7a-L2MZXkNDDUkQH5OO9kO1yxB7OGy/view?usp=sharing">
                    <span type="button" className="btn btn--outline">
                        Resume
                    </span>
                </a>
            </div>
        </div>
    );
};

export default About;
