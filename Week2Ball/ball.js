var positionX = 0;
var positionY = 0;
var velocityX = 12;
var velocityY = 10;
var reverseX = false;
var reverseY = false;
var ball = document.getElementById("ball");

function moveBall() {
  var Xmin = 0;
  var Xmax = 350;

  var Ymin = 0;
  var Ymax = 350;

  if (reverseX) {
    positionX = positionX - velocityX;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    console.log("reverseX: " + positionX + ", " + positionY);
  } else {
    positionX = positionX + velocityX;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    console.log("NOT reverseX: " + positionX + ", " + positionY);
  } 

  if (reverseY) {
    positionY = positionY - velocityY;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    console.log("reverseY: + positionX + ", " + positionY");
  } else {
    positionY = positionY + velocityY;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    console.log("NOT reverseY: " + positionX + ", " + positionY);
  }

  if (
    positionX > Xmax ||
    positionX === Xmin
  ) {
    reverseX = !reverseX;
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverseY = !reverseY;
  }
}

setInterval(moveBall, 100);
