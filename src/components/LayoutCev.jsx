import { Link } from 'react-router-dom'
import logo from '../assets/shalom-logo.png'

function LayoutCev({
  nome,
  categoria = 'Centro de Evangelização',
  imagem,
  endereco,
  children,
}) {
  return (
    <div className="cev-page">

      <header className="cev-header">

        <Link to="/" className="cev-brand">
          <img src={logo} alt="Comunidade Católica Shalom" />
          <span>Shalom Rio</span>
        </Link>

        <nav className="cev-nav">

          <Link to="/eventos">
            Eventos
          </Link>

          <Link to="/onde">
            Grupos de oração
          </Link>

          <Link to="/sobre">
            Sobre nós
          </Link>

          <Link to="/noticias">
            Notícias
          </Link>

          <Link to="/contatos" className="cev-nav-button">
            Contato
          </Link>

        </nav>

      </header>


      <main>

        <section className="cev-hero">

          <div className="cev-hero-image">
            <img src={imagem} alt={nome} />
          </div>

          <div className="cev-hero-overlay" />

          <div className="cev-hero-content">

            <Link to="/onde" className="cev-back">
              ← Todos os locais
            </Link>

            <span className="cev-kicker">
              {categoria}
            </span>

            <h1>
              {nome}
            </h1>

            {endereco && (
              <p className="cev-address">
                {endereco}
              </p>
            )}

          </div>

        </section>


        <section className="cev-content">

          <div className="cev-content-grid">

            <div className="cev-main-content">
              {children}
            </div>


            <aside className="cev-sidebar">

              <div className="cev-sidebar-card">

                <span className="cev-sidebar-label">
                  VENHA NOS CONHECER
                </span>

                <h2>
                  Um lugar para rezar,
                  <em> conviver e servir.</em>
                </h2>

                <p>
                  Encontre uma comunidade perto de você
                  e venha viver uma experiência concreta
                  de fé, fraternidade e missão.
                </p>

                <Link
                  to="/onde"
                  className="cev-sidebar-button"
                >
                  Ver outros locais →
                </Link>

              </div>

            </aside>

          </div>

        </section>

      </main>


      <footer className="cev-footer">

        <div>

          <img
            src={logo}
            alt="Shalom Rio"
          />

          <p>
            Comunidade Católica Shalom · Rio de Janeiro
          </p>

        </div>

        <Link to="/">
          Voltar para o início →
        </Link>

      </footer>

    </div>
  )
}

export default LayoutCev