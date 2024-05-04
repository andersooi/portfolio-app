import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const contactInfo = [
    {
        icon: <MailRoundedIcon className="bg-transparent"/>,
        url: "mailto:andersooi0307@gmail.com",
    },
    {
        icon: <GitHub className="bg-transparent"/>,
        url: "https://github.com/andersooi",
    },
    {
        icon: <LinkedIn className="bg-transparent"/>,
        url: "https://www.linkedin.com/in/andersooi/",
    },
]



const Footer = () => {
    return (
        <footer className="mt-32">
            <hr className="bg-slate-200 h-px" />
            <div className="flex justify-between mt-8 mb-4">
                <span className="text-sm link text-zinc-600">Developed by Anders Ooi</span>
                <div>
                    {contactInfo.map((contact) => (
                        <a
                            key={contact.url}
                            href={contact.url}
                            target="_blank"
                            className="m-2 link link--icon text-zinc-600"
                        >
                            {contact.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
