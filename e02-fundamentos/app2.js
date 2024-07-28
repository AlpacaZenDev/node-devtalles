
const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');
console.log( data );

const newData = data.replace(/peso/g, 'tamaño');
fs.writeFileSync('README-Angular.md', newData);
console.log( newData );


