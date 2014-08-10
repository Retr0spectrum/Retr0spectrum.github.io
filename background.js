var background = {
  y: 0,
  isVisible: false,
  update: function() {
    this.y += 2;
    if (this.y >= this.sprite.height-20) {
      this.y -= this.sprite.height;
    }
  },
  render: function() {
    if (!this.isVisible) return;
    sprite = this.sprite;
    y = this.y;
    thisHeight = this.sprite.height;
    ctx.drawImage(sprite, 0, y-thisHeight);
    ctx.drawImage(sprite, 0, y);
    ctx.drawImage(sprite, 0, y+thisHeight);
  },
}
