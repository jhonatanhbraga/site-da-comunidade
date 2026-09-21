import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/shalom-logo.png'
import logo30 from '../assets/shalom-logo-tranparente.png'
import capa from '../assets/foto-capa-inicio.png'
import catete from '../assets/fotocatete.png'
import recreio from '../assets/fotorecreio.png'

import eventoFlash from '../assets/fotoevento01.png'
import eventoHalleluya from '../assets/fotoevento02.png'
import eventoAcamps from '../assets/fotoevento03.png'
import eventoOnda from '../assets/fotoevento04.png'
import eventoUniversitaria from '../assets/fotoevento05.png'

const eventos = [
  {
    titulo: 'Flash',
    categoria: 'Juventude',
    descricao: 'Alegria, amizade e encontro com Deus.',
    imagem: eventoFlash,
    link: 'https://www.instagram.com/acampsrio/',
  },
  {
    titulo: 'Halleluya Rio',
    categoria: 'Evento',
    descricao: 'A festa que nunca acaba.',
    imagem: eventoHalleluya,
    link: 'https://www.instagram.com/acampsrio/',
  },
  {
    titulo: 'Acamps 2027',
    categoria: 'Acampamento',
    descricao: 'Dias de experiência, fraternidade e missão.',
    imagem: eventoAcamps,
    link: 'https://www.instagram.com/acampsrio/',
  },
  {
    titulo: 'No Onda do Amor',
    categoria: 'Centro de Evangelização',
    descricao: 'Um encontro para viver a fé no coração do Rio.',
    imagem: eventoOnda,
    link: 'https://www.instagram.com/',
  },
  {
    titulo: 'Conferência Universitária',
    categoria: 'Universitários',
    descricao: 'Um espaço para perguntas, razão e busca da Verdade.',
    imagem: eventoUniversitaria,
    link: 'https://www.instagram.com/juventudeshrio/',
  },
]

