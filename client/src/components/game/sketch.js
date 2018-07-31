import io from 'socket.io-client';

export default function sketch (p) {
    let rotation = 0;
    let x = 0;
    let y = 0;
    let xspeed = 1;
    let yspeed = 0;
  // lam con ran doi huong
    const dir = (a,b) =>{
      xspeed = a;
      yspeed = b;
    };
    // cap nhat chuyen dong
    const update = () => {
      x += xspeed;
      y += yspeed;
  };

    const socket = io.connect('http://localhost:5000');
    socket.on("server-send-transcript", function(data){
      data = data.split(" ").pop();
      console.log(data);
      console.log(typeof data); 
      switch (data){
        case "wow" : {
          dir(0,-1); break;
        }
        case "hi" : {
          dir(0,1);break;
        }
        case "hello":{
          dir(1,0); break;
        }
        case "right":{
          dir(-1,0);break;
        }
      } 
      
    });
    socket.on("connect", () => {
        console.log('connected');
    })

    let setupRecognition = () => {
      let recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = true;
      recognition.continuous = true;
      recognition.start();
      console.log(recognition); 
  
      recognition.onresult = (e) => {
        var last = e.results.length - 1;
        let text = e.results[last][0].transcript;
        socket.emit("client-send-transcript", text);
      }
    }

    setupRecognition();

    setInterval(() => setupRecognition(), 10000);
  
    p.setup = function () {
      p.createCanvas(600, 400);
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
        p.background(200);
        p.fill(255,255,0);
        p.rect(x,y,10,10);
        update();
    };
  };