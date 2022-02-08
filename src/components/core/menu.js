import { Link } from 'react-router-dom';
import './menu.css';
export function Menu({ menuOptions }) {
    return (
        <nav className="menu">
            <ul className="menu__items">
                {menuOptions.map((item) => (
                    <li className="menu__item">
                        <Link className="menu__item-link" to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
