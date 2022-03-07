import "./Footer.css";

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
