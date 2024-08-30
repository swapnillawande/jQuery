// read data from files
// write data into files
// synchronous 
// blocking
// const fs = require('fs');
 
// const getText = fs.readFileSync('./input.txt','utf-8');

// const putText = `German Lang:\n${getText}\nCreated on ${Date.now()}`

// fs.writeFileSync('./newText',putText);

// console.log(getText);

//Asynchronous
// non- blocking // running in background

// const fs = require('fs');

// fs.readFile('./input.txt','utf-8',(error,data)=>{
//     console.log(data);
// })
// console.log("Next code..");
const replaceTemplate = (temp, product)=>{
    let output = temp.replace(/{%NAME%}/g,product.productName);
    output = output.replace(/{%IMG%}/g,product.image);
    output = output.replace(/{%PRICE%}/g,product.price);
    output = output.replace(/{%FROM%}/g,product.from);
    output = output.replace(/{%NUT%}/g,product.nutrients);
    output = output.replace(/{%QUANTITY%}/g,product.quantity);
    output = output.replace(/{%DESC%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);

    if(!product.organic){
        output = output.replace(/{%NOT_ORG%}/g,'not-organic');

    } 
    return output;
}

const fs = require('fs');
const http = require('http');
const url = require('url');
 

// run only once code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const overview_template = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

// server
const server = http.createServer((req,res) => {
    //console.log(request.url);
    const {query,pathname} = url.parse(req.url,true);

    // overview page
    if(pathname ==='/' || pathname === '/overview'){
        res.writeHead(200,{'Content-type':'text/html'})

        const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
        const output = overview_template.replace('{%PRODUCT_CARD%}',cardsHtml);
        
        res.end(output);

    // product page
    }else if(pathname === '/product'){
 
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);

        res.end(output);

    // api page
    }else if(pathname==='/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);

    // not found page
    }else{
        res.writeHead(404,{
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
     
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('Server has been started on port 3000');
})