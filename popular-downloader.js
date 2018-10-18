let fs = require('fs');
let rp = require('request-promise');
let path = require('path');

rp('https://www.reddit.com/r/popular.json')
    .then((res) => JSON.parse(res))
    .then((parsedData) => {
        parsedData.data.children.forEach((article) => {
            if (path.extname(article.data.url)) {
                let fileName = `${article.data.id}${path.extname(
                    article.data.url,
                )}`;
                rp(article.data.url, { encoding: 'binary' }).then((res) => {
                    fs.writeFile(
                        path.join(__dirname, `./downloads/${fileName}`),
                        res,
                        { encoding: 'binary' },
                        (err) => {
                            if (err) console.log(err);
                        },
                    );
                });
            }
        });
    });
