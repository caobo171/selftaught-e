export var text ='';

export default function sketch (p) {
    let rotation = 0;
    var recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.start();
    console.log(recognition); 

    recognition.onresult = (e) => {
      var last = e.results.length - 1;
      text = e.results[last][0].transcript;
      console.log(text);
    }

    setInterval(function(){
      recognition.stop();
      console.log(recognition);
      //recognition.start();
    }, 10000);
  
    p.setup = function () {
      p.createCanvas(800, 600);
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
        p.background(200);
        p.fill(255,255,0);
        p.rect(0,0,10,10);
    };
  };