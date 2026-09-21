import LayoutCev from '../components/LayoutCev'
import { cevs } from '../data/cevs'

function CentroCatete() {
  const cev = cevs.catete

  return (
    <LayoutCev
      nome={cev.nome}
      categoria={cev.categoria}
      imagem={cev.imagem}
      endereco={cev.endereco}
    >

      <span className="cev-section-kicker">
        SOBRE O LOCAL
      </span>

      <h2>
        Um espaço de encontro com Deus
        e com a comunidade.
      </h2>

      <p>
        O Centro de Evangelização Shalom Catete é um
        espaço de oração, convivência, formação e missão
        no coração do Rio de Janeiro.
      </p>

      <p>
        Durante a semana, o espaço recebe a comunidade
        para momentos de oração, celebrações e grupos
        de oração.
      </p>


      <div className="cev-info-block">

        <h3>
          Adoração
        </h3>

        <p>
          Segunda a sábado, das 15h às 21h,
          com o Santíssimo exposto para adoração.
        </p>

      </div>


      <div className="cev-info-block">

        <h3>
          Missas
        </h3>

        <ul>
          <li>Segundas e sextas às 18h</li>
          <li>Sábados às 15h30</li>
          <li>Domingos às 11h</li>
        </ul>

      </div>


      <div className="cev-info-block">

        <h3>
          Grupos de oração
        </h3>

        <ul>
          <li>
            Jovens — sábados às 17h,
            após a missa das 15h30
          </li>

          <li>
            Adultos — quintas às 20h
          </li>

          <li>
            Casais — terças às 20h
          </li>

          <li>
            Crianças — terças às 20h,
            simultaneamente ao grupo de casais
          </li>
        </ul>

      </div>


      <div className="cev-address-card">

        <span>
          COMO CHEGAR
        </span>

        <strong>
          Rua Bento Lisboa, 112
        </strong>

        <p>
          Catete · Rio de Janeiro - RJ
        </p>

      </div>

    </LayoutCev>
  )
}

export default CentroCatete