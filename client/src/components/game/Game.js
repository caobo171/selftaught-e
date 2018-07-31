import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class Game extends Component {
    render(){ 
        return( 
            <div>
                <p>wow for down, hi for left, hello for up and right is still right</p>
                <P5Wrapper sketch={sketch}/>
            </div>
        );
    }   
}

export default Game;