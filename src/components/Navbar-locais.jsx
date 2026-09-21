import { Link } from 'react-router-dom'
import logo from '../assets/shalom-logo.png'

function Navbarlocais() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo Shalom" />
          <span className="ms-2">Shalom Rio 30 anos!</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/eventos" className="nav-link">
                Eventos
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/onde" className="nav-link">
                Grupos de oração
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/noticias" className="nav-link">
                Notícias
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/sobre" className="nav-link">
                Sobre Nós
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contatos" className="nav-link">
                Contatos
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbarlocais