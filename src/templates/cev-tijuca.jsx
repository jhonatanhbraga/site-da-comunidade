import LayoutCev from '../components/LayoutCev'
import { cevs } from '../data/cevs'

function CentroTijuca() {
  const cev = cevs.tijuca

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
        Shalom presente na Tijuca.
      </h2>

      <p>
        Este espaço reúne a comunidade para momentos
        de oração, convivência, formação e missão.
      </p>

      <div className="cev-info-block">
        <h3>Horários</h3>

        <p>
          Em breve disponibilizaremos os horários
          atualizados deste centro.
        </p>
      </div>

      <div className="cev-address-card">

        <span>
          COMO CHEGAR
        </span>

        <strong>
          Tijuca
        </strong>

        <p>
          Rio de Janeiro - RJ
        </p>

      </div>

    </LayoutCev>
  )
}

export default CentroTijuca