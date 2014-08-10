var rect = canvas.getBoundingClientRect();

var mouse = {
  x: 0,
  y: 0,
  isDown: false,
}

canvas.addEventListener('mousemove', function(event) {
    if(event.offsetX) {
        mouse.x = event.offsetX - rect.left;
        mouse.y = event.offsetY - rect.top;
    }
    else if(event.layerX) {
        mouse.x = event.layerX - rect.left;
        mouse.y = event.layerY - rect.top;
    }
}, false);

canvas.addEventListener("mousedown", function() {
  mouse.isDown = true;
}, false);

canvas.addEventListener("mouseup", function() {
  mouse.isDown = false;
}, false);
