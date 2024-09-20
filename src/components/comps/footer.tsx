import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const socialLinks = [
    { label: "Github", icon: GitHubLogoIcon },
    { label: "Instagram", icon: InstagramLogoIcon },
    { label: "Discord", icon: DiscordLogoIcon },
    { label: "Linkedin", icon: LinkedInLogoIcon },
  ];


  return (
    <div className="w-full h-[250px] bg-gradient-to-r from-[#CFC0FF] via-[#AD93FF] to-[#CFC0FF] shadow-xl">
      <div>
        {socialLinks.map((e) => (<div className="">
          <e.icon/>
        </div>))}
      </div>
    </div>
  );
};

export default Footer;