export function MultipleBallBounce(ctx, numOfBalls = 70) {
  const screen = {
    left: 0,
    top: 0,
    right: canvas.width,
    bottom: canvas.height
  };

  const colorPalette = [
    '#31E1F7',
    '#400D51',
    '#D800A6',
    '#FF7777'
  ];

  const ballCollection = [];

  class Ball {
    constructor(x, y, radius, color, speedX, speedY) {
      this.radius = radius;
      this.color = color;
      this.speedX = speedX;
      this.speedY = speedY;
      this.x = x;
      this.y = y;
    }

    render() {
      const ball = {
        left: this.x,
        top: this.y,
        right: this.x + this.radius * 2,
        bottom: this.y + this.radius * 2
      };
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(
        this.x + this.radius,
        this.y + this.radius,
        this.radius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // X axis
      if (
        ball.right >= screen.right ||
        ball.left <= screen.left
      ) {
        this.speedX *= -1;
      }

      // Y axis
      if (
        ball.bottom >= screen.bottom ||
        ball.top <= screen.top
      ) {
        this.speedY *= -1;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  for (let i = 0; i < numOfBalls; i++) {
    const radius = 10 + Math.round(Math.random() * 15);
    ballCollection.push(
      new Ball(
        Math.round(
          Math.random() * (canvas.width - radius * 2)
        ),
        Math.round(
          Math.random() * (canvas.height - radius * 2)
        ),
        radius,
        getRandomElementOf(colorPalette),
        1 + Math.round(Math.random() * 5),
        1 + Math.round(Math.random() * 5)
      )
    );
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballCollection.forEach((ball) => ball.render());
    requestAnimationFrame(render);
  }

  render();

  function getRandomElementOf(arr) {
    const index = Math.floor(Math.random() * arr.length);

    const correctedIndex = Math.min(index, arr.length - 1);

    return arr[correctedIndex];
  }
}
