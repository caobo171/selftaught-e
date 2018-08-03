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
  let xspeed = step/2;
  let yspeed = 0;
  let total = 0;
  let xtail = [];
  let ytail =[];
  // lam con ran doi huong
  const dir = (a, b) => {
    xspeed = a;
    yspeed = b;
  };
  // cap nhat chuyen dong
  const update = () => { 
    if(total == xtail.length){
      for(var i = 0; i < xtail.length - 1; i++){
        xtail[i] = xtail[i+1];
        ytail[i] = ytail[i+1];
      };
    };
    xtail[total - 1] = x; ytail[total - 1] = y;
    x += xspeed;
    y += yspeed;
  };
  // tao location cho cai do an
  const makeFood = () => {
    xfood = _.random(0, width / 10 - 1) * 10;
    yfood =  _.random(0, height / 10 - 1) * 10;
  };
  // check if it did eat sth
  const eat = () => {
    let d = Math.sqrt((x-xfood)*(x-xfood) + (y-yfood)*(y-yfood));
    if(d < 10) {  total +=2; 
      return true;}
    else {
      return false;};
  };
  // kill the snake
  const die = () => {
    alert("You lost!!");
    x = 0;
    y = 0;
    xfood = 0;
    yfood = 0;
    xspeed = step/2;
    yspeed = 0;
    total = 0;
    xtail = [];
    ytail =[];
    makeFood();
  }
  // like check if it bite the wall or hit itself
  const checkDie = () => {
    for(var i = 0; i < xtail.length - 1 ; i++){
      let d = Math.sqrt((x-xtail[i])*(x-xtail[i]) + (y-ytail[i])*(y-ytail[i]));
      if(d < 5) {
        die();
      }
    };
    if( x < 0 || x > width - step || y < 0 || y > height -step ){
      die();
    }
  };
  // set up cho cai speech api
  let setupRecognition = () => {
    let recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.start();
    console.log(recognition);
    // khi nhan ket qua thi so sanh vs tu cho trc va doi huong chuyen dong
    recognition.onresult = (e) => {
      var last = e.results.length - 1;
      let text = e.results[last][0].transcript;
      text = text.split(" ").pop();
      console.log(text);
      switch (text) {
        case "wow": {
          dir(0, step/2); break;
        }
        case "hi": {
          dir(-step/2, 0); break;
        }
        case "hello": {
          dir(0, -step/2); break;
        }
        case "yes": {
          dir(step/2, 0); break;
        }
      }
      console.log(text);
      //socket.emit("client-send-transcript", text);
    }
  }

  setupRecognition();
  // dat lai moi 10 s vi cai speech api ko chay dk lau
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
    for(var i=0; i < xtail.length; i+=2){
      p.rect(xtail[i], ytail[i], step, step);
    }
    p.rect(x, y, step, step);
    update();

    if(eat() === true){makeFood();};
    p.fill(255, 0, 0);
    p.rect(xfood, yfood, step, step);
    checkDie();
  };
};