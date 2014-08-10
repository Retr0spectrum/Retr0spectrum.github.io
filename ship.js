var ship = {
  x: 64,
  y: 432,
  velX: 0,
  velY: 0,
  wait2fire: false,
  isVisible: false,
  update: function() {
    if (!this.isVisible) return;
    if (isDown[this.upKey]) {
      this.velY--;
    }
    if (isDown[this.downKey]) {
      this.velY++;
    }
    if (isDown[this.leftKey]) {
      this.velX--;
    }
    if (isDown[this.rightKey]) {
      this.velX++;
    }
    if (isDown[this.fireKey]) {
      if (!this.wait2fire) {
        bullets.add(this.x, this.y, this.velX+(Math.random()-0.5), Math.floor(this.velY - 10));
        this.wait2fire = 3;
      } else if (this.wait2fire > 0) {
        this.wait2fire--;
      }
    } else if (this.wait2fire > 0) {
      this.wait2fire--;
    }
    this.x += this.velX;
    this.y += this.velY;
    this.velX *= 0.87;
    this.velY *= 0.87;
  },
  render: function() {
    if (!this.isVisible) return;
    xFloor = this.x - this.sprite.width/2;
    yFloor = this.y;
    xFloor = Math.floor(mod(xFloor, c.width));
    yFloor = Math.floor(mod(yFloor, c.height));
    sprite = this.sprite
    ctx.drawImage(sprite, xFloor, yFloor);
    if (xFloor > c.width-this.sprite.width) {
      ctx.drawImage(sprite, xFloor-c.width, yFloor);
    }
    if (yFloor > c.height-this.sprite.height) {
      ctx.drawImage(sprite, xFloor, yFloor-c.height);
    }
    if (yFloor > c.height-this.sprite.height && xFloor > c.width-this.sprite.width) {
      ctx.drawImage(sprite, xFloor-c.width, yFloor-c.height);
    }
  }
}
