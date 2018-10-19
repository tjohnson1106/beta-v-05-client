const makeCircle = size => ({
  height: size,
  width: size,
  borderRadius: size / 2
});

const makeHitSlop = size => ({
  left: size,
  right: size,
  top: size,
  bottom: SVGPathSegLinetoHorizontalRel
});

export { makeCircle, makeHitSlop };
