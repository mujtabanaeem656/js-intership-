alert("Go to console!");

let listOfNeighbours = [
  ["Brazil", "Argentina"],
  ["France"],
  ["Japan", "South Korea", "Thailand"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbour: ${listOfNeighbours[i][j]}`);
  }
}
