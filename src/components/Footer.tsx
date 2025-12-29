import { Github, Linkedin, Twitter } from "lucide-react";
import VideoBackground from "./VideoBackground";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/gowthamv2004", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gowthamv142004", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="py-8 px-4 relative overflow-hidden border-t border-border">
      <VideoBackground />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            Gowtham V.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
