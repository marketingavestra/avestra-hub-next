import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <p className={styles.logo}>AVESTRA</p>
          <p className={styles.tagline}>
            Ferramentas de IA para o mercado jurídico brasileiro.
            <br />
            Curadoria por Dr. Wladmir Bonadio &middot; OAB/SP 398.640
          </p>
        </div>

        <nav className={styles.nav}>
          <p className={styles.navTitle}>Navegação</p>
          <a href="#diretorio">Diretório de IAs</a>
          <a href="#skills">Skills Sob Medida</a>
          <a href="#ofertas">Marketplace</a>
          <a
            href="https://wa.me/5511965817604"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </nav>

        <div className={styles.contact}>
          <p className={styles.navTitle}>Contato</p>
          <p className={styles.contactLine}>WhatsApp</p>
          <a
            href="https://wa.me/5511965817604"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            +55 (11) 96581-7604
          </a>
          <p className={styles.contactLine} style={{ marginTop: '1rem' }}>Instagram</p>
          <a
            href="https://instagram.com/wbonadiofilho"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            @wbonadiofilho
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; 2026 Avestra Tecnologia. Todos os direitos reservados.
        </p>
        <p className={styles.update}>Atualizado Maio/2026</p>
      </div>
    </footer>
  )
}
