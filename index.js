const fs = require('fs')
const http = require('http')
const url = require('url')

const slugify = require('slugify')

const replaceTemplate = require('./modules/replaceTemplate')

////////////////////////////////
// file system
// Blocking, synchronous way

// const fileIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(fileIn)

// const fileOut = `This is what we know about Avocado: ${fileIn}. \n Created on: ${Date.now()}.`
// fs.writeFileSync('./txt/output.txt', fileOut)
// console.log('File has written!')

// Non-Blocking, asynchronous way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log(err)
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3)
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, err => {
//                 if(err)console.log(err)
//             })
//         })
//     })
// })
// console.log('Will read file!')

///////////////////////////////
// server

const overviewTemp = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
)
const cardTemp = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
)
const productTemp = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
)

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const slugs = dataObj.map((el) => {
  return slugify(el.productName, { lower: true })
})

// console.log(slugs)

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true)

  // Overview Page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'content-type': 'text/html' })

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(cardTemp, el))
      .join('')
    const output = overviewTemp.replace('{%PRODUCT_CARDS%}', cardsHtml)
    res.end(output)

    // Product Page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'content-type': 'text/html' })

    const product = dataObj[query.id]
    const output = replaceTemplate(productTemp, product)

    res.end(output)

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(`Product Data:`)

    // Not found
  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
      'my-own-header': 'Hello World!',
    })
    res.end("<h1>Page doesn't exist</h1>")
  }
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on port 3000...')
})
