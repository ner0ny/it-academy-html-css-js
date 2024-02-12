const a = "|_";
let i = 0;
console.log(a);
let b = a;
while (i < 7) {
  i++;
  b = b + a;
  console.log(b);
}

let desc = "";

for (i = 1; i <= 8; i++) {
  for (j = 1; j <= 8; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        desc += "\u2B1C";
      } else {
        desc += "\u2B1B";
      }
    } else {
      if (j % 2 === 0) {
        desc += "\u2B1B";
      } else {
        desc += "\u2B1C";
      }
    }
  }
  desc += "\n";
}
console.log(desc);
