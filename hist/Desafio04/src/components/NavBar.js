import React,{Component} from 'react'
import './css/navbar.css'
import profile from './image/account.png';

import PostList from './PostList';

class NavBar extends Component{
    render(){
        return (
        <div>
        <header>
            <button className="facebook">Facebook</button>
            <nav>
                <ul className="nav__links">
                    <li><a href="#"> Meu Perfil</a></li>
                </ul>
            </nav>
            <img className="account" src={profile}/>
        </header>
        </div>
        );
    }
}
export default NavBar;