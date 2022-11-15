import './Navbar.css'

const Navbar  = () => {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <h1>APOLO COMPANY</h1>
            <div class="container-fluid">
                <form class="container-fluid justify-content-start">
                    <button class="btn btn-sm btn-outline-secondary" type="button">Home</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">¿Quienes Somos?</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Acerca de esta App</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Productos</button>
                </form>
            </div>

        </nav>

    )
}
export default Navbar
