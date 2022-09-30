export function BallBounce(ctx) {
  const radius = 30;
  let _SPEED_X = 8;
  let _SPEED_Y = 3;

  const screen = {
    left: 0,
    top: 0,
    right: canvas.width,
    bottom: canvas.height
  };

  let x = 1;
  let y = 20;

  function drawHitBox(ball) {
    ctx.fillRect(ball.left, 0, 2, canvas.height);
    ctx.fillRect(0, ball.top, canvas.width, 2);
    ctx.fillRect(ball.right, 0, 2, canvas.height);
    ctx.fillRect(0, ball.bottom, canvas.width, 2);
  }

  function render() {
    const ball = {
      left: x,
      top: y,
      right: x + radius * 2,
      bottom: y + radius * 2
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
    ctx.fill();

    // X axis
    if (
      ball.right >= screen.right ||
      ball.left <= screen.left
    ) {
      _SPEED_X *= -1;
    }

    // Y axis
    if (
      ball.bottom >= screen.bottom ||
      ball.top <= screen.top
    ) {
      _SPEED_Y *= -1;
    }
    x += _SPEED_X;
    y += _SPEED_Y;
    requestAnimationFrame(render);
  }

  render();
}
