var shoot = new Audio("sound/shoot.wav");
var shots = [];

var bullets = {
  x: [],
  y: [],
  velX: [],
  velY: [],
  sprite: new Image(),
  add: function(x, y, velX, velY) {
    xFloor = x-1;
    yFloor = y+5;
    xFloor = Math.floor(xFloor, c.width);
    yFloor = Math.floor(mod(yFloor, c.height));
    this.x.push(xFloor);
    this.y.push(yFloor);
    this.velX.push(velX);
    this.velY.push(velY);
    shots.push(shoot.cloneNode());
    shots[shots.length-1].play();
    setTimeout(function(){shots.splice( 0, 1 )}, 1000);
  },
  update: function() {
    for (i=0;i<this.x.length;i++) {
      this.x[i] += this.velX[i];
      this.y[i] += this.velY[i];
    }
  },
  render: function () {
    for (i=0;i<this.x.length;i++) {
      xFloor = this.x[i];
      xFloor = mod(Math.floor(xFloor + 0.5), c.width);
      y = this.y[i];
      sprite = this.sprite;
      ctx.drawImage(sprite, xFloor, y);
      if (yFloor <= 0) {
        this.x.splice(i, 1);
        this.y.splice(i, 1);
        this.velX.splice(i, 1);
        this.velY.splice(i, 1);
      }
    }
  },
}
