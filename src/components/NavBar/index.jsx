import { Link, Outlet } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div>
                <h1></h1>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default NavBar