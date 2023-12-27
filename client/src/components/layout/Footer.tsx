import Logo from "@/components/common/Logo";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-32">
      <a href="/" className="rounded text-orange hover:text-orange-dark">
        <Logo />
      </a>
    </footer>
  );
};

export default Footer;
