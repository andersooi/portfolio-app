import React from "react";
import "./ExperienceContainer.css";

const ExperienceContainer = ({ experience }) => (
    <div className="flex mb-8 flex-col md:flex-row">
        <div className="w-full md:w-2/12">{experience.date}</div>
        <div className="w-full md:w-10/12">
            <p className="font-semibold">{experience.title}</p>
            <p className="font-semibold">{experience.role}</p>
            <p className="list-inside">{experience.description.map((point, index) => (
                <li className="ml-0.5" key={index}>{point}</li>
            ))}</p>
            <div className="flex flex-wrap gap-1 mt-2">
                {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="technology px-2 rounded-md text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ExperienceContainer;
