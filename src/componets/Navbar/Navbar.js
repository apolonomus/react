
import './Navbar.css'
import CartWidget from '../CartWidget'

const Navbar  = (props) => {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <h1>APOLO COMPANY</h1>
            <div class="container-fluid">
                <form class="container-fluid justify-content-start">
                    <button to='/' class="btn btn-sm btn-outline-secondary" type="button">Ver Todo</button>
                    <button to='/category/celular' class="btn btn-sm btn-outline-secondary" type="button">Celulares</button>
                    <button to='/category/tablet' class="btn btn-sm btn-outline-secondary" type="button">Tablets</button>
                    <button to='/category/drones' class="btn btn-sm btn-outline-secondary" type="button">Drones</button>
                    <button to='/category/otros' class="btn btn-sm btn-outline-secondary" type="button">Otros</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button"><CartWidget /></button>
                </form>
            </div>
        </nav>

    )
}
export default Navbar