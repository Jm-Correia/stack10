import React,{Component} from 'react'
import './css/navbar.css'
import profile from './image/account.png';

import PostList from './PostList';

class NavBar extends Component{
    render(){
        return (
        <>
        <header>
            <button class="facebook">Facebook</button>
            <nav>
                <ul class="nav__links">
                    <li><a href="#"> Meu Perfil</a></li>
                </ul>
            </nav>
            <img class="account" src={profile}/>
        </header>
         <PostList/>
        </>
        );
    }
}
export default NavBar;