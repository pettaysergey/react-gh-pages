export const newPosition = () => {
  const h = window.innerHeight - 50;
  const w = window.innerWidth - 50;
  const nh = Math.floor(Math.random() * h);
  const nw = Math.floor(Math.random() * w);
  const s = Math.floor(Math.random() * 1000) + 500;

  return [nh, nw, s];
};