const locais = [
  ['Catete', 'Rua Bento Lisboa, 112', '/Cevcatete'],
  ['Tijuca', 'Rua Alzira Brandão, 304', '/Cevtijuca'],
  ['Jacarepaguá / Curicica', 'Rua das Pêras, 2', '/Cevjacarepagua'],
  ['Campo Grande', 'Rua do Petróleo, 125', '/Cevcampogrande'],
  ['Vigário Geral', 'Shopping Via Brasil', '/Cevvigario'],
  ['Recreio dos Bandeirantes', 'Rua Theodorino Rodrigues Pereira, 30', '/Cevrecreio'],
  ['Asilo em Irajá', 'Centro de evangelização', '/Cevasilo'],
  ['Quiosque do Guido', 'Praia do Recreio', '/Cevquiosque'],
]

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="landing-header">
      <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Comunidade Católica Shalom" />
        <span>Shalom Rio</span>
      </a>

      <button
        className="menu-button"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`landing-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#eventos" onClick={() => setMenuOpen(false)}>Eventos</a>
        <a href="#locais" onClick={() => setMenuOpen(false)}>Onde estamos</a>
        <a href="#noticias" onClick={() => setMenuOpen(false)}>Notícias</a>
        <a href="#contato" className="nav-cta" onClick={() => setMenuOpen(false)}>Venha conhecer</a>
      </nav>
    </header>
  )
}

function Inicio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="landing-page">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <section id="inicio" className="landing-hero">
          <img className="hero-photo" src={capa} alt="Comunidade Católica Shalom reunida no Rio de Janeiro" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <img className="hero-mark" src={logo30} alt="Shalom Rio 30 anos" />
            <p className="eyebrow">COMUNIDADE CATÓLICA SHALOM</p>
            <h1>30 anos construindo<br /><em>um Rio de paz.</em></h1>
            <p className="hero-lead">
              Uma comunidade de fé, amizade e missão que deseja tornar Jesus Cristo conhecido e amado no coração do Rio de Janeiro.
            </p>
            <div className="hero-actions">
              <a href="#locais" className="button button-light">Encontre um centro</a>
              <a href="#sobre" className="button button-ghost">Conheça o Shalom</a>
            </div>
          </div>
          <a className="scroll-hint" href="#sobre" aria-label="Descer para a próxima seção">
            <span>desça</span>
            <b>↓</b>
          </a>
        </section>

        <section id="sobre" className="intro-section section-shell">
          <div className="section-kicker">SHALOM NO RIO</div>
          <div className="intro-grid">
            <div>
              <h2>Uma casa onde a fé encontra <span>vida.</span></h2>
            </div>
            <div className="intro-copy">
              <p>
                O Shalom nasceu em Fortaleza, em 1982, a partir do desejo de evangelizar especialmente os jovens. Hoje, o carisma está presente em diferentes lugares do Brasil e do mundo.
              </p>
              <p>
                No Rio de Janeiro, somos uma comunidade formada por pessoas diferentes, reunidas pela experiência com Jesus Cristo, pela fraternidade e pelo desejo de servir.
              </p>
              <Link className="text-link" to="/sobre">Conheça nossa história <span>↗</span></Link>
            </div>
          </div>

          <div className="statement">
            <span>“</span>
            <p>Evangelizar é anunciar uma pessoa: <strong>Jesus Cristo.</strong></p>
          </div>
        </section>

        <section className="photo-story">
          <div className="photo-story-image">
            <img src={catete} alt="Espaço de oração da Comunidade Shalom no Catete" />
          </div>
          <div className="photo-story-content">
            <div className="section-kicker">UMA EXPERIÊNCIA CONCRETA</div>
            <h2>Encontre um lugar para <span>pertencer.</span></h2>
            <p>
              Nossos centros de evangelização são espaços para oração, formação, convivência e missão. Chegue como você está, conheça as pessoas e descubra uma comunidade perto de você.
            </p>
            <a href="#locais" className="button button-blue">Ver centros de evangelização</a>
          </div>
        </section>

        <section id="eventos" className="events-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker">AGENDA</div>
                <h2>Tem sempre algo <span>acontecendo.</span></h2>
              </div>
              <p>Encontros, festas, acampamentos e experiências para diferentes momentos da vida.</p>
            </div>

            <div className="events-grid">
              {eventos.map((evento) => (
                <a className="event-card" href={evento.link} target="_blank" rel="noreferrer" key={evento.titulo}>
                  <div className="event-image">
                    <img src={evento.imagem} alt={evento.titulo} />
                    <span>{evento.categoria}</span>
                  </div>
                  <div className="event-info">
                    <h3>{evento.titulo}</h3>
                    <p>{evento.descricao}</p>
                    <strong>Saiba mais <span>↗</span></strong>
                  </div>
                </a>
              ))}
            </div>

            <div className="centered-link">
              <Link to="/eventos" className="button button-dark">Ver todos os eventos</Link>
            </div>
          </div>
        </section>

        <section id="locais" className="locations-section section-shell">
          <div className="section-heading locations-heading">
            <div>
              <div className="section-kicker">ESTAMOS PERTO</div>
              <h2>Um Shalom para <span>chamar de seu.</span></h2>
            </div>
            <p>Conheça nossos centros de evangelização no Rio e encontre o endereço que faz mais sentido para você.</p>
          </div>

          <div className="locations-layout">
            <div className="locations-list">
              {locais.map(([nome, endereco, rota], index) => (
                <Link className="location-row" to={rota} key={nome}>
                  <span className="location-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <strong>{nome}</strong>
                    <small>{endereco}</small>
                  </span>
                  <b>↗</b>
                </Link>
              ))}
            </div>

            <div className="location-photo">
              <img src={recreio} alt="Comunidade reunida no Recreio dos Bandeirantes" />
              <div>
                <span>Rio de Janeiro</span>
                <strong>Venha viver essa experiência.</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="noticias" className="news-section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-kicker">ACONTECEU POR AQUI</div>
                <h2>Vida da comunidade.</h2>
              </div>
              <Link className="text-link" to="/noticias">Ver notícias <span>↗</span></Link>
            </div>

            <article className="news-feature">
              <div className="news-date">
                <span>RIO</span>
                <strong>30</strong>
                <span>ANOS</span>
              </div>
              <div>
                <div className="news-tag">COMUNIDADE</div>
                <h3>Comunidade recebe medalha de São Francisco na Câmara Municipal do Rio</h3>
                <p>
                  Um registro da presença do Shalom na cidade e de uma história construída por pessoas que colocam a fé em prática.
                </p>
                <a href="https://www.instagram.com/p/Dcd6RcDuUi_/" target="_blank" rel="noreferrer" className="text-link">
                  Ler matéria <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="contato" className="cta-section">
          <div className="cta-inner">
            <img src={logo30} alt="" />
            <div>
              <div className="section-kicker">VAMOS CONVERSAR</div>
              <h2>Talvez este seja o momento de <em>chegar.</em></h2>
              <p>Quer conhecer a comunidade, tirar uma dúvida ou encontrar um grupo de oração?</p>
              <Link to="/contatos" className="button button-light">Entre em contato</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div>
          <img src={logo} alt="Shalom Rio" />
          <p>Comunidade Católica Shalom · Rio de Janeiro</p>
        </div>
        <div className="footer-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#eventos">Eventos</a>
          <a href="#locais">Onde estamos</a>
          <Link to="/contatos">Contatos</Link>
        </div>
        <span>© Shalom Rio</span>
      </footer>
    </div>
  )
}

export default Inicio
