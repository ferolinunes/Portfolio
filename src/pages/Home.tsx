import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import avatar from '../assets/images/avatar.jpeg';

export default function Home() {
  return (
    <section id="home" className="home-container">
      <div className="container">

        <div className="sidebar">
          <h1 className="name">ferolinunes</h1>

          <div className="social-icons">
            <a href="https://br.linkedin.com/"><FaLinkedin /></a>
            <a href="https://github.com/ferolinunes"><FaGithub /></a>
          </div>
        </div>

        <div className="profile-picture">
          <img src={avatar} alt="Fernanda Nunes" />
        </div>

        <div className="content">
          <nav className="navigation">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
          </nav>

          <div className="main-content">
        <h2 className="title">Fernanda de Oliveira Nunes</h2>

        <div className="description">
          <p>I'm a Software Engineer trying to learn new things!</p>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}
