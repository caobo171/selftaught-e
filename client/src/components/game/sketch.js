//import openSocket from 'socket.io-client';

export default function sketch (p) {
    let rotation = 0;

   // const socket = openSocket('http://localhost/5000');
  
    p.setup = function () {
      p.createCanvas(600, 400, );
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
        p.background(200);
        p.fill('yellow');
        p.rect(0,0,10,10);
    };
  };