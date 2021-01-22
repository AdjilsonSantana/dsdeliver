import { logDOM } from '@testing-library/react';
import './styles.css';
import {ReactComponent as Logo} from './logo.svg';

function NavBar(){
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="Home" className="logo-text">DS Delivery</a>
        </nav>
    )

}

export default NavBar; 