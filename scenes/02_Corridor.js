import { drawRectInCorners } from '../helpers/01_DrawRect';

export function Corridor(ctx) {
  for (let i = 1; i > 0.15; i -= 0.15) {
    ctx.fillStyle = `rgba(0, 0, 0, ${i})`;
    drawRectInCorners(ctx, {
      scale: i,
      size: 50 * i
    });
  }
}
