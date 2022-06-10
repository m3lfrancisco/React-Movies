import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/movies">Movies</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/actors">Actors</NavLink>
        </nav>
    )
}