export function drawInCorners(ctx) {
  const size = 20;
  ctx.fillRect(0, 0, size, size);
  ctx.fillRect(canvas.width - size, 0, size, size);
  ctx.fillRect(
    canvas.width - size,
    canvas.height - size,
    size,
    size
  );
  ctx.fillRect(0, canvas.height - size, size, size);
}

export function drawInCornersWithSize(ctx, size) {
  ctx.fillRect(0, 0, size, size);
  ctx.fillRect(canvas.width - size, 0, size, size);
  ctx.fillRect(
    canvas.width - size,
    canvas.height - size,
    size,
    size
  );
  ctx.fillRect(0, canvas.height - size, size, size);
}

export function drawInCornersWithSizeAndScale(
  ctx,
  size,
  scale
) {
  ctx.fillRect(0, 0, size, size);
  ctx.fillRect(
    (canvas.width - size) * scale,
    0,
    size,
    size
  );
  ctx.fillRect(
    (canvas.width - size) * scale,
    (canvas.height - size) * scale,
    size,
    size
  );
  ctx.fillRect(
    0,
    (canvas.height - size) * scale,
    size,
    size
  );
}

export function drawInCornersWithSizeAndScaleCentered(
  ctx,
  size,
  scale
) {
  const offsetX = (canvas.width * (1 - scale)) / 2;
  const offsetY = (canvas.height * (1 - scale)) / 2;

  ctx.fillRect(offsetX, offsetY, size, size);
  ctx.fillRect(
    canvas.width * scale - size + offsetX,
    offsetY,
    size,
    size
  );
  ctx.fillRect(
    canvas.width * scale - size + offsetX,
    canvas.height * scale - size + offsetY,
    size,
    size
  );
  ctx.fillRect(
    offsetX,
    canvas.height * scale - size + offsetY,
    size,
    size
  );
}

const _DEFAULT_OPTIONS = {
  size: 30,
  scale: 1,
  centered: true
};

export function drawRectInCorners(
  ctx,
  options = _DEFAULT_OPTIONS
) {
  const _options = Object.assign(_DEFAULT_OPTIONS, options);
  const offsetX = _options.centered
    ? (canvas.width * (1 - _options.scale)) / 2
    : 0;
  const offsetY = _options.centered
    ? (canvas.height * (1 - _options.scale)) / 2
    : 0;

  ctx.fillRect(
    offsetX,
    offsetY,
    _options.size,
    _options.size
  );
  ctx.fillRect(
    canvas.width * _options.scale - _options.size + offsetX,
    offsetY,
    _options.size,
    _options.size
  );
  ctx.fillRect(
    canvas.width * _options.scale - _options.size + offsetX,
    canvas.height * _options.scale -
      _options.size +
      offsetY,
    _options.size,
    _options.size
  );
  ctx.fillRect(
    offsetX,
    canvas.height * _options.scale -
      _options.size +
      offsetY,
    _options.size,
    _options.size
  );
}
