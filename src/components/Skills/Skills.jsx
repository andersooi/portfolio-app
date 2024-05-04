const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Node.js",
    "Express.js",
    "Java",
    "Python",
    "Tensorflow",
    "Sklearn",
    "Pandas",
    "TailwindCSS",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Google Cloud Platform",
    "Git",
    "Postman",
    "Figma",
    "SCRUM",
]

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section__title font-bold">Skills</h2>
            <div className="flex flex-wrap justify-center">
                {skills.map((skill) => (
                    <span key={skill} className="m-2 btn bg-white shadow-md hover:-translate-y-1">{skill}</span>
                ))}
            </div>
        </section>
    )
}

export default Skills;