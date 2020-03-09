import React,{Component} from 'react';
import './css/post.css';
import Comment from './Comment';

class Post extends Component{
   
    state = {
        comentarios:[]
    };

    componentDidMount(){
        this.setState({
            comentarios: [...this.props.comments]
        });
    }

    render(){
        return(
        <div className="content">
            <div className="card">
                <img src={this.props.avatar} alt="Avatar"/>
                <div className="autor">				
                    <label >{this.props.autor}</label>
                    <small >{this.props.data}</small>
                </div>
                <textarea rows="3" readOnly defaultValue={this.props.texto}/>
            </div>
		    <hr/>
            {this.state.comentarios.map(c => 
            <Comment key={c.id} url={c.author.avatar} coment={c.content}/>)}
	    </div>
        );
    }
}

export default Post;