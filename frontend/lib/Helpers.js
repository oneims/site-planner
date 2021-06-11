export function hexToRgb(c) {
  if (/^#([a-f0-9]{3}){1,2}$/.test(c)) {
    if (c.length == 4) {
      c = "#" + [c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    }
    c = "0x" + c.substring(1);
    return "rgb(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ")";
  }
  return "";
}
