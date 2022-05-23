export function getTimeFormat(timestamp) {
  const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s);

  let d = new Date();
  if (timestamp) {
    d = new Date(timestamp * 1000);
  } else {
    return "0";
  }

  return `${pad(d.getFullYear(), 4)}-${pad(d.getMonth() + 1)}-${pad(
    d.getDate()
  )} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
