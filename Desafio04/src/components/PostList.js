import React,{Component} from 'react';
import User from './image/user.png'
import Post from './Post';

class PortList extends Component{
   

    render(){
        return(
            <div>
                <Post/>
                <Post/>
            </div>
            
        );
    }
}

export default PortList;