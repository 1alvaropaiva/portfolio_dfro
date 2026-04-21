interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => (
  <footer className="bg-gradient-to-t from-primary to-secondary text-white text-center py-10 mt-16">
    <p className="font-medium">© {new Date().getFullYear()} {name}</p>
    <p className="text-xs mt-2 opacity-60">Desenvolvido com React & Tailwind CSS</p>
  </footer>
);

export default Footer;
