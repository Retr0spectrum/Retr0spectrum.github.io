var isDown = new Array(222);

var key = {
  w: 87,
  a: 65,
  s: 83, 
  d: 68,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  shiftKey: 16,
  m: 77,
  space: 32,
  downEvent: function(event) {
    isDown[event.keyCode] = true;
  },
  upEvent: function (event) {
    isDown[event.keyCode] = false;
  },
};

window.addEventListener( "keydown", key.downEvent, false );
window.addEventListener( "keyup", key.upEvent, false );
