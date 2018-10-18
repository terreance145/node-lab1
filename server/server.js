const path = require('path');
const fs = require('fs');

let chirpPath = path.join(__dirname, '../chirps/chirps.json');

let chirpArray = [
    {
        aurthor: 'Tim',
        chirp: 'just some text',
    },
    {
        aurthor: 'Jim',
        chirp: 'just some more text',
    },
    {
        aurthor: 'Tom',
        chirp: 'just another text',
    },
    {
        aurthor: 'Sean',
        chirp: 'yes this is more text',
    },
    {
        aurthor: 'Sam',
        chirp: 'nobody cares for sam',
    },
];

fs.writeFile(chirpPath, JSON.stringify(chirpArray), (e) => {
    if (e) console.log(`Yes you've messed up: ${e}`);

    console.log('Good job big fella!');
});
