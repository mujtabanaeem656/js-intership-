let country = "Pakistan";
let population = 241;
let language = "english";
let isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
