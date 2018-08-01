import io from 'socket.io-client';
import _ from 'lodash';

export default function sketch(p) {
  const width = 600;
  const height = 400;
  const step = 10;
  
  let rotation;
  let x = 0;
  let y = 0;
  let xfood = 0;
  let yfood = 0;
  let xspeed = step;
  let yspeed = 0;
  // lam con ran doi huong
  const dir = (a, b) => {
    xspeed = a;
    yspeed = b;
  };
  // cap nhat chuyen dong
  const update = () => {
    x += xspeed;
    y += yspeed;
  };
  // tao location cho cai do an
  const makeFood = () => {
    xfood = _.random(0, height / 10 - 1) * 10;
    yfood =       _.random(0,width/10 -1*10);
  };

  const socket = io.connect('http://localhost:5000');
  socket.on("server-send-transcript", function (data) {
    data = data.split(" ").pop();
    console.log(data);
    switch (data) {
      case "wow": {
        dir(0, 10); break;
      }
      case "hi": {
        dir(-10, 0); break;
      }
      case "hello": {
        dir(0, -10); break;
      }
      case "right": {
        dir(10, 0); break;
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
      switch (text) {
        case "wow": {
          dir(0, 10); break;
        }
        case "hi": {
          dir(-10, 0); break;
        }
        case "hello": {
          dir(0, -10); break;
        }
        case "right": {
          dir(10, 0); break;
        }
      }
      //console.log(text);
      socket.emit("client-send-transcript", text);
    }
  }

  setupRecognition();

  setInterval(() => setupRecognition(), 10000);

  p.setup = function () {
    p.createCanvas(width, height);
    p.frameRate(10);
    makeFood();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(200);
    p.fill(255, 255, 0);
    p.rect(x, y, step, step);
    update();
    p.fill(255, 0, 0);
    p.rect(xfood, yfood, step, step);
  };
};