var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var xFloor, yFloor, sprite, x, y, thisHeight;
var objects = [];

function mod(m, n) {
        return ((m % n) + n) % n;
}

var ship1 = Object.create(ship);
var ship2 = Object.create(ship);
background.sprite = new Image;
background.sprite.src = "img/background.png";
bullets.sprite.src = "img/bullet.png";
ship1.sprite = new Image();
ship2.sprite = new Image();
ship1.sprite.src = "img/ship.png";
ship2.sprite.src = "img/ship2.png";
ship2.x += 128;

ship1.upKey = key.w;
ship1.downKey = key.s;
ship1.leftKey = key.a;
ship1.rightKey = key.d;
ship1.fireKey = key.shiftKey;

ship2.upKey = key.up;
ship2.downKey = key.down;
ship2.leftKey = key.left;
ship2.rightKey = key.right;
ship2.fireKey = key.m;

objects.push(background);
objects.push(ship1);
objects.push(ship2);
objects.push(bullets);

background.isVisible = true;
ship1.isVisible = true;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var gameLoop = function() {
  requestAnimFrame(gameLoop);
  update();
  render();
}

var update = function() {
  for (var i=0;i<objects.length;i++) {
    objects[i].update();
  }
}

var render = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i=0;i<objects.length;i++) {
    objects[i].render();
  }
}

gameLoop();
