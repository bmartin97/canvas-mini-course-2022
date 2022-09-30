export function Paint(ctx) {
  let isPainting = false;
  let selectedColor = 'red';

  canvas.addEventListener('mousemove', function (event) {
    requestAnimationFrame(function () {
      render(event.x, event.y);
    });
  });
  canvas.addEventListener('mousedown', function () {
    isPainting = true;
  });
  canvas.addEventListener('mouseup', function () {
    isPainting = false;
  });

  canvas.addEventListener('click', function (event) {
    const x = event.x;
    const y = event.y;

    if (0 < x && x < 55) {
      if (0 < y && y < 30) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        init();
      }
      if (30 < y && y < 60) {
        selectedColor = 'black';
      }
      if (60 < y && y < 90) {
        selectedColor = 'red';
      }
      if (90 < y && y < 120) {
        selectedColor = 'blue';
      }
    }
  });

  let lastX = 0;
  let lastY = 0;

  function render(x, y) {
    if (isPainting && x > 55 + 20) {
      // console.log(Math.abs(lastX - x));
      ctx.fillStyle = selectedColor;
      // ctx.strokeStyle = selectedColor;
      ctx.fillRect(x - 20, y - 20, 20, 20);
      // ctx.lineWidth = 10;
      // ctx.beginPath();
      // ctx.moveTo(lastX, lastY);
      // ctx.lineTo(x, y);
      // ctx.stroke();
    }
    lastX = x;
    lastY = y;
  }

  function init() {
    // toolset background
    ctx.fillStyle = '#BBB';
    ctx.fillRect(0, 0, 55, canvas.height);

    // del btn
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, 55, 30);
    ctx.font = 'bold 20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('clear', 5, 20);

    // black color
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 30, 55, 30);
    // red color
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 60, 55, 30);
    // blue color
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 90, 55, 30);
  }
  init();
  render();
}
