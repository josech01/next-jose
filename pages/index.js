import MasterPage from '../components/master'
import Link from 'next/link'

const Index = (props) => (
  <MasterPage>
    <div className="container mt-1100">
      <div className="row">
        <div class="card col-md-6">
          <img class="card-img-top" src="https://i.ibb.co/Kz4kyFT/ultajockey.png" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">UltraJockey.com</h5>
            <p class="card-text">Aplicacion de apuestas para creacion de eventos utilizando
              tecnologias javascript librerias como react y muchas otras</p>
            <Link href="https://ultrajockey.com">
              <a class="nav-link btn btn-primary">Ir al sitio</a>
            </Link>
          </div>
        </div>
        <div class="card col-md-6">
          <img class="card-img-top" src="https://i.ibb.co/72wKyRd/tunnel10.png" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Tunnerl10.com</h5>
            <p class="card-text">Aplicacion de escritorio hecho en electron utilizando
              tecnologias como react, redux </p>
            <Link href="https://tunnel10.com">
              <a class="nav-link btn btn-primary">Ir al sitio</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="card col-md-6">
          <img class="card-img-top" src="https://i.ibb.co/4MmGCTd/emusa.png" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Emusa.com.pe</h5>
            <p class="card-text">Cms para publicacion de productos utilizando: materialize django jet entre otros</p>
            <Link href="https://emusa.com.pe">
              <a class="nav-link btn btn-primary">Ir al sitio</a>
            </Link>
          </div>
        </div>
        <div class="card col-md-6">
          <img class="card-img-top" src="https://i.ibb.co/L04x65G/divertikanto.png" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Divertikanto.com</h5>
            <p class="card-text">Sitio Web para alquiler de karaoke hecho en bootstrap 4 y librerias js</p>
            <Link href="https://divertikanto.com">
              <a class="nav-link btn btn-primary">Ir al sitio</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </MasterPage>

)

export default Index;