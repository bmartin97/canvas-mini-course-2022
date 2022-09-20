export function drawUkFlag(ctx) {

ctx.fillStyle= 'blue';
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

ctx.fillStyle= 'white';
ctx.fillRect(250,0,100,canvas.clientHeight);

ctx.fillRect(0,150,canvas.clientWidth,100);

ctx.fillStyle= 'white';
ctx.strokeStyle= 'white';
ctx.moveTo(0,0);
ctx.lineWidth = 100;
ctx.lineTo(canvas.clientWidth,canvas.clientHeight);
ctx.stroke();
ctx.moveTo(canvas.clientWidth,0);
ctx.lineTo(0,canvas.clientHeight);
ctx.stroke();

ctx.fillStyle= 'red';
ctx.fillRect(275,0,50,canvas.clientHeight);

ctx.fillRect(0,175,canvas.clientWidth,50);

ctx.fillStyle= 'white';
ctx.strokeStyle= 'red';
ctx.moveTo(0,0);
ctx.lineWidth = 50;
ctx.lineTo(canvas.clientWidth,canvas.clientHeight);
ctx.stroke();
ctx.moveTo(canvas.clientWidth,0);
ctx.lineTo(0,canvas.clientHeight);
ctx.stroke();
}
