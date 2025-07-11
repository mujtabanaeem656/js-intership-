alert("Go to console!");

const neighbours = ["Iran", "Afghanistan", "China", "India"];

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country ");
}

let position = neighbours.indexOf("Iran");
neighbours[position] = "Oman";

console.log("Neighbouring countries are", neighbours[0], ",", neighbours[1], ",", neighbours[2], ",", neighbours[3]);
