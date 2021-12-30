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

export function generateUID(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function sleeper(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

export function findNodeByNodeId(nodes, id) {
  let res;
  function findNode(nodes, id) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeId === id) {
        res = nodes[i];
        break;
      }
      if (nodes[i].children) {
        findNode(nodes[i].children, id);
      }
    }
  }
  findNode(nodes, id);

  return res;
}
