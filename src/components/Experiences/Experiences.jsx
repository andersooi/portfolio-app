import React from "react";
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";
// import './Experiences.css';

const experiences = [
  {
    date: "Nov 2023 - Present",
    title: "GitHub",
    role: "Open Source Contributor",
    description: [
      "Enhanced Codecademy's technical documentation by developing clear and efficient coding concepts and term entries, viewed by 6.7 million site visitors",
    ],
    technologies: ["Git", "Dart", "Java", "JavaScript", "Kotlin", "PHP"],
  },
  {
    date: "May 2023 - Aug 2023",
    title: "Skilio",
    role: "Summer Associate",
    description: [
      "Increased data collection by 95% by developing an automated web scraping system with Python and deploying it as a Firebase function",
      "Designed user-friendly landing page for Skilio's Industry Immersion Programme using Figma and deployed using Elementor",
    ],
    technologies: ["Python", "BeautifulSoup", "Figma"],
  },
  {
    date: "Jan 2022 - Apr 2022",
    title: "National Youth Council",
    role: "Strategic Planning Intern",
    description: [
      "Streamlined department’s decision-making process through data cleaning and visualisation techniques using Microsoft Excel & Tableau",
    ],
    technologies: ["Tableau", "Microsoft Excel"],
  },
];


const Experiences = () => {
    return (
        <section className="section ">
            <h2 className="section__title font-bold">Experiences</h2>
            <div>
                {experiences.map((experience) => (
                    <ExperienceContainer
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experiences;
