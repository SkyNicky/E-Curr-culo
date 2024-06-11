import { Comments } from './Comments';
import styles from './post.module.css';
import avatar from '../assets/img/Avatar.jpg'
export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}  >
                <img className={styles.avatar} src={avatar} alt="" />
            <div className={styles.authorInfo}>
                <strong >Nycholas Ferreira de Freitas Rocha</strong>
                <span>Desenvolvedor Full-Stack</span>
            </div>
            </div>
        </header>
        <div className={styles.content}>
            <p className={styles.title}>Sobre Mim</p>
            <p>Sou um profissional em desenvolvimento, buscando conhecimento em diversas áreas para descobrir minha verdadeira vocação enquanto desenvolvo projetos pessoais em busca de realizações e experiência.</p>

            <p><a target='_blank' href="https://github.com/SkyNicky?tab=repositories">Link Repositórios</a></p>
            <p><a target='_blank' href="https://github.com/SkyNicky/Creating">Último Projeto</a></p>
        
        </div>

        

        <form className={styles.commentsForm}>
            <strong>Expecializações Profissionais</strong>
        </form>
        <div>
            <Comments/>
        </div>

    </article>
  )
}