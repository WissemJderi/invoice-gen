import { links } from "./data/footerLinks";

const Footer = () => {
  const iconsStyle = "cursor-pointer";
  const linksList = links.map((link) => {
    return (
      <a
        href={link.href} // try it without
        target="_blank"
        rel="noopener noreferrer"
        className={iconsStyle}
        key={link.href}
      >
        {link.icon}
      </a>
    );
  });
  const currentYear = new Date().getFullYear();
  return (
    <div className="mx-3 my-10 sm:mx-90 sm:mt-20 border-t-2 border-black/40 p-2">
      <h2 className="font-light text-xl text-white text-center">
        InvoiceGen <span className="text-gray-400 text-sm">v1.0.0</span>
      </h2>
      <p className="text-gray-300 text-xs mx-5 my-2 text-center">
        Designed for freelancers and small businesses, this smart invoice system
        lets you create, personalize, and track invoices without the hassle.
        Spend less time on paperwork and more time on what you love.
      </p>
      <div className="flex flex-row text-xs justify-around text-gray-300 my-1">
        <p>© {currentYear} Wissem Jderi</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 mt-2 text-white">
        {linksList}
      </div>
    </div>
  );
};

export default Footer;
