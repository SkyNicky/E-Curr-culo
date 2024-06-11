import styles from './comments.module.css';
import logo from '../assets/img/images.png'
export function Comments() {
  return (
    <div className={styles.comments}>
      <div className={styles.commentsRow}>
        <img src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png" alt="Portfolio Book" />
        <div className={styles.commentsContent}>
          <header>
            <div>
              <strong>1° Experiência</strong>
            </div>
          </header>
          <div className={styles.commentsContainer}>
            <div>
              <p>Aprendizagem de Instalações Elétricas Industriais</p>
            </div>
            <div className={styles.logo}>
              <img src={logo}/>
            </div>
          </div>
          </div>
      </div>

      <div className={styles.commentsRow}>
        <img src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png" alt="Portfolio Book" />
        <div className={styles.commentsContent}>
          <header>
            <div>
              <strong>2° Experiência </strong>
            </div>
          </header>
          <div className={styles.commentsContainer}>
            <div>
              <p>Aprendizagem de Instalações Elétricas Industriais</p>
            </div>
            <div className={styles.logo}>
              <img src={logo}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
