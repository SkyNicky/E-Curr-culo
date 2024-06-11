import styles from './comments.module.css';

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
          <p>Aprendizagem de Instalações Elétricas Prediais</p>
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
          <p>Aprendizagem de Instalações Elétricas Industriais</p>
        </div>
      </div>

    </div>
  );
}
