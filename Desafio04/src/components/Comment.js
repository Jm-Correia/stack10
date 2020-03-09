import React,{Component} from 'react';
import Account from './image/account.png'
import './css/comment.css';

class Comment extends Component{
   

    render(){
        return(
        <div class="comment">
			<div class="img">
				<img src={Account} alt="Avatar"/>
			</div>
			<textarea rows="3" readonly="true">
                Lembresse que é uma tecnologia disrupitiva e
                Ainda tem, os smart contrats.
                Vamos virar tudo ancap!!!
                </textarea>

		</div>
        );
    }
}

export default Comment;