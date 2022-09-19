export function BasicShapes(ctx) {
  ctx.strokeStyle = 'green';

  ctx.fillStyle = 'rgba(255, 0, 0, .7)';
  ctx.fillRect(10, 10, 102, 102);
  ctx.fillStyle = 'rgba(0, 255, 0, .5)';
  ctx.fillRect(40, 40, 102, 102);
  ctx.strokeRect(120, 120, 50, 77);
  ctx.clearRect(40, 40, 50, 50);

  ctx.fillStyle = 'yellow';

  ctx.beginPath();
  ctx.moveTo(300, 60);
  ctx.lineTo(500, 100);
  ctx.lineTo(400, 300);
  ctx.lineTo(300, 60);
  // ctx.closePath();
  // ctx.stroke();
  ctx.fill();

  ctx.lineWidth = 10;
  ctx.beginPath();
  // ctx.arc(100, 320, 50, 0, Math.PI);
  // ctx.arc(100, 320, 50, 0, Math.PI * 2);
  ctx.arc(0 + 50, 240 + 50, 50, 0, Math.PI * 2);
  // ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#555';
  ctx.font = '48px serif';
  ctx.fillText('Hello World', 100, 100);
  ctx.lineWidth = 1;
  ctx.strokeText('Hello World', 100, 200);
}
