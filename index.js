// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function  destructivelyRemoveLastCat() {
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newAppendCats = [...cats, name];
    return newAppendCats;
}

function prependCat(name) {
    const newPrependCats = [name, ...cats];
    return newPrependCats;
}

function removeLastCat() {
    const newRemoveLastCat = [...cats];
    newRemoveLastCat.pop();
    return newRemoveLastCat;
}

function removeFirstCat() {
    const newRemoveFirstCat = [...cats];
    newRemoveFirstCat.shift();
    return newRemoveFirstCat;
}