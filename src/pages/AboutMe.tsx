import "./AboutMe.css";
import aboutMe from '../assets/images/aboutMe.jpeg';

export default function AboutMe() {
  return (
    <section id="about" className="home-container">
    <div className="about-container">
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <p>I'm 17 years old, finishing the school and my course about Programming.</p>
        <p>The part of Programming that I like the most it's front-end, for me it's easier to deal and see the results.</p>
        <p>In school, I have more facility with Math and things relationed with it. </p>
        <p>I do voluntary Bible Courses's work.</p>
        <p>I love to be with my family and my friends and laugh with them, one of my biggest goods.</p>
      </div>

      <div className="about-images">
      <img src={aboutMe} alt="Imagem 1" />
      <img src="https://www.univates.br/blog//wp-content/uploads/2024/07/Imagens-posts-blog-47-1920x1280.jpg" alt="Imagem 2" />
        
      </div>
    </div>
    </section>
  );
}
