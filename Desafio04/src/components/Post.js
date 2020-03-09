import React,{Component} from 'react';
import User from './image/user.png'
import './css/post.css';
import Comment from './Comment';

class Port extends Component{
   

    render(){
        return(
        <div class="content">
            <div class="card">
                <img src={User} alt="Avatar"/>
                <div class="autor">				
                    <label >João Marcos Correia</label>
                    <small >08 de março de 2020</small>
                </div>
                <textarea rows="2" readonly="true">
                    Pessoal, alguém sabe se a Rocketseat está contratando?
                </textarea>
            </div>
		    <hr/>
            <Comment/>
	    </div>
        );
    }
}

export default Port;