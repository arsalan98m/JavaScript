var names = ["arsalan", "manzoor", "bilal", "ali"];

for (var name of names) {
  console.log(names.indexOf(name) + " - " + name);
}

// Specifically for Arrays
// forEach (foreach iteration ky liyeh use karty hain ismy value return nahi hoti);
names.forEach(function (name, index) {
  console.log(name, index);
});

// map (map hum use karty hai agar hamain array ka duplicate bana na hai ya us array ki values ko change kar k new array main update kardy)
// ismy aur forEach main differnce yeh k yeh value return karta hai yani us value ko hum kisi new variable
// main store kar sakty hai jab forEach main value rturn nahi hoti

var videos = [
  "comdy",
  "prank",
  "html basic",
  "tutorial",
  "learning js",
  "html/css",
];

let newVideos = videos.map(function (video) {
  return video.toUpperCase();
});

console.log(videos);

newVideos.push("Heyyy");

console.log(newVideos);

// Find
// find a specic value (it goes each of the item and it only return as when the statement becomes true)
// find one specific thing on array --- agar do value hui tu joh pehly value hai woh return kar dega

let searchTutorial = videos.find(function (video) {
  return video.includes("html");
});

console.log(searchTutorial);

// Filter (filter out some specic values not one this is differnce between filter and find)
// find ek value return karta hai jab k filter main hum ek sy ziya value return karwa sakty hain

let shortSearch = videos.filter(function (video) {
  //return video.length < 10;
  return video.includes("html");
});

console.log(shortSearch);

// some and every

let games = [
  { title: "Mass effect", rating: 9.5 },
  { title: "Call of duty", rating: 10 },
  { title: "Just cause 4", rating: 4 },
  { title: "WWE 2K20", rating: 6 },
  { title: "GTA V", rating: 10 },
];

// every ka matlab hai is example main k kya sari rating 8 sy bari hai jiska jawab hai nhi tu false return hoga
let checkRating = games.every(function (game) {
  return game.rating > 8;
});

console.log(checkRating);

// some ka matlab hai is example main k kya koi ek value bari 8 sy tu true return hojayega
let newRating = games.some(function (game) {
  return game.rating > 8;
});

console.log(newRating);
