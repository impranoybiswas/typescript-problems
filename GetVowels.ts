function getVowels (str: string) {
    return str.match(/[aeiou]/gi) || []; 
}

function getVowelsLength (str: string) {
    return getVowels(str).length || 0; 
}

console.log(getVowelsLength("javascript"));