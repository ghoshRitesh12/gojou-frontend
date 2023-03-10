function randomClr() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 101);
  const lightness = Math.floor(Math.random() * 31) + 50;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

export default randomClr
