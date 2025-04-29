import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>Todos os Direitos Reservados &copy; {new Date().getFullYear()} - Fernanda de Oliveira Nunes</p>
      </div>
    </footer>
  );
};

export default Footer;