// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(){
    const prependCat =  ['Arnold', ...cats];
    return prependCat;
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}