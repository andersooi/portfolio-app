import { GitHub, Mail } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const contactInfo = [
    {
        icon: <MailRoundedIcon className="bg-transparent"/>,
        url: "mailto:andersooi0307@gmail.com",
        label: "Email me",
    },
    {
        icon: <GitHub className="bg-transparent"/>,
        url: "https://github.com/andersooi",
        label: "Connect on GitHub",
    },
    {
        icon: <LinkedIn className="bg-transparent"/>,
        url: "https://www.linkedin.com/in/andersooi/",
        label: "Connect on LinkedIn",
    },
]

const Contact = () => {
    return (
        <section id="contact" className="section">
            <h2 className="section__title font-bold">Contact</h2>
            <div className="flex flex-wrap justify-center">
                {contactInfo.map((contact) => (
                    <a
                        key={contact.label}
                        href={contact.url}
                        aria-label={contact.label}
                        className="m-2 btn btn--outline hover:-translate-y-1"
                        target="_blank"
                    >
                        {contact.icon}{" "}{contact.label}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
