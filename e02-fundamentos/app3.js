const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');


// const wordCount = content.split(' ').length;

// console.log( `The word count is: ${wordCount}` );

const wordCountPeso = content.split('peso').length;
console.log( `Número de palabras 'peso' es: ${wordCountPeso}` );


