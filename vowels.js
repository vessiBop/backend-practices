const string = ('This sentence should contain all of the vowels I think.');
const stringWithoutVowels = () => {
    return (
    string.replace(/[aeiou]/g, " ")
    

)};


module.exports = {
    stringWithoutVowels
};