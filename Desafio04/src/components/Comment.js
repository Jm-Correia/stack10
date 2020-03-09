import React,{Component} from 'react';
import Account from './image/account.png'
import './css/comment.css';

class Comment extends Component{
   
    static defaultProps={
        avatar: Account
    }

    render(){
        return(
        <div className="comment">
			<div className="img">
				<img src={this.props.avatar} alt="Avatar"/>
			</div>
			<textarea rows="4" readOnly defaultValue={this.props.coment}/>

		</div>
        );
    }
}

export default Comment;