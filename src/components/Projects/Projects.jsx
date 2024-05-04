import ProjectContainer from "../ProjectContainer/ProjectContainer";
import './Projects.css';

const projects = [
    {
        title: "Twenify",
        description: "All-in-one productivity suite for students with a built in pomodoro timer, integrated Google Calendar and embedded Spotify web player.",
        technologies: ["Vue", "TailwindCSS", "Interact.js", "Express.js", "Node.js", "Firebase", "GoogleAPIs"],
        sourceCode: "https://github.com/andersooi/twenify",
        livePreview: "https://twenity.vercel.app/"
    },
    {
        title: "Housing Price Forecasting",
        description: "Developed 5 different models to forecast resale flat prices in Singapore, with the best model achieving a 95% R2 on unseen data. ",
        technologies: ["Python", "XGBoost", "CatBoost", "Random Forests", "LSTM", "GNNWR"],
        sourceCode: "https://github.com/andersooi/Housing-Price-Time-Series-Forecasting",
        livePreview: "https://github.com/andersooi/Housing-Price-Time-Series-Forecasting"
    },
    {
        title: "MERN Stack Bookstore",
        description: "Simulated bookstore that implements CRUD applications. It was through building this web application that I learned more about fullstack development.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Postman"],
        sourceCode: "https://github.com/andersooi/bookstore",
        livePreview: "https://github.com/andersooi/bookstore"
    },
    {
        title: "Life Expectancy Prediction",
        description: "Explored the impact of non-demographic variables such as immunisation, economic factors on life expectancies by training a Neural Network model.",
        technologies: ["Python", "Tensorflow", "Pandas"],
        sourceCode: "https://github.com/andersooi/Life-Expectancy-Prediction-",
        livePreview: "https://github.com/andersooi/Life-Expectancy-Prediction-"
    },
    {
        title: "NinjaLens",
        description: "Implemented a model that utilises OpenCV’s computer vision library to estimate the dimensions of a parcel based on an image and improve sizing inputs accuracy for e-commerce sellers.",
        technologies: ["OpenCV", "Streamlit"],
        sourceCode: "https://github.com/mcbebu/LogistiPals",
        livePreview: "https://marcussyeo-logistipals-main-vy9cvn.streamlit.app/"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section__title font-bold">Projects</h2>
            <div className="project__grid grid gap-8 my-0 mx-auto">
                {projects.map((project, index) => (
                    <ProjectContainer
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;