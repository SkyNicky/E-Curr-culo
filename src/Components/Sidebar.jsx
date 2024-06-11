import styles from './sidebar.module.css';
import avatar from '../assets/img/Avatar.jpg'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem-Sidebar" />
      <div className={styles.profile}>
        <img className={styles.avatar} src={avatar} alt="imagem-Avatar" />
        <strong>Nycholas Ferreira de Freitas Rocha</strong>
        <span>Desenvolvedor Web</span>
      </div>
      <footer className={styles.git}>
        <a href="https://github.com/SkyNicky" target='_blank'>@SkyNicky</a>
      </footer>
    </aside>
  );
}
