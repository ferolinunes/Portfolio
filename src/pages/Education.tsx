import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="home-container">
    <div className="education-container">
      <div className="education-header">
        <h2>EDUCATION</h2>
      </div>

      <div className="education-cards">
        <div className="education-card">
          <p>Basic Education, High School - SESI Sorocaba</p>
          <p>2013-2018; 2019-2022; 2023-2025</p>
          <img src="https://logodownload.org/wp-content/uploads/2016/10/sesi-logo.png" alt="logo sesi" />
        </div>

        <div className="education-card">
          <p>Systems Development - SENAI Sorocaba</p>
          <p>2024-2025</p>
          <img src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" alt="logo senai" />
        </div>
      </div>
    </div>
    </section>
  );
}
