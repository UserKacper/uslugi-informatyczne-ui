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
  
    const links = [
      [
        { label: "Company", key: "header-1" },
        { label: "About us", key: "item-1-1" },
        { label: "Blog", key: "item-1-2" },
        { label: "Contact us", key: "item-1-3" },
        { label: "Pricing", key: "item-1-4" },
        { label: "Testimonials", key: "item-1-5" },
      ],
      [
        { label: "Support", key: "header-2" },
        { label: "Help center", key: "item-2-1" },
        { label: "Terms of service", key: "item-2-2" },
        { label: "Legal", key: "item-2-3" },
        { label: "Privacy policy", key: "item-2-4" },
        { label: "Status", key: "item-2-5" },
      ],
    ];
  
    return (
      <div className="app min-h-screen flex items-end justify-center font-poppins">
        <div className="py-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-[#AD93FF] text-white w-full p-4 relative">
          <div className="  ">
            <div className="footer-img flex items-center">
              <img
                src={"https://i.imgur.com/520zDfd.png"}
                alt=""
                className="w-16 h-auto"
              />
              <span className="text-3xl font-bold pl-2 text-black">
                Your Logo
              </span>
            </div>
            <div className="infos text-black py-5">
              <span>Copyright © 2020 Your Company ltd.</span>
              <span> <br />All rights reserved</span>
            </div>
            <div className="footer-icons flex items-center space-x-3">
              {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                return (
                  <Icon
                    key={`social-${index}`}
                    className="w-14 h-14 p-2 rounded-full bg-[#FFFFFF] text-black hover:bg-white hover:text-[#AD93FF] cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
            {links.map((col, index) => {
              return (
                <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                  {col.map((link, index) => {
                    return (
                      <li
                        key={`link-${col}-${index}`}
                        className={`text-black cursor-pointer hover:text-white${
                          link.key === "header-1" || link.key === "header-2"
                            ? "text-2xl text-white"
                            : ""
                        }`}
                      >
                        {link.label}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className="footer-form flex flex-col text-black ">
            <label className="text-lg font-semibold text-black outline-none ring-0">
              Stay up to date
            </label>
            <input
              type="email"
              placeholder="Zapisz sie do newslettera!"
              className="mt-2 w-full border-none rounded-lg py-3 px-6 text-black"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;