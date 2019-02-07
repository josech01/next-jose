import Link from 'next/link'

const Navegacion = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-warning'>
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand">Catalog José</a>
        </Link>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href='/'>
                <a className='nav-link'>Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/nosotros'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;