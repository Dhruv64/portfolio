import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    // { name: "Facebook", link: "https://www.facebook.com/shahina.khatun.1044", icon: <Facebook /> },
    // { name: "Twitter", link: "https://twitter.com/Taquiimam14", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/ddhruv64/", icon: <Linkedin /> },
    { name: "Github", link: "https://github.com/Dhruv64", icon: <Github /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
