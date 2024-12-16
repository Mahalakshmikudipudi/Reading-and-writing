
const http=require("http");
// const fs=require("fs");
//const routes=require("./routes");
// const server=http.createServer((req, res) => {
    //url.method


    // const url=req.url;
    // const method=req.method;

    // if(req.url==='/') {
    //     //form


    //     res.setHeader('Content-Type', 'text/html');

    //     res.end(
    //         `
    //         <form action="/message" method="POST">
    //         <label>Name: </label>
    //         <input type="text" name="username"></input>
    //         <button type="submit">Add</button>
    //         </form>
    //         `
    //     )
    // } else {
    //     if(req.url==='/message') {
    //         res.setHeader('Content-Type', 'text/html');
    //         let body=[];
    //         req.on('data', (chunks)=> {
    //             body.push(chunks);
    //         })

    //         req.on('end', ()=> {
    //             let buffer=Buffer.concat(body);
    //             console.log(buffer);
    //             let formData=buffer.toString();
    //             console.log(formData);
    //             const formValues=formData.split("=")[1];
    //             fs.writeFile('formValues.txt', formValues, (err)=> {
    //                 res.statusCode=302;//redirected
    //                 res.setHeader('Location', '/');
    //                 res.end();
    //             });
    //         })
    //     } else {
    //         if(req.url==='/read') {
    //             //read from the file
    //             fs.readFile('formValues.txt', (err, data)=> {
    //                 console.log(data.toString());
    //                 res.end(`
    //                     <h1>${data.toString()}</h1>`);
    //             })
    //         }
    //     }
    // }
//})
//routes.testFunction();

const express=require('express');
const bodyParser=require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// })

app.use('/add-product', (req, res, next) => {
    // console.log('In the middleware!');
    // next(); //this allows the request to continue to the next middleware in line 
    //console.log('In one middleware!');
    //res.send('<h1>The "Add Product" Page</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number", name="size"><button type="submit">Add Product</button></form>');
});

// app.use('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');

// });

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

app.use('/', (req, res, next) => {
    //console.log('In another middleware!');
    res.send('<h1>hello to node js</h1>');
})

const server=http.createServer(app);
 
app.listen(3000);