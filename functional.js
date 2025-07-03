// // MAP

// // let states = ["Kansas", "Nebraska", "North Dakota"];

// // function urlify(state){
// //     return state.toLowerCase().split(/\s+/).join('-');
// // };

// // function functionalUrls(elements){
// //     return elements.map( element => urlify(element));
// // }

// // console.log(functionalUrls(states))

// // FILTER

// // let altStates = ["Kansas", "Nebraska", "North Dakota"];

// // function filterReg(){
// //     return altStates.filter( state => state.split(/\s+/).length === 2)
// // };

// // function filterInc(){
// //     return altStates.filter( state => state.toLowerCase().includes("dakota"))
// // };

// // console.log(filterInc(altStates));

// // REDUCE

// // let numbers = [1,2,3,4,5,6,7,8,9,10]; 

// // numbers.reduce((total,n) => {
// //     total += n;
// //     return total;
// // }, 0);

// // // More functional REDUCE

// // numbers.reduce((total,n) => {return total += n})

// //let states = ["Nebraska", "Florida", "Idaho", "North Dakota"];

// // let numbers = [1,2,3,4,5]; 

// // function factorArr(numberArray){
// //     return numberArray.reduce((total, n) => {return total * n}, 1);
// // }

// // console.log(factorArr(numbers))

// // OBJECTS

// function reverse(string) {
//     return Array.from(string).reverse().join("");
// };


// function Phrase(content)  {
//     this.content = content;
//     this.processedContent = function processedContent() {
//         let processedContent = this.content.toLowerCase();
//         return processedContent === reverse(processedContent);
//     };
//     this.palindrome = function palindrome() {
//         return this.processedContent() === reverse(this.processedContent());
//     }
// };

// function TranslatedPhrase(content, translation) {
//     this.content = content;
//     this.translation = translation;

// }
// TranslatedPhrase.prototype = new Phrase;

// let frase = new TranslatedPhrase('recognize', 'reconocer');

// console.log(frase.palindrome())

// String.prototype.blank = function blank(string) {
//     this.string = string;
//     if (string.match())
// }