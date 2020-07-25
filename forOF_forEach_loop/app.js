var names = ["arsalan", "manzoor", "bilal", "ali"];

for (var name of names) {
    console.log(names.indexOf(name) + " - " + name);
}

// Specifically for Arrays

names.forEach(function (name, index) {
    console.log(name, index);
})