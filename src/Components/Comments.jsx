import styles from './comments.module.css';
import logo from '../assets/img/images.png';

export function Comments() {
  return (
    <div className={styles.comments}>
      {/* 1ª Experiência */}
      <div className={styles.commentsRow}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png"
          alt="Portfolio Book"
        />
        <div className={styles.commentsContent}>
          <header>
            <div>
              <strong>1° Experiência</strong>
            </div>
          </header>
          <div className={styles.commentsContainer}>
            <div>
              <p>Aprendizagem de Instalações Elétricas Industriais</p>
              <p>Conhecimentos adquiridos sobre a instalação, manutenção e reparo de sistemas elétricos industriais, incluindo o uso de equipamentos e ferramentas adequadas.</p>
            </div>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>

      {/* 2ª Experiência */}
      <div className={styles.commentsRow}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png"
          alt="Portfolio Book"
        />
        <div className={styles.commentsContent}>
          <header>
            <div>
              <strong>2° Experiência</strong>
            </div>
          </header>
          <div className={styles.commentsContainer}>
            <div>
              <p>Aprendizagem de Instalações Elétricas Industriais</p>
              <p>Estudo teórico e prático das impletmentações de sistemas elétricos e automação para fábricas e indústrias.</p>
            </div>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.commentsRow}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png"
          alt="Portfolio Book"
        />
        <div className={styles.commentsContent}>
          <header>
            <div>
              <strong>3° Experiência</strong>
            </div>
          </header>
          <div className={styles.commentsContainer}>
            <div>
              <p>Qualificação Profissional em Programador Full-Stack</p>
              <p>Desenvolvimento de aplicações web completas utilizando tecnologias como React, Node.js, Express e MongoDB, abrangendo tanto o front-end quanto o back-end.</p>
            </div>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
