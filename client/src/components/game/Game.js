import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import text from './sketch';
import io from 'socket.io-client';

class Game extends Component {    
      constructor(props){
        super(props);
        this.state ={
            socket : null,
        };
    }

    componentWillMount(){
        this.initSocket();
    }
 
    initSocket = () => {
        const socket = io.connect('http://localhost:5000');
        console.log(socket);
        socket.on("connect", () => {
            console.log('connected');
        })
        this.setState({socket});
    }  
    
    render(){ 
        return( 
            <div>
                <P5Wrapper sketch={sketch}/>
            </div>
        );
    }   
}

export default Game;