const { default: Script } = require("./modules/_home");
jQuery(document).ready(function () {
    var canvas = document.createElement('canvas'); 
      document.body.append(canvas);
      canvas.style.position='fixed';
      canvas.style.top='0px';
      canvas.style.left='0px';
      canvas.style.zIndex='999999';
      canvas.style.pointerEvents='none';
    var ctx = canvas.getContext('2d');
    //Canvas dimentions
    var W = window.innerWidth,
      H = window.innerHeight;
    
    canvas.width = W;
    canvas.height = H;
    var particles = [];
    var x = 100;
    var y = 100;
    
    for (var i = 0; i < 100; i++) {
      particles.push(new creat_particle());
    }
    
    //function for multiple particles
    function creat_particle() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
    
      //velocity of balls
      this.vx = Math.random() * 4 - 1;
      this.vy = Math.random() * 4 + 1;
    
      //Random Color
      var a = Math.random() * 1;
      this.color = "rgba(" + 255 + "," + 255 + "," + 255 + "," + a +")";
    
      //random size
      this.radius = Math.random() * 2 + 2;
    }
    //Particles Animation
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      //Particls from array
    
      for (var t = 0; t < particles.length; t++) {
    
        var p = particles[t];
    
        ctx.beginPath();
        //balls color
        var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(1, p.color);
        gradient.addColorStop(1, "rgb(66, 66, 66)");
    
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false)
    
        ctx.fill();
        //velocity
        p.x += p.vx;
        p.y += p.vy;
    
        //boundaries
        if (p.x < -50) p.x = W + 50;
        if (p.y < -50) p.y = H + 50;
        if (p.x > W + 50) p.x = -50;
        if (p.y > H + 50) p.y = -50;
      }
    }
    setInterval(draw, 33);
});

$(document).ready(function(){
    new Script();

    let container = document.getElementById('append-snow');
    let count = 50;
    
    for(var i = 0; i<50; i++){
        let leftSnow = Math.floor(Math.random() * window.innerWidth);
        let topSnow = Math.floor(Math.random() * window.innerHeight);
        let widthSnow = Math.floor(Math.random() * 25)+10;
        let timeSnow = Math.floor((Math.random() * 5) + 5);
        let blurSnow = Math.floor(Math.random() * 10); blurSnow=blurSnow/3;
        let id=Math.floor(Math.random() * 11);
        let div = document.createElement('div');
        div.classList.add('mmis-snow-'+id);
        div.style.left = leftSnow + 'px';
        div.style.top = topSnow + 'px';
        div.style.zIndex = 999999;
        div.style.width = widthSnow + 'px';
        div.style.height = widthSnow + 'px';
        div.style.animationDuration = timeSnow + 's';
        div.style.filter = "blur(" + blurSnow + "px)";
        container.appendChild(div);
    }
})

